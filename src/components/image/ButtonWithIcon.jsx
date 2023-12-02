const ButtonWithIcon = (props) => {

  // let styles= props.bg || 'white';

  return (
    <button
      // style={{backgroundColor: styles}}
      className="rounded-[4px] bg-[#d1d1d1] border border-[#d1d1d1] hover:bg-[#fff] hover:fill-black duration-500 h-[24px] w-8 md:h-[32px] md:w-10 flex items-center justify-center leading-[30px]"
      type="button"
    >
      <img src={props.icon} alt="like_icon" />
    </button>
  );
};

export default ButtonWithIcon;
