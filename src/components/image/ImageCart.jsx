const ImageCart = (props) => {
  let imageData = props.imageData;

  return (
    <img
      src={imageData.urls.small}
      alt={imageData.alt}
      width={imageData.width}
      height={imageData.height}
    />
  );
};

export default ImageCart;
