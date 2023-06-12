import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import Container from "../../../Components/Container";
import PopularCard from "./PopularCard";
import HeadingText from "../../../Components/HeadingText";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  const topClasses = classes.slice(0, 6);
  useEffect(() => {
    fetch("https://sports-fit-server.vercel.app/allApprovedClass")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <div className="mt-[60px] my-10">
      <HeadingText heading="Our Popular Classes" text={"Classes"}></HeadingText>
      <Container>
        <div className="grid lg:grid-cols-3  gap-10">
          {topClasses.map((singleClass, index) => (
            <PopularCard key={index} classData={singleClass}></PopularCard>
          ))}
        </div>

        <p className="text-center">
          <Link to="allclass">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btnPrimary mt-10 "
            >
              More Class
            </motion.button>
          </Link>
        </p>
      </Container>
    </div>
  );
};

export default PopularClasses;
