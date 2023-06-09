import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useSecure from "../../Hooks/useSecure";

const AllClassCard = ({ classData }) => {
  const [axiosSecure] = useSecure();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const handleSelect = (selectedClass) => {
    if (user && user?.email) {
      const {
        _id,
        class_name,
        picture,
        price,
        rating,
        instructor,
        instructor_email,
      } = selectedClass;
      const selectClass = {
        classId: _id,
        class_name,
        picture,
        instructor_email,
        price,
        rating,
        instructor,
        studentName: user.displayName,
        studentEmail: user.email,
      };
      axiosSecure.post("/selected", selectClass).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Selected Success",
          });
        }
      });
    } else {
      navigate("/login");
    }
  };

  const {
    class_name,
    instructor,
    available_seats,
    price,
    picture,
    totalEnrolled,
    rating,
  } = classData;

  const buttonClass =
    available_seats === 0 || user?.role == "admin"
      ? "btn text-white btnDisabled"
      : "btnPrimary";
  const cardClass =
    available_seats === 0
      ? "card bg-red-500 hover:shadow-xl"
      : "card bg-base-100 hover:shadow-xl";
  return (
    <div className={cardClass}>
      <figure>
        <img src={picture} className="h-60" alt={class_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#008e48]">{class_name}</h2>
        <h3>{instructor}</h3>
        <div className="flex my-5 justify-between items-center">
          <div>
            <p>Students: {totalEnrolled}</p>
            <p>Ratings: {rating}</p>
          </div>
          <div>
            <p>Seats: {available_seats}</p>
            <p>Price: ${price}</p>
          </div>
        </div>
        <div>
          <button
            className={buttonClass}
            onClick={() => handleSelect(classData)}
            disabled={available_seats === 0}
          >
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllClassCard;
