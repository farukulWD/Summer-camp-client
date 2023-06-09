import { useForm } from "react-hook-form";

import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import useSecure from "../../../Hooks/useSecure";
const keyImage = import.meta.env.VITE_Image_key;
const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${keyImage}`;
// TODO use secure system
const AddClass = () => {
  const [axiosSecure] = useSecure();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.picture[0]);

    data.feedback = "";
    data.totalEnrolled = 0;
    data.status = "pending";
    data.rating = 4.6;
    data.price = parseInt(data.price);
    data.available_seats = parseInt(data.available_seats);

    axios.post(imageHostingUrl, formData).then((res) => {
      if (res.data.data.display_url) {
        data.picture = res.data.data.display_url;
        axiosSecure.post("/addclasses", data).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Add Class success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  const displayName = user?.displayName;
  const email = user?.email;

  return (
    <div className="w-full">
      <div className="max-w-lg mx-auto">
        <h1 className="textPrimary text-center mb-4">Add a Class</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="class_name" className="block mb-1">
              Class Name
            </label>
            <input
              type="text"
              id="class_name"
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
              type="file"
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
              value={displayName}
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
              value={email}
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
              id="price"
              className="border border-gray-300 p-2 w-full"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-red-500">Price is required</span>
            )}
          </div>

          <button type="submit" className="btnPrimary w-full">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
