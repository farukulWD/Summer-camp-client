import { useEffect, useState } from "react";
import Container from "../../../Components/Container";
import PopularCard from "./PopularCard";
import HeadingText from "../../../Components/HeadingText";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  // TODO use axios or Query

  const topClasses = classes.slice(0, 6);
  useEffect(() => {
    fetch("http://localhost:5000/allApprovedClass")
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
      </Container>
    </div>
  );
};

export default PopularClasses;
