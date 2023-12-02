const ImageInfo = (props) => {

  let create_time = props.create_time.slice(0,10);
  let update_time = props.update_time.slice(0,10);

  return (
    <div className="text-[14px] leading-[1.4285714286] max-w-[600px] py-[14px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1 w-fit text-[10px] md:text-[14px] md:w-1/3">
          <span className="text-[#767676]">Likes</span>
          <span className="font-medium">{props.likes}</span>
        </div>
        <div className="flex flex-col gap-1 w-fit text-[10px] md:text-[14px] md:w-1/3">
          <span className="text-[#767676]">Created</span>
          <span className="font-medium">{create_time}</span>
        </div>
        <div className="flex flex-col gap-1 w-fit text-[10px] md:text-[14px] md:w-1/3">
          <span className="text-[#767676]">Updated at</span>
          <span className="font-medium">{update_time}</span>
        </div>
      </div>
      <p className="mt-8 text-[10px] md:text-[14px]">{props.description}</p>
    </div>
  );
};

export default ImageInfo;
