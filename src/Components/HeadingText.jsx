const HeadingText = ({ heading, text }) => {
  return (
    <div className="my-5 lg:mt-32 lg:mb-20">
      <p className="text-center uppercase text-black">------{text}-----</p>
      <h2 className="textHeading text-center my-5">{heading}</h2>
      <div className=" w-1/3 h-1 mx-auto mt-6 bg-[#008e48]"></div>
    </div>
  );
};

export default HeadingText;
