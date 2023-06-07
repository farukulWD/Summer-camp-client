const AllClassCard = ({ classData }) => {
  const user = false;

  const handleSelect = (selectedClass) => {
    if (user) {
      console.log(selectedClass);
    } else {
      console.log("please login");
    }
  };

  const { class_name, instructor, picture, number_of_students, rating } =
    classData;
  return (
    <div className="card  bg-base-100 hover:shadow-xl">
      <figure>
        <img src={picture} className="h-60" alt={class_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#008e48]">{class_name}</h2>
        <h3>{instructor}</h3>
        <div className="flex my-5 justify-between items-center">
          <p>Students: {number_of_students}</p>
          <p>Ratings: {rating}</p>
        </div>
        <div>
          <button
            className="btnPrimary"
            onClick={() => handleSelect(classData)}
          >
            {" "}
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllClassCard;
