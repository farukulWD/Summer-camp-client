import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const isDark = localStorage.getItem("theme");
  return (
    <div
      className={
        isDark == "dark"
          ? "bg-[#1d232a] h-[100vh] flex flex-col justify-center items-center  "
          : " bg-white h-[100vh] flex flex-col justify-center items-center  "
      }
    >
      <div className=" w-[500px] h-[450px]">
        <Player src="error.json" className="player" loop autoplay speed={10} />
      </div>

      <div className="mt-4 z-20">
        <Link
          to="/"
          className="btnPrimary text-sm font-medium text-white  rounded-md "
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
