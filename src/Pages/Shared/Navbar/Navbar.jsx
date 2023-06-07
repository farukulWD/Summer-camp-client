import { Link } from "react-router-dom";

import Container from "../../../Components/Container";

const Navbar = () => {
  const user = true;
  const menuItem = (
    <>
      <li className="hover:bg-[#018e47]">
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to="instructor">Instructor</Link>
      </li>
      <li>
        <Link>Home</Link>
      </li>
      {user ? (
        <>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <Link>Log Out</Link>
          </li>
        </>
      ) : (
        <li>
          <Link>Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="w-full text-white bgPrimary fixed z-10">
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
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItem}
              </ul>
            </div>
            <Link to={"/"}>
              <img
                src=""
                className=" cursor-pointer ml-0 hidden md:block normal-case text-xl"
                alt="Logo"
              />
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
