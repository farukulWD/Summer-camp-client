import { useEffect, useState } from "react";
import Container from "../../../Components/Container";
import PopularCard from "./PopularCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  // TODO use axios or Query

  const sortedClasses = classes.sort(
    (a, b) => b.number_of_students - a.number_of_students
  );

  const topClasses = sortedClasses.slice(0, 6);
  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
