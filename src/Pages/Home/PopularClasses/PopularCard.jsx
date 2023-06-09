const PopularCard = ({ classData }) => {
  // TODO: Show Ratings Star
  const { class_name, picture, totalEnrolled, rating } = classData;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={picture} className="h-60" alt={class_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#008e48]">{class_name}</h2>
        <div className="flex mt-5 justify-between items-center">
          <p>Students: {totalEnrolled}</p>
          <p>Ratings: {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
