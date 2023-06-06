import { useRef } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);

    console.log(data);
  };

  return (
    <div className="py-16">
      <h2 className="textPrimary text-center my-10">Register Here</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
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
        <div className="mb-4">
          <input
            type="password"
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
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            className="w-full p-2 border focus:outline-none focus:border-green-500 border-gray-300 rounded"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
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
        <div className="mb-4">
          <input
            type="text"
            placeholder="Gender"
            id="gender"
            className="w-full p-2 border focus:outline-none focus:border-green-500 border-gray-300 rounded"
            {...register("gender")}
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Phone Number"
            id="phoneNumber"
            className="w-full p-2 border focus:outline-none focus:border-green-500 border-gray-300 rounded"
            {...register("phoneNumber")}
          />
        </div>
        <div className="mb-4">
          <textarea
            id="address"
            placeholder="Address"
            className="w-full p-2 border focus:outline-none focus:border-green-500 border-gray-300 rounded"
            {...register("address")}
          />
        </div>
        <button type="submit" className="btnPrimary w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
