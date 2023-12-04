import like_icon from '../../assets/image_info/heart.svg';
import plus_icon from '../../assets/image_info/plus.svg';
import arrow_down_icon from '../../assets/image_info/arrow-down.svg';
import ButtonWithIcon from '../image/ButtonWithIcon';

const ModalActions = () => {
    return ( 
        <div className="flex gap-2 items-center">
            <ButtonWithIcon icon={like_icon}/>
            <ButtonWithIcon icon={plus_icon}/>
        </div>
     );
}
 
export default ModalActions;