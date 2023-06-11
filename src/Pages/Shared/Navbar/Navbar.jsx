import { Link } from "react-router-dom";

import Container from "../../../Components/Container";
import logo from "../../../assets/Logo.png";
import useAuth from "../../../Hooks/useAuth";
import ToggleThem from "../../../Components/TogleDarkLight/ToggleThem";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const isDark = localStorage.getItem("theme");

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  const menuItem = (
    <>
      <li className="hover:bg-[#018e47]">
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to="instructor">Instructor</Link>
      </li>
      <li>
        <Link to="allclass">Classes</Link>
      </li>
      {user ? (
        <>
          <img
            className="w-6 h-6 mt-2 rounded-full"
            src={user && user.photoURL}
            alt=""
          />

          <li>
            <Link onClick={handleLogOut}>Log Out</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
      <li>
        <ToggleThem></ToggleThem>
      </li>
    </>
  );
  return (
    <div
      className={
        isDark === "dark"
          ? "w-full text-white bg-[#1d232a] fixed z-10"
          : "w-full text-white bgPrimary fixed z-10"
      }
    >
      <Container>
        <div className="navbar  flex items-center justify-between mx-auto px-4 py-1">
          <div className="flex items-center">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bgPrimary rounded-box w-52"
              >
                {menuItem}
              </ul>
            </div>
            <Link to={"/"}>
              <div className="flex gap-4 items-center">
                <img
                  src={logo}
                  className=" cursor-pointer w-8 h-8 ml-0 hidden md:block normal-case text-xl"
                  alt="Logo"
                />
                <p className="uppercase hidden lg:block font-bold text-xl">
                  SportsFit
                </p>
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItem}</ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
