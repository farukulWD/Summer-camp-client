import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Instructor from "../Pages/Instructor/Instructor";
import AllClass from "../Pages/AllClass/AllClass";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import SelectedClass from "../Pages/Dashboard/StudentDasboard/SelectedClass/SelectedClass";
import MyEnrolled from "../Pages/Dashboard/StudentDasboard/MyEnrolled/MyEnrolled";
import PaymentHistory from "../Pages/Dashboard/StudentDasboard/Payments/PaymentHistory";
import Payments from "../Pages/Dashboard/StudentDasboard/Payments/Payments";
import MyClasses from "../Pages/Dashboard/InstructorDashboard/MyClasses";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass";
import Update from "../Pages/Dashboard/InstructorDashboard/Update";
import PrivetRoutes from "./PrivetRoutes";
import ManageUser from "../Pages/Dashboard/AdminDashboard/ManageUser";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "allclass",
        element: <AllClass></AllClass>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoutes>
        <Dashboard></Dashboard>
      </PrivetRoutes>
    ),
    children: [
      {
        path: "selectedclass",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "enrolled",
        element: <MyEnrolled></MyEnrolled>,
      },
      {
        path: "paymentshistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "payment/:id",
        element: <Payments></Payments>,
      },
      {
        path: "myclass",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
      {
        path: "update/:id",
        element: <Update></Update>,
      },
      {
        path: "manageusers",
        element: (
          <PrivetRoutes>
            <ManageUser></ManageUser>
          </PrivetRoutes>
        ),
      },
      {
        path: "manageclasses",
        element: (
          <PrivetRoutes>
            <ManageClasses></ManageClasses>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);

export default router;
