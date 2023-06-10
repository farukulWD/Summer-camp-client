import Banner from "../Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstractor/PopularInstructor";

const Home = () => {
  return (
    // TODO Add an extra section
    <div className="">
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
    </div>
  );
};

export default Home;
