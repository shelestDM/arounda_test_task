const PaginationItem = (props) => {

  let activeStyles = props.activePage === props.page ? '1px solid black' : '';

  return (
    <li 
    style={{border:activeStyles}}
    onClick={()=>{props.changePage(props.page)}}
    className="cursor-pointer rounded-[4px] bg-[#fff] text-[#767676] border border-[#d1d1d1] hover:border-black  hover:text-black duration-500 h-8 leading-[30px] px-[11px] text-center text-[10px] sm:text-[14px] font-medium">
      {props.page}
    </li>
  );
};

export default PaginationItem;
