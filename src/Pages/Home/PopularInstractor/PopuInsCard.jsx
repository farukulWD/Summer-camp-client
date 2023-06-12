import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PopuInsCard = ({ pInstructor }) => {
  const { name, picture, number_of_students } = pInstructor;
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="card border border-[#008e48] hover:bg-base-100 hover:shadow-xl"
    >
      <figure>
        <img src={picture} className="h-60 mt-5 w-60 rounded-full" alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center text-2xl  text-[#008e48]">
          {name}
        </h2>
        <p className="text-center">Students: {number_of_students}</p>

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
    </motion.div>
  );
};

export default PopuInsCard;
