import close_icon from '../../assets/image_info/close_icon.svg';

const CloseButton = (props) => {
    return ( 
        <img 
        onClick={()=>{props.onCloseModalHandler()}}
        src={close_icon} 
        width="24px" 
        height="24px" 
        alt="close_icon" 
        className="fixed top-1 left-1 md:top-2 md:left-2 cursor-pointer"/>
     );
}
 
export default CloseButton;