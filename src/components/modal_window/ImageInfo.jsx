const ImageInfo = (props) => {
  return (
    <div className="text-[14px] leading-[1.4285714286] max-w-[600px] py-[14px]">
      <div className="flex flex-col gap-1">
        <span className="text-[#767676]">Likes</span>
        <span className="font-medium">{props.likes}</span>
      </div>
      <p className="mt-8">{props.description}</p>
    </div>
  );
};

export default ImageInfo;
