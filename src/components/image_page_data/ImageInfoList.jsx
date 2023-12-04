import ImageInfoItem from "./ImageInfoItem";

const ImageInfo = (props) => {

  let imageData = props.imageData;

  let create_time = imageData.created_at.slice(0,10);
  let update_time = imageData.updated_at.slice(0,10);

  let infoArr = [
    {title: 'Create Time', data: create_time || `no info yet`},
    {title: 'Update Time', data: update_time || `no info yet`},
    {title: 'Likes', data: imageData.likes || `no info yet`},
    {title: 'Place', data: imageData.location.name || `no info yet`},
    {title: 'Downloads', data: imageData.downloads || `no info yet`}
  ]

  return (
    <div className="text-[14px] leading-[1.4285714286] py-[14px]">
      <ul className="flex justify-between">
        {infoArr.map(info=>
          <ImageInfoItem key={info.title} info={info}/>
        )}
      </ul>
      <p className="mt-8 text-[10px] md:text-[14px]  max-w-[600px] mb-8">{imageData.description}</p>
    </div>
  );
};

export default ImageInfo;