import like_icon from '../../assets/image_info/heart.svg';
import plus_icon from '../../assets/image_info/plus.svg';
import arrow_down_icon from '../../assets/image_info/arrow-down.svg';
import ButtonWithIcon from './ButtonWithIcon';
import ImageAuthor from './ImageAuthor';

const ImagePreviewInfo = (props) => {
    let author = props.author;

    return ( 
        <div className="w-full h-full p-5 flex flex-col items-end justify-between image_info_bg_gradient">
          <div className="flex gap-2">
            <ButtonWithIcon icon={like_icon}/>
            <ButtonWithIcon icon={plus_icon}/>
          </div>
          <div className="w-full flex justify-between ">
            <ImageAuthor first_name={author.first_name} avatar={author.profile_image.medium}/>
            <ButtonWithIcon icon={arrow_down_icon}/>
          </div>
      </div>
     );
}
 
export default ImagePreviewInfo;