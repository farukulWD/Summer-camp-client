import { Link, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";

// TODO use  active Active Link

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();

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
          <ul className="menu p-4 w-80 h-full bgPrimary text-white ">
            {/* Sidebar content here */}

            {isAdmin && user && (
              <>
                <li>
                  <Link to="/dashboard/manageusers">Manage Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageclasses">Manage Classes</Link>
                </li>
              </>
            )}
            {isInstructor && user && (
              <>
                <li>
                  <Link to="/dashboard/myclass">My Classes</Link>
                </li>
              </>
            )}
            {!isAdmin && !isInstructor && user && (
              <>
                <li>
                  <Link to="/dashboard/selectedclass">My Selected Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/enrolled">My Enrolled Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/paymentshistory">
                    My Payments History
                  </Link>
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
