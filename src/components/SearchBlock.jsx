import search_icon from '../assets/header/search.svg';
import Button from './UI/Button';

const SearchBlock = (props) => {

  let searchQuery = props.searchQuery;

  let onChangeHandler = (e) =>{
    props.setSearchQuery(e.target.value);
  }

  let onKeyDownHandler = (e) =>{
    if(e.key === 'Enter' ){
      props.getQueryForSearch();
    }
  }

  let onClickHandler = props.onClickHandler;
  
  return (
    <div className='py-[56px] flex flex-col items-start lg:flex-row lg:items-end gap-10'>
        <div className="grow max-w-[672px] w-full h-30 lg:h-[280px] flex gap-4 items-start justify-end flex-col">
          <div>
            <h1 className="text-3xl lg:text-[40px] leading-[1.2] mb-2 font-[700]">Unsplash</h1>
            <h2 className="lg:text-[18px] font-normal">
              The internet’s source for visuals.
            </h2>
            <h3 className="lg:text-[18px] font-normal">
              Powered by creators everywhere.
            </h3>
          </div>
          <div className="border border-gray w-full flex items-center bg-[#eee] md:h-[54px] text-[14px] leading-[1.428] rounded-[8px]">
            <button className="w-[34px] h-[38px] pl-[14px] pointer">
              <img
                src={search_icon}
                className=""
                alt="search_icon"
                width="38px"
                height="24px"
              />
            </button>
            <input
              value={searchQuery}
              onChange={onChangeHandler}
              onKeyDown={onKeyDownHandler}
              type="text"
              placeholder="Search high-resolution images"
              className="pl-2.5 w-full pb-[2px] text-[10px] sm:text-[14px] h-full grow text-[#111] focus:outline-none bg-[#eee]"
            />
          </div>
        </div>
        <Button disabled={props.isToggleBtnDisabled} onClickHandler={onClickHandler} title={"Toggle 3/5 columns"}/>
    </div>
  );
};

export default SearchBlock;
