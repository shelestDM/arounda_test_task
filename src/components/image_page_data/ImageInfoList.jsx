import ImageInfoItem from "./ImageInfoItem";
import ImageTags from "./ImageTags";

const ImageInfo = (props) => {

  let imageData = props.imageData;

  let create_time = imageData.created_at.slice(0,10);
  let update_time = imageData.updated_at.slice(0,10);

  let infoArr = [
    {title: 'Create Time', data: create_time},
    {title: 'Update Time', data: update_time},
    {title: 'Likes', data: imageData.likes},
    {title: 'Place', data: imageData.location.name},
    {title: 'Downloads', data: imageData.downloads}

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