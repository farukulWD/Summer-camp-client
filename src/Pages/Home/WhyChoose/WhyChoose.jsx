import Container from "../../../Components/Container";
import choosImag from "../../../assets/chooses.webp";
import icon1 from "../../../assets/around.webp";
import icon2 from "../../../assets/natural.webp";
import icon3 from "../../../assets/icon3.webp";
const WhyChoose = () => {
  return (
    <Container>
      <div className="hero mt-20 mb-10 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2  lg:text-left">
            <p className="">-----chooses Resown ----</p>
            <h1 className="textHeading my-5">Why Choose Us</h1>
            <div className=" w-1/2 h-1  mt-6 mb-20 bg-[#008e48]"></div>
            <div className="grid  text-[#008e48] grid-cols-2 md:grid-cols-3 mt-10 gap-5">
              <div className="card    border border-[#008e48]">
                <figure className="px-10 pt-10">
                  <img src={icon1} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Diversity Around</h2>
                </div>
              </div>
              <div className="card  border border-[#008e48]">
                <figure className="px-10 pt-10">
                  <img src={icon2} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Natural all the way</h2>
                </div>
              </div>
              <div className="card   border border-[#008e48]">
                <figure className="px-10 pt-10">
                  <img src={icon3} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Experience and trusty</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2  ">
            <div className="card-body">
              <img src={choosImag} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;
