import { Link } from "react-router-dom";

const BannerContent = ({ image, heading, text }) => {
  return (
    <div className="hero-content py-20 flex-col lg:flex-row-reverse">
      <div className="lg:w-1/2 flex justify-end">
        <img src={image} className=" rounded-lg h-[350px] " />
      </div>
      <div className="lg:w-1/2">
        <h1 className="textHeading">{heading}</h1>
        <p className="py-6">{text}</p>
        <Link to={"allclass"}>
          <button className="btnPrimary uppercase">view Classes</button>
        </Link>
      </div>
    </div>
  );
};

export default BannerContent;
