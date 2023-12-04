const ModalAuthor = (props) => {
    let authorData = props.author;
    return ( 
        <div className="flex grow gap-2">
            <img src={authorData.profile_image.medium} alt="author_avatar" className="w-8 h-8 rounded-[50%] "/>
            <div className="flex flex-col leading-[1.35]">
                <span className="text-[15px] font-medium text-black">
                    {authorData.first_name}
                </span>
                <a href={authorData.portfolio_url} className="text-[#006aff] text-[10px] md:text-[12px]">
                    Author portfolio
                </a>
            </div>
        </div>
     );
}
 
export default ModalAuthor;