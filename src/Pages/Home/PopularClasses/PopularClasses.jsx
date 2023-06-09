import { useEffect, useState } from "react";
import Container from "../../../Components/Container";
import PopularCard from "./PopularCard";

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
      <h3 className="textHeading text-center mb-16">Our Popular Classes</h3>
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
