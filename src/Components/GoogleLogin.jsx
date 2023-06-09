import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    googleLogin()
      .then((result) => {
        const { displayName, email } = result.user;
        axios
          .post("http://localhost:5000/users", {
            name: displayName,

            email: email,
            role: "student",
          })
          .then((data) => {
            if (data.data) {
              Swal.fire({
                icon: "success",
                title: "Login Success",
              });

              navigate(from);
            }
          });
      })
      .catch(() => {});
  };
  return (
    <div className="my-4">
      <button
        onClick={handleLogin}
        className="btn btn-outline hover:bg-[#e3fcf7] w-full text-[#008e48]"
      >
        <FaGoogle className="text-[#008e48] "></FaGoogle>
      </button>
    </div>
  );
};

export default GoogleLogin;
