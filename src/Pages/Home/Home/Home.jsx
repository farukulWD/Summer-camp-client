import Banner from "../Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstractor/PopularInstructor";
import WhyChoose from "../WhyChoose/WhyChoose";

import { Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    // TODO Add an extra section
    <div className="">
      <Banner></Banner>
      <Slide direction="right">
        <PopularClasses></PopularClasses>
      </Slide>
      <Slide direction="left">
        <WhyChoose></WhyChoose>
      </Slide>
      <Slide direction="right">
        <PopularInstructor></PopularInstructor>
      </Slide>
    </div>
  );
};

export default Home;
