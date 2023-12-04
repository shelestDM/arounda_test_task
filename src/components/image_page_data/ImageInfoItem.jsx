const ImageInfoItem = (props) => {

  let info = props.info;

  return (
    <li className="flex flex-col gap-1 w-fit text-[10px] md:text-[14px]">
      <span className="text-[#767676]">{info.title}</span>
      <span className="font-medium">{info.data}</span>
    </li>
  );
};

export default ImageInfoItem;
