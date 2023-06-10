import { useEffect, useState } from "react";
import Container from "../../../Components/Container";
import PopularCard from "./PopularCard";
import HeadingText from "../../../Components/HeadingText";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  // TODO use axios or Query

  const topClasses = classes.slice(0, 6);
  useEffect(() => {
    fetch("https://sports-fit-server.vercel.app/allApprovedClass")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <div className="mt-[80px] my-10">
      <HeadingText heading="Our Popular Classes" text={"Classes"}></HeadingText>
      <Container>
        <div className="grid lg:grid-cols-3  gap-10">
          {topClasses.map((singleClass, index) => (
            <PopularCard key={index} classData={singleClass}></PopularCard>
          ))}
        </div>

        <p className="text-center">
          <Link to="allclass">
            <button className="btnPrimary mt-10 ">More Class</button>
          </Link>
        </p>
      </Container>
    </div>
  );
};

export default PopularClasses;
