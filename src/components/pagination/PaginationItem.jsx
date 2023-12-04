const PaginationItem = (props) => {

  let activeStyles = props.activePage === props.page ? '1px solid black' : '';

  const onClickHandler = () => {
    let nextPage = 1 + props.page;
    props.changePage(nextPage);
  }

  return (
    <li>
      <button 
        disabled={props.title !== 'Next Page' }
        style={{border:activeStyles}}
        onClick={onClickHandler}
        className="disabled:opacity-75 cursor-pointer rounded-[4px] bg-[#fff] text-[#767676] border border-[#d1d1d1] enabled:hover:border-black  enabled:hover:text-black duration-500 h-8 leading-[30px] px-[11px] text-center text-[10px] sm:text-[14px] font-medium">
        {
          props.title !== 'Next Page' 
          ? 'Current Page ' + props.page
          : 'Next Page'
        }
      </button>
    </li>
  );
};

export default PaginationItem;
