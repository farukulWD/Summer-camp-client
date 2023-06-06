const PopularCard = ({ classData }) => {
  const { class_name, picture } = classData;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={picture} className="h-56" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#008e48]">{class_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btnPrimary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
