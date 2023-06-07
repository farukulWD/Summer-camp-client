import React from "react";

const InstructorCard = ({ instructor }) => {
  const { name, picture, contact } = instructor;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={picture} className="h-60" alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#008e48]">{name}</h2>
        <div className="flex mt-5 justify-between items-center">
          <p>Email: {contact.email}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
