import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  const { name, picture, email } = instructor;
  return (
    <div className="card border border-[#008e48] hover:bg-base-100 hover:shadow-xl">
      <figure>
        <img src={picture} className="h-60 mt-5 w-60 rounded-full" alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-center text-[#008e48]">
          {name}
        </h2>
        <div className="flex mt-1 text-center">
          <p className="font-bold">
            Email: <span className="font-semibold">{email}</span>{" "}
          </p>
        </div>
        <div className="flex mt-5 text-xl text-[#008b46] justify-center gap-5 items-center">
          <Link>
            <FaFacebook></FaFacebook>
          </Link>
          <Link>
            <FaLinkedinIn></FaLinkedinIn>
          </Link>

          <Link>
            <FaYoutube></FaYoutube>
          </Link>
          <Link>
            <FaTwitter></FaTwitter>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
