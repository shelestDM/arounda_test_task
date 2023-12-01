import ImageInfo from "./ImageInfo";
import ModalActions from "./ModalActions";
import ModalAuthor from "./ModalAutor";
import close_icon from '../../assets/image_info/close_icon.svg';

const ImageInfoModal = (props) => {
  let imageData = props.imageData;
  console.log(imageData);


  let aspectRatioValue = imageData.width / imageData.height;
  let minWidth = 
  imageData.width > imageData.height
  ? imageData.width / 12
  : imageData.width / 9; 
  let maxWidth = minWidth*100;

  const onCloseModalHandler = () => {
    props.onCloseModalHandler();
  }

  return (
    <div className="w-screen h-screen bg-[#00000099] flex items-center justify-center fixed top-0 left-0 right-0 z-[100]">
      <div className="w-10/12 mx-auto bg-white px-5 pt-4 min-h-[600px] rounded-lg smooth_appearing">
        <div className="flex">
          <ModalAuthor author={imageData.user} />
          <ModalActions />
        </div>
       <div 
       style={{minWidth: minWidth, maxWidth:`calc(75vh - ${maxWidth}px)` }}
       className="mx-auto">
        <img
            style={{aspectRatio: aspectRatioValue}}
            src={imageData.urls.regular}
            alt={imageData.alt_description}
            className="py-2.5 "
            />
        </div>
        <ImageInfo
          likes={imageData.likes}
          description={imageData.description}
        />
      </div>
      <img 
        onClick={onCloseModalHandler}
        src={close_icon} 
        width="24px" 
        height="24px" 
        alt="close_icon" 
        className="absolute top-2 left-2 cursor-pointer"/>
    </div>
  );
};

export default ImageInfoModal;
