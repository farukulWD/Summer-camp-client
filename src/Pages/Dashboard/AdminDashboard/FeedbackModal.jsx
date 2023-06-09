import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FeedbackModal = ({ onClose, showFeedbackSuccess, id }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data.feedback, id);
    onClose();

    axios
      .patch(
        `http://localhost:5000/allClass/feedback/${id}?feedback=${data.feedback}`
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          showFeedbackSuccess();
        }
      });
  };
  return (
    <div className="bg-white px-10 py-10 rounded-xl  shadow-xl">
      <div className="">
        <h2 className="text-3xl font-bold my-10 textPrimary">Send Feedback</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg mx-auto"
        >
          <textarea
            {...register("feedback")}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter Your Feedback"
            rows="4"
          />

          <button
            type="submit"
            className="w-full px-4 py-2 my-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Update
          </button>
        </form>
        {/* <button className="btn w-full" onClick={onClose}>
          Close
        </button> */}
      </div>
    </div>
  );
};

export default FeedbackModal;
