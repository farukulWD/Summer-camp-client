import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";

// TODO use  active Active Link

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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
                  <NavLink to="/dashboard/manageusers">Manage Users</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageclasses">
                    Manage Classes
                  </NavLink>
                </li>
              </>
            )}
            {isInstructor && user && (
              <>
                <li>
                  <NavLink to="/dashboard/myclass">My Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addclass">Add Class</NavLink>
                </li>
              </>
            )}
            {!isAdmin && !isInstructor && user && (
              <>
                <li>
                  <NavLink to="/dashboard/selectedclass">
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolled">
                    My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentshistory">
                    My Payments History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider border-red-400"></div>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
