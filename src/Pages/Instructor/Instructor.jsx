import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../../Components/Container";
import InstructorCard from "./InstructorCard";
import CommonBanner from "../../Components/CommonBanner";
import bannerimg from "../../assets/sas_instructors.jpg";
import { Slide } from "react-awesome-reveal";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios
      .get("https://sports-fit-server.vercel.app/allInstructor")
      .then((res) => {
        setInstructors(res.data);
      });
  }, []);

  return (
    <Slide direction="left">
      <div className="pt-[64px] mb-36">
        <CommonBanner img={bannerimg} title={"Instructors"}></CommonBanner>
        <h3 className="textHeading text-center mt-16">Our All Instructor</h3>
        <div className=" w-1/3 h-1 mx-auto mt-2 mb-16 bg-[#008e48]"></div>
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
    </Slide>
  );
};

export default Instructor;
