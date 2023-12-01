import { createPortal } from "react-dom";
import ImagePreviewInfo from "./ImagePreviewInfo";
import ImageModal from "../modal_window/ImageModal";
import { useState } from "react";

const ImageCart = (props) => {
  let imageData = props.imageData;

  let [isImageModalVisible, setIsImageModalVisible] = useState(false);

  const toggleModalWindow = () =>{
    setIsImageModalVisible(!isImageModalVisible);
  }

    return (
      <>
      <div 
      className="relative group"
      onClick={toggleModalWindow}
      >
        <img
          src={imageData.urls.small}
          alt={imageData.alt}
          width={imageData.width}
          height={imageData.height}
        />
        <div className="opacity-0 top-0 absolute w-full h-full group-hover:opacity-100 duration-500">
          <ImagePreviewInfo author={imageData.user}/>
        </div>
      </div>
      { 
        isImageModalVisible && createPortal(
          <ImageModal onCloseModalHandler={toggleModalWindow} imageData={imageData}/>,
          document.getElementById('root'))
      }
      </>
    );
};

export default ImageCart;
