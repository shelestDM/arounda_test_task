const ImageCart = () => {
  let imageData = props.imageData;

  return (
    <img
      src={imageData.urls.regular}
      alt={imageData.alt}
      width={imageData.width}
      height={imageData.height}
    />
  );
};

export default ImageCart;
