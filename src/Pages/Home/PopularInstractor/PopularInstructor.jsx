import { useEffect, useState } from "react";
import Container from "../../../Components/Container";
import PopuInsCard from "./PopuInsCard";
import HeadingText from "../../../Components/HeadingText";
import { Link } from "react-router-dom";

const PopularInstructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch("https://sports-fit-server.vercel.app/allInstructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
      });
  }, []);

  const topInstructor = instructor.slice(0, 6);

  return (
    <div>
      <div className="mt-[80px] my-10">
        <HeadingText
          heading="Our Popular Instructor"
          text={"Instructor"}
        ></HeadingText>
        <Container>
          <div className="grid lg:grid-cols-3  gap-10">
            {topInstructor.map((pInstructor, index) => (
              <PopuInsCard key={index} pInstructor={pInstructor}></PopuInsCard>
            ))}
          </div>

          <p className="text-center">
            <Link to="instructor">
              <button className="btnPrimary my-5 ">View More</button>
            </Link>
          </p>
        </Container>
      </div>
    </div>
  );
};

export default PopularInstructor;
