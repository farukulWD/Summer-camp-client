const HeadingText = ({ heading, text }) => {
  const isDark = localStorage.getItem("theme");
  return (
    <div className="my-5 lg:mt-20 lg:mb-20">
      <p
        className={
          isDark
            ? "text-center uppercase text-white"
            : "text-center uppercase text-black"
        }
      >
        ------{text}-----
      </p>
      <h2 className="textHeading text-center my-5">{heading}</h2>
      <div className=" w-1/3 h-1 mx-auto mt-6 bg-[#008e48]"></div>
    </div>
  );
};

export default HeadingText;
