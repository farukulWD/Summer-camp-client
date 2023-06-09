import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useSecure from "../../../../Hooks/useSecure";

const stripePromise = loadStripe(import.meta.env.VITE_pk_stripe);

const Payments = () => {
  const [axiosSecure] = useSecure();
  const { user } = useAuth();
  const { id } = useParams();

  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["selected"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/selectedClass?email=${user?.email}`);
      return res.data;
    },
  });
  const selectClass = classes.find((cl) => cl._id == id);

  const price = selectClass?.price || 0;

  return (
    <div className="w-full">
      {isLoading ? <p>Loading......</p> : null}
      <Elements stripe={stripePromise}>
        <Checkout
          price={price}
          classData={selectClass}
          isLoading={isLoading}
        ></Checkout>
      </Elements>
    </div>
  );
};

export default Payments;
