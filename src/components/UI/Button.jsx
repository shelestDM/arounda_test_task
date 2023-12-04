const CustomButton = (props) => {

  const onClickHandler = () =>{
    if(props.onClickHandler){
      props.onClickHandler();
    }
  }

  return (
    <div className="flex items-center">
      <button
      disabled={props.disabled}
      onClick={onClickHandler}
      className="disabled:opacity-75 enabled:hover:scale-105 enabled:active:scale-90 rounded-[4px] bg-[#fff] text-[#767676] border border-[#d1d1d1] enabled:hover:border-black  enabled:hover:text-black duration-500  h-8 leading-[30px] px-[11px] text-center text-[14px] font-medium">
        {props.title}
      </button>
    </div>
  );
};

export default CustomButton;
