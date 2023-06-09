import { useEffect, useState } from "react";
import Container from "../../../Components/Container";
import PopuInsCard from "./PopuInsCard";

const PopularInstructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch("PopularInstructor.json")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
      });
  }, []);
  const sortedClasses = instructor.sort(
    (a, b) => b.number_of_students - a.number_of_students
  );

  const topInstructor = sortedClasses.slice(0, 6);

  return (
    <div>
      <div className="mt-[80px] my-10">
        <h3 className="textHeading text-center mb-16">
          Our Popular Instructor
        </h3>
        <Container>
          <div className="grid lg:grid-cols-3  gap-10">
            {topInstructor.map((pInstructor, index) => (
              <PopuInsCard key={index} pInstructor={pInstructor}></PopuInsCard>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PopularInstructor;
