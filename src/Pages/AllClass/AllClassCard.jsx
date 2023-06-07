const AllClassCard = ({ classData }) => {
  const user = false;

  const handleSelect = (selectedClass) => {
    if (user) {
      console.log(selectedClass);
    } else {
      console.log("please login");
    }
  };

  const {
    class_name,
    instructor,
    Available_seats,
    price,
    picture,
    number_of_students,
    rating,
  } = classData;

  const buttonClass =
    Available_seats === 0 || user.role == "admin"
      ? "btn text-white btnDisabled"
      : "btnPrimary";
  const cardClass =
    Available_seats === 0
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
            <p>Students: {number_of_students}</p>
            <p>Ratings: {rating}</p>
          </div>
          <div>
            <p>Seats: {Available_seats}</p>
            <p>Price: ${price}</p>
          </div>
        </div>
        <div>
          <button
            className={buttonClass}
            onClick={() => handleSelect(classData)}
            disabled={Available_seats === 0}
          >
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllClassCard;
