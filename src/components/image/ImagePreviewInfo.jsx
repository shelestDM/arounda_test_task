import like_icon from '../../assets/image_info/heart.svg';
import plus_icon from '../../assets/image_info/plus.svg';
import arrow_down_icon from '../../assets/image_info/arrow-down.svg';
import ButtonWithIcon from './ButtonWithIcon';

const ImagePreviewInfo = () => {

    return ( 
        <div className="w-full h-full  p-5 flex flex-col items-end justify-between image_info_bg_gradient">
          <div className="flex gap-2">
            <ButtonWithIcon icon={like_icon}/>
            <ButtonWithIcon icon={plus_icon}/>
          </div>
          <div className="w-full flex justify-between ">
            <div className="flex gap-2 items-center">
              <img src="" alt="author_icon" className="rounded-[50%] h-8 w-8 border border-gray-500 cursor-pointer"/>
              <span className="text-[15px] text-[#fff] opacity-80 hover:opacity-100 duration-500">Author name</span>
            </div>
            <ButtonWithIcon icon={arrow_down_icon}/>
          </div>
      </div>
     );
}
 
export default ImagePreviewInfo;