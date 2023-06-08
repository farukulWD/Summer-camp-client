import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Submit the form data and create a new class in the database
    // Set the status field to "pending"

    data.feedback = "";
    data.totalEnrolled = 0;
    data.status = "pending";
    data.price = parseInt(data.price);
    data.available_seats = parseInt(data.available_seats);
    console.log(data);
    navigate("/dashboard/myclass");
  };

  // Get the display name and email of the logged-in user/instructor
  const displayName = "John Doe"; // Replace with the actual display name
  const email = "john.doe@example.com"; // Replace with the actual email

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
