import PaginationItem from "./PaginationItem";

const PaginationList = (props) => {
  let changePage = props.changePage;

  return (
    <ul className="max-w-[500px] flex justify-center gap-5 mx-auto my-10">
       <PaginationItem
          activePage={props.activePage}
          changePage={changePage}
          title='Current Page'
          page={props.page}
        />
         <PaginationItem
          activePage={props.activePage}
          changePage={changePage}
          title='Next Page'
          page={props.page}
        />
      {/* {props.pages.map((page) => (
        <PaginationItem
          activePage={props.activePage}
          changePage={changePage}
          key={page}
          page={page}
        />
      ))} */}
    </ul>
  );
};

export default PaginationList;
