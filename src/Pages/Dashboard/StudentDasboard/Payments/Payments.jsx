import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import { useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_pk_stripe);

const Payments = () => {
  const { user } = useAuth();
  const { id } = useParams();

  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["selected"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selectedClass?email=${user?.email}`
      );
      return res.json();
    },
  });
  const selectClass = classes && classes.find((cl) => cl._id == id);

  const price = selectClass?.price;
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
