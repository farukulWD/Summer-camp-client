import Container from "../../Components/Container";
import bannerImag from "../../../src/assets/1yRhwqQy7.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  return (
    <section className="pt-16">
      <Container>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 flex justify-end">
            <img src={bannerImag} className=" rounded-lg shadow-2xl" />
          </div>
          <div className="lg:w-1/2">
            <h1 className="textHeading">BEAUTY SALON FOR EVERY WOMEN</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <button className="btnPrimary">Get an Appointment</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
