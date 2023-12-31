import { Rating } from "@smastrom/react-rating";
import { motion } from "framer-motion";

import "@smastrom/react-rating/style.css";

const PopularCard = ({ classData }) => {
  const { class_name, picture, totalEnrolled, rating } = classData;
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="card  bg-base-100 shadow-xl"
    >
      <figure>
        <img src={picture} className="h-60 " alt={class_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#008e48]">{class_name}</h2>
        <div className="flex mt-5 justify-between items-center">
          <p>Enrolled: {totalEnrolled}</p>
          <p className="flex items-center gap-4">
            <Rating
              className="text-[#008e48]"
              style={{ maxWidth: 100 }}
              value={rating}
              readOnly
            />

            {rating}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularCard;
