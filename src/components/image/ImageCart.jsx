import ImagePreviewInfo from "./ImagePreviewInfo";
import { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const ImageCart = (props) => {
  let imageData = props.imageData;

  let [isImageModalVisible, setIsImageModalVisible] = useState(false);

  const toggleModalWindow = () =>{
    setIsImageModalVisible(!isImageModalVisible);
  }
    return (
      <NavLink  to={'/' + imageData.id}>
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
      </NavLink>
    );
};

export default ImageCart;