import { useEffect, useState } from "react";
import Container from "../../../Components/Container";
import PopularCard from "./PopularCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, []);
  return (
    <div className="mt-[80px]">
      <h3 className="textHeading text-center mb-10">Our Popular Classes</h3>
      <Container>
        <div className="grid lg:grid-cols-3 gap-4">
          {classes.map((singleClass, index) => (
            <PopularCard key={index} classData={singleClass}></PopularCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularClasses;
