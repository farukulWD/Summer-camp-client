import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { RingLoader } from "react-spinners";

const Main = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navbar></Navbar>
      <div className="fixed top-[50%] left-[50%]">
        {navigation.state === "loading" ? (
          <RingLoader color="#008e48" loading size={91} speedMultiplier={2} />
        ) : (
          ""
        )}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
