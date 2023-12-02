import ImageInfo from "./ImageInfo";
import ModalActions from "./ModalActions";
import ModalAuthor from "./ModalAutor";
import CloseButton from "./CloseButton";

const ImageInfoModal = (props) => {
  let imageData = props.imageData;

  let aspectRatioValue = imageData.width / imageData.height;
  
  let dynamicClasses = imageData.width > imageData.height 
  ? "mx-auto w-11/12 md:w-9/12 lg:w-8/12 xl:w-3/5"
  : 'mx-auto w-9/12 lxs:w-7/12 md:w-5/12 lg:w-4/12 xl:w-[20vw]'

  const onCloseModalHandler = () => {
    props.onCloseModalHandler();
  }
  return (
    <div className="w-screen h-screen bg-[#00000099] flex items-start justify-center fixed top-0 left-0 right-0 z-[100] overflow-scroll">
        <div className="w-10/12 mx-auto bg-white px-5 pt-4 min-h-[500px] rounded-lg smooth_appearing mt-5 ">
          <div className="flex pb-[13px]">
            <ModalAuthor author={imageData.user} />
            <ModalActions />
          </div>
         <div 
         className={dynamicClasses}>
          <img
              style={{aspectRatio: aspectRatioValue}}
              src={imageData.urls.regular}
              alt={imageData.alt_description}
              className="py-2.5 "/>
          </div>
          <ImageInfo
            likes={imageData.likes}
            description={imageData.description}
            update_time={imageData.updated_at}
            create_time={imageData.created_at}/>
        </div>
      <CloseButton onCloseModalHandler={onCloseModalHandler}/>
    </div>
  );
};

export default ImageInfoModal;
