import ImagePreviewInfo from "./ImagePreviewInfo";

const ImageCart = (props) => {
  let imageData = props.imageData;

  return (
    <div className="relative group">
      <img
      src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
      width='333px'
      height='222px'
      alt="img"
      // src={imageData.urls.small}
        // alt={imageData.alt}
        // width={imageData.width}
        // height={imageData.height}
      />
      <div className="opacity-0 top-0 absolute w-full h-full group-hover:opacity-100 duration-500">
        <ImagePreviewInfo/>
      </div>
    </div>
  );
};

export default ImageCart;
