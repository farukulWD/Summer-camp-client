import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import GoogleLogin from "../../Components/GoogleLogin";
import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import Swal from "sweetalert2";

const Login = () => {
  const { Login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    Login(email, password)
      .then(() => {
        navigate(from);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login has been successful",
        });
      })
      .catch((err) => {
        setError(err.message.slice(22, -2));
      });
  };

  return (
    <div className="py-16 max-w-lg mx-auto lg:h-[500px]">
      <h2 className="textPrimary text-center my-10">Please Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="w-full focus:outline-none focus:border-green-500 p-2 border border-gray-300 rounded"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            className="w-full p-2 border focus:outline-none focus:border-green-500 border-gray-300 rounded"
            {...register("password", {
              required: "Password is required",
            })}
          />
          <span
            className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
          </span>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <label className="label">
          <span className="label-text text-red-600">{error}</span>
        </label>

        <p className="mb-4">
          Do not Have an account?{" "}
          <Link to={"/register"} className="text-[#008e48]">
            Register
          </Link>
        </p>

        <button type="submit" className="btnPrimary w-full">
          Login
        </button>
      </form>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Login;
