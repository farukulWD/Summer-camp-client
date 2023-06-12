import { useEffect, useState } from "react";
import Container from "../../Components/Container";
import AllClassCard from "./AllClassCard";
import axios from "axios";
import CommonBanner from "../../Components/CommonBanner";
import bannerimg from "../../assets/football.jpg";
import { Slide } from "react-awesome-reveal";

const AllClass = () => {
  const [allClass, setAllClass] = useState([]);
  useEffect(() => {
    axios
      .get("https://sports-fit-server.vercel.app/allApprovedClass")
      .then((res) => {
        setAllClass(res.data);
      });
  }, []);

  return (
    <Slide direction="right">
      <div className="pt-[64px] mb-36">
        <CommonBanner
          img={bannerimg}
          title={"Our All Classes Here"}
        ></CommonBanner>
        <h3 className="textHeading text-center my-16">Our All Classes</h3>
        <Container>
          <div className="grid lg:grid-cols-3  gap-10">
            {allClass.map((cla, index) => (
              <AllClassCard key={index} classData={cla}></AllClassCard>
            ))}
          </div>
        </Container>
      </div>
    </Slide>
  );
};

export default AllClass;
