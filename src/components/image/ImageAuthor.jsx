const ImageAuthor = (props) => {
  return (
    <div className="flex gap-2 items-center">
      <img
        src={props.avatar}
        alt="author_icon"
        className="rounded-[50%] h-8 w-8 border border-gray-500 cursor-pointer"
      />
      <span className="text-[15px] text-[#fff] opacity-80 hover:opacity-100 duration-500">
        {props.first_name}
      </span>
    </div>
  );
};

export default ImageAuthor;
