import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";

// TODO use secure systems

const Checkout = ({ price, classData, isLoading }) => {
  const { _id, class_name, description, picture, rating, instructor } =
    classData || {};
  const stripe = useStripe();
  const element = useElements();
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  console.log(price, classData);
  useEffect(() => {
    if (price > 0) {
      axios
        .post("http://localhost:5000/createIntent", { price })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [price]);
  const handlePayment = async (event) => {
    event.preventDefault();
    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError);
    }

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        id: _id,
        email: user?.email,
        studentName: user?.displayName,
        class_name,
        description,
        picture,
        rating,
        instructor,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
      };
      axios.post("http://localhost:5000/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertResult.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your order has been successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  return (
    <div className="w-1/2 mx-auto">
      {isLoading ? <p>Loading......</p> : null}
      <form onSubmit={handlePayment}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm my-3"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-800">{cardError}</p>}
      {transactionId && <p className="text-green-500">{transactionId}</p>}
    </div>
  );
};

export default Checkout;