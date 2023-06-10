import Banner from "../Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstractor/PopularInstructor";
import WhyChoose from "../WhyChoose/WhyChoose";

const Home = () => {
  return (
    // TODO Add an extra section
    <div className="">
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <WhyChoose></WhyChoose>
      <PopularInstructor></PopularInstructor>
    </div>
  );
};

export default Home;
