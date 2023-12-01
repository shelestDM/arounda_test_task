import ModalActions from "./ModalActions";
import ModalAuthor from "./ModalAutor";

const ImageInfoModal = ({props}) => {
    return ( 
        <div className="w-screen h-screen bg-[#0009] fixed top-0 left-0 right-0 z-[100]">
            <div className="w-10/12 mt-4 mx-auto bg-white px-5 pt-4 min-h-[600px] rounded-lg">
                <div className="flex">
                    <ModalAuthor/>
                    <ModalActions/>
                </div>
                <img src="" alt="" className="py-2.5"/>
            </div>
        </div>
     );
}
 
export default ImageInfoModal;