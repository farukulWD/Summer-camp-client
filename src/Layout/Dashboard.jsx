import { Link, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  user.role == "instructor";
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
            {user && (
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
            {user && (
              <>
                <li>
                  <Link to="/dashboard/myclass">My Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/enrolled">My Enrolled Classes</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
