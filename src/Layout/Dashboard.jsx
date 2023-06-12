import { Link, NavLink, Outlet, useNavigation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { FaHome, FaUserEdit } from "react-icons/fa";
import { MdClass, MdPayment } from "react-icons/md";
import { TbSelect } from "react-icons/tb";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { RingLoader } from "react-spinners";

// TODO use  active Active Link

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigation = useNavigation();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {navigation.state === "loading" ? (
            <RingLoader color="#008e48" loading size={91} speedMultiplier={2} />
          ) : (
            ""
          )}

          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu font-semibold p-4 w-80 h-full uppercase bgPrimary text-white ">
            {/* Sidebar content here */}

            {isAdmin && user && (
              <>
                <li>
                  <NavLink to="/dashboard/manageusers">
                    <FaUserEdit></FaUserEdit> Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageclasses">
                    <MdClass></MdClass> Manage Classes
                  </NavLink>
                </li>
              </>
            )}
            {isInstructor && user && (
              <>
                <li>
                  <NavLink to="/dashboard/myclass">
                    <BsReverseLayoutTextWindowReverse></BsReverseLayoutTextWindowReverse>{" "}
                    My Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addclass">
                    <AiOutlineAppstoreAdd></AiOutlineAppstoreAdd> Add Class
                  </NavLink>
                </li>
              </>
            )}
            {!isAdmin && !isInstructor && user && (
              <>
                <li>
                  <NavLink to="/dashboard/selectedclass">
                    <TbSelect></TbSelect> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolled">
                    <MdPayment></MdPayment> My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentshistory">
                    <HiSquare3Stack3D></HiSquare3Stack3D> My Payments History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider border-red-400"></div>
            <li>
              <Link to={"/"}>
                <FaHome /> Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
