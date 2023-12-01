import PaginationItem from "./PaginationItem";

const PaginationList = () => {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    return ( 
        <ul className="max-w-[500px] flex justify-between sm:gap-5 mx-auto">
            {
                arr.map(page=>
                    <PaginationItem page={page}/>    
                )
            }
        </ul>
     );
}
 
export default PaginationList;