import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const BannerContent = ({ image, heading, text }) => {
  return (
    <div className="hero-content py-20 flex-col lg:flex-row-reverse">
      <div className="lg:w-1/2 flex justify-end">
        <img src={image} className=" rounded-lg h-[350px] " />
      </div>
      <div className="lg:w-1/2">
        <Slide direction="right">
          <h1 className="textHeading">{heading}</h1>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p className="py-6">{text}</p>
        </Fade>

        <Link to={"allclass"}>
          <button className="btnPrimary uppercase">view Classes</button>
        </Link>
      </div>
    </div>
  );
};

export default BannerContent;
