import { Link } from "react-router-dom";
import Container from "../../../Components/Container";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  // TODO add contact Section
  const isDark = localStorage.getItem("theme");
  return (
    <section className={isDark == "dark" ? "bg-[#1d232a]" : "bg-[#2b8e5d]"}>
      <Container>
        <footer className="footer footer-center p-10  text-primary-content">
          <div>
            <p className="font-bold text-xl">
              SportsFit Summer School <br />
              Providing reliable Sport training
            </p>
            <p>Dhaka Bangladesh</p>
            <p>Copyright © 2023 - All right reserved</p>
          </div>
          <div className="flex gap-6">
            <Link>
              {" "}
              <FaFacebook className="text-2xl"></FaFacebook>
            </Link>
            <Link>
              {" "}
              <FaLinkedinIn className="text-2xl"></FaLinkedinIn>
            </Link>
            <Link>
              {" "}
              <FaTwitter className="text-2xl"></FaTwitter>
            </Link>
          </div>
        </footer>
      </Container>
    </section>
  );
};

export default Footer;
