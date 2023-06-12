import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Components/GoogleLogin";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const Register = () => {
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";
  const { createUserWithEmail, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    const { email, password, name, photoUrl } = data;

    createUserWithEmail(email, password)
      .then(() => {
        updateUserProfile(name, photoUrl)
          .then(() => {
            // const savedUser = ;
            axios
              .post("https://sports-fit-server.vercel.app/users", {
                name: name,
                picture: photoUrl,
                email: email,
                role: "student",
              })
              .then((data) => {
                if (data.data.insertedId) {
                  Swal.fire({
                    icon: "success",
                    title: "Sign UP Success",
                  });
                  reset();
                  navigate(from);
                }
              });
          })
          .catch(() => {});
      })
      .catch((err) => {
        setError(err.message.slice(22, -2));
      });
  };

  return (
    <div className="py-16 px-2 max-w-lg mx-auto">
      <h2 className="textPrimary text-center my-10">Register Here</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
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
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\W).*$/,
                message:
                  "Password must contain a capital letter and a special character",
              },
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
        <div className="mb-4 relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            id="confirmPassword"
            className="w-full p-2 border focus:outline-none focus:border-green-500 border-gray-300 rounded"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
          <span
            className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <RiEyeOffFill /> : <RiEyeFill />}
          </span>

          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="photoUrl"
            placeholder="Photo Url"
            className="w-full p-2 border focus:outline-none focus:border-green-500 border-gray-300 rounded"
            {...register("photoUrl")}
          />
        </div>
        <label className="label">
          <span className="label-text text-red-600">{error}</span>
        </label>

        <p className="mb-4">
          Already Have an account?{" "}
          <Link className="text-[#008e48]" to={"/login"}>
            Login
          </Link>
        </p>
        <button type="submit" className="btnPrimary w-full">
          Register
        </button>
      </form>
      <div className="divider">OR</div>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Register;
