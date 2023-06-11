import bannerImag from "../../../src/assets/Summer+Camp.jpg";
import bannerImag2 from "../../../src/assets/footballCamp.jpg";
import bannerImag3 from "../../../src/assets/cricket.jpg";
import bannerImag4 from "../../../src/assets/bascketBall.webp";
import bannerImag5 from "../../../src/assets/Gymnastics.jpeg";
import Container from "../../Components/Container";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BannerContent from "./BannerContent";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="pt-20 ">
      <Container>
        <Slider {...settings}>
          <div>
            <BannerContent
              image={bannerImag}
              heading={"The SportsFit Summer Camp"}
              text={
                "The SportsFit Summer Camp offers expert coaching, fun-filled activities, and a safe environment to ignite a passion for sports."
              }
            ></BannerContent>
          </div>
          <div>
            <BannerContent
              image={bannerImag2}
              heading={"Learn  Football with SportsFit Summer Camp"}
              text={
                "Learn football at SportsFit Summer Camp: Expert coaching, fun-filled activities, and a passion for the game."
              }
            ></BannerContent>
          </div>
          <div>
            <BannerContent
              image={bannerImag3}
              heading={"Learn  cricket with SportsFit Summer Camp"}
              text={
                "Learn cricket at SportsFit Summer Camp: Expert coaching, fun-filled activities, and a passion for the game."
              }
            ></BannerContent>
          </div>
          <div>
            <BannerContent
              image={bannerImag4}
              heading={"Learn  Basket ball with SportsFit Summer Camp"}
              text={
                "Learn Basket ball at SportsFit Summer Camp: Expert coaching, fun-filled activities, and a passion for the game."
              }
            ></BannerContent>
          </div>
          <div>
            <BannerContent
              image={bannerImag5}
              heading={"Learn  Gymnastics with SportsFit Summer Camp"}
              text={
                "Learn Gymnastics at SportsFit Summer Camp: Expert coaching, fun-filled activities, and a passion for the game."
              }
            ></BannerContent>
          </div>
          <div>
            <BannerContent
              image={bannerImag4}
              heading={"Learn  all sports with SportsFit Summer Camp"}
              text={
                "Learn All sports at SportsFit Summer Camp: Expert coaching, fun-filled activities, and a passion for the game."
              }
            ></BannerContent>
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Banner;
