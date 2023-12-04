import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import ImageAuthor from "../components/image_page_data/ImageAuthor";
import ImageActions from "../components/image_page_data/ImageActions";
import ImageInfo from "../components/image_page_data/ImageInfoList";
import Loader from "../components/UI/Loader";
import ImageTags from "../components/image_page_data/ImageTags";

const ImagePage = () => {
  let { id } = useParams();
  let [imageData, setImageData] = useState({});

  let REACT_APP_ACCESS_KEY = "Ue-fRKwJBEpNjjWFX6rb3VYBEYcnTO6rJaRA8Ck8qqo";

  let url = `https://api.unsplash.com/photos/${id}?client_id=${REACT_APP_ACCESS_KEY}`;

  const [fetchImage, isImagesLoading, imageError] = useFetch(async () => {
    const data = (await fetch(url)).json();
    const image = await data;
    setImageData(image);
    console.log(imageData);
    console.log(image);
  });

  useEffect(() => {
    fetchImage();
  }, []);

  let aspectRatioValue = imageData.width / imageData.height;

  let dynamicClasses =
    imageData.width > imageData.height
      ? "mx-auto w-11/12 md:w-9/12 lg:w-8/12 xl:w-3/5"
      : "mx-auto w-9/12 lxs:w-7/12 md:w-5/12 lg:w-4/12 xl:w-[20vw]";

  console.log(Object.keys(imageData).length);
  return (
    <section className="smooth_appearing">
      { Object.keys(imageData).length === 0
      ? <Loader />
      : (
        <div className="w-full mx-auto bg-white px-5 pt-4 min-h-[500px] rounded-lg smooth_appearing mt-5 ">
          <div className="flex pb-[13px]">
            <ImageAuthor author={imageData.user} />
            <ImageActions />
          </div>
          <div className={dynamicClasses}>
            <img
              style={{ aspectRatio: aspectRatioValue }}
              src={imageData.urls.regular}
              alt={imageData.alt_description}
              className="py-2.5 "
            />
          </div>
          <ImageInfo imageData={imageData}/>
          <ImageTags tags={imageData.tags}/>
        </div>
      )}
    </section>
  );
};

export default ImagePage;
