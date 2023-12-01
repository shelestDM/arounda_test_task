const ModalAuthor = () => {
    return ( 
        <div className="flex grow gap-2">
            <img src="" alt="" className="w-8 h-8 rounded-[50%] "/>
            <div className="flex flex-col leading-[1.35]">
                <span className="text-[15px] font-medium text-black">
                    Author name
                </span>
                <span className="text-[#006aff] text-[12px]">
                    Author is available
                </span>
            </div>
        </div>
     );
}
 
export default ModalAuthor;