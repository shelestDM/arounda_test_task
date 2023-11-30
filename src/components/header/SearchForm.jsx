import search_icon from '../../assets/header/search.svg';

const SarchForm = () => {
  return (
    <form className="grow max-w-[807px] flex items-center bg-[#eee] h-10 text-[14px] leading-[1.428] rounded-3xl">
      <button className="w-[34px] h-[38px] pl-[14px] pointer">
        <img
          src={search_icon}
          className=""
          alt="search_icon"
          width="16px"
          height="16px"
        />
      </button>
      <input
        type="text"
        placeholder="Search high-resolution images"
        className="pl-2.5 pb-[2px] h-full rounded-3xl grow text-[#111] focus:outline-none bg-[#eee]"
      />
    </form>
  );
};

export default SarchForm;
