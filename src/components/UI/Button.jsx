const SubmitPhotoBtn = (props) => {

  const onClickHandler = () =>{
    if(props.onClickHandler){
      props.onClickHandler();
    }
  }

  return (
    <div className="flex items-center">
      <button
      onClick={onClickHandler}
      className="hover:scale-105 active:scale-90 rounded-[4px] bg-[#fff] text-[#767676] border border-[#d1d1d1] hover:border-black  hover:text-black duration-500  h-8 leading-[30px] px-[11px] text-center text-[14px] font-medium">
        {props.title}
      </button>
    </div>
  );
};

export default SubmitPhotoBtn;
