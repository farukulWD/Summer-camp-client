import axios from "axios";
import { useState } from "react";
import Container from "../../Components/Container";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);
  axios.get("PopularInstructor.json").then((res) => {
    setInstructors(res.data);
  });

  return (
    <div className="pt-[80px] mb-36">
      <h3 className="textHeading text-center mb-16">Our All Instructor</h3>
      <Container>
        <div className="grid lg:grid-cols-3  gap-10">
          {instructors.map((instructor, index) => (
            <InstructorCard
              key={index}
              instructor={instructor}
            ></InstructorCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instructor;
