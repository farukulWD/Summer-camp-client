import { motion } from "framer-motion";
import Container from "../../../Components/Container";
import choosImag from "../../../assets/chooses.webp";
import icon1 from "../../../assets/around.webp";
import icon2 from "../../../assets/natural.webp";
import icon3 from "../../../assets/icon3.webp";

const WhyChoose = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="hero mt-20 mb-10"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <p className="">-----chooses Resown ----</p>
            <h1 className="textHeading my-5">Why Choose Us</h1>
            <div className="w-1/2 h-1 mt-6 mb-20 bg-[#008e48]"></div>
            <motion.div
              className="grid text-[#008e48] grid-cols-2 md:grid-cols-3 mt-10 gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="card border border-[#008e48]"
                whileHover={{ scale: 1.1 }}
              >
                <figure className="px-10 pt-10">
                  <motion.img
                    src={icon1}
                    className="rounded-xl"
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Diversity Around</h2>
                </div>
              </motion.div>
              <motion.div
                className="card border border-[#008e48]"
                whileHover={{ scale: 1.1 }}
              >
                <figure className="px-10 pt-10">
                  <motion.img
                    src={icon2}
                    className="rounded-xl"
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Natural all the way</h2>
                </div>
              </motion.div>

              <motion.div
                className="card border border-[#008e48]"
                whileHover={{ scale: 1.1 }}
              >
                <figure className="px-10 pt-10">
                  <motion.img
                    src={icon3}
                    className="rounded-xl"
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Experience and trusty</h2>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2">
            <div className="card-body">
              <motion.img
                src={choosImag}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default WhyChoose;
