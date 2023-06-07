const PopuInsCard = ({ pInstructor }) => {
  const { name, picture, category, number_of_students, ratings } = pInstructor;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={picture} className="h-60" alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#008e48]">{name}</h2>
        <h3>{category}</h3>
        <div className="flex mt-5 justify-between items-center">
          <p>Students: {number_of_students}</p>
          <p>Ratings: {ratings}</p>
        </div>
      </div>
    </div>
  );
};

export default PopuInsCard;
