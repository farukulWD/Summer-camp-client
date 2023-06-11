import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import useSecure from "../../../Hooks/useSecure";

const Update = () => {
  const { id } = useParams();
  const [axiosSecure] = useSecure();
  const { user } = useAuth();

  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: myClass = {} } = useQuery({
    queryKey: ["classData"],
    queryFn: async () => {
      const res = await axiosSecure(`/myclass/${id}?email=${user?.email}`);
      return res.data;
    },
  });

  const onSubmit = (data) => {
    const { class_name, picture, available_seats, price } = data;

    axiosSecure.patch(`/update/class/${id}`, data).then((res) => {});
  };

  //  TODO work Update

  return (
    <div className="w-full">
      <div className="max-w-lg mx-auto">
        <h1 className="textPrimary text-center mb-4">Update a Class</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="class_name" className="block mb-1">
              Class Name
            </label>
            <input
              type="text"
              id="class_name"
              defaultValue={myClass?.class_name}
              className="border border-gray-300 p-2 w-full"
              {...register("class_name", { required: true })}
            />
            {errors.class_name && (
              <span className="text-red-500">Class Name is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="picture" className="block mb-1">
              Picture
            </label>
            <input
              type="text"
              defaultValue={myClass?.picture}
              id="picture"
              className="border border-gray-300 p-2 w-full"
              {...register("picture", { required: true })}
            />
            {errors.picture && (
              <span className="text-red-500">Picture is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="instructor" className="block mb-1">
              Instructor
            </label>
            <input
              type="text"
              id="instructor"
              className="border border-gray-300 p-2 w-full"
              value={user.displayName}
              readOnly
              {...register("instructor", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="instructor_email" className="block mb-1">
              Instructor Email
            </label>
            <input
              type="email"
              id="instructor_email"
              className="border border-gray-300 p-2 w-full"
              value={user?.email}
              readOnly
              {...register("instructor_email", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="available_seats" className="block mb-1">
              Available Seats
            </label>
            <input
              type="number"
              id="available_seats"
              defaultValue={myClass?.available_seats}
              className="border border-gray-300 p-2 w-full"
              {...register("available_seats", { required: true })}
            />
            {errors.available_seats && (
              <span className="text-red-500">Available Seats is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block mb-1">
              Price
            </label>
            <input
              type="number"
              defaultValue={myClass?.price}
              id="price"
              className="border border-gray-300 p-2 w-full"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-red-500">Price is required</span>
            )}
          </div>

          <button type="submit" className="btnPrimary w-full">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
