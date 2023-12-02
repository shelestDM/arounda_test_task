import PaginationItem from "./PaginationItem";

const PaginationList = (props) => {
  let changePage = props.changePage;

  return (
    <ul className="max-w-[500px] flex justify-between sm:gap-5 mx-auto my-10">
      {props.pages.map((page) => (
        <PaginationItem
          activePage={props.activePage}
          changePage={changePage}
          key={page}
          page={page}
        />
      ))}
    </ul>
  );
};

export default PaginationList;
