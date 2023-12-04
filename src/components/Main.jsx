import { useEffect, useState } from "react";
import FiveColumsLayout from "./image/FiveColumsLayout";
import ThreeColumsLayout from "./image/ThreeColumsLayout";
import Loader from "./UI/Loader";
import { useFetch } from "../hooks/useFetch";
import SearchBlock from "./SearchBlock";
import PaginationList from "./pagination/PaginationList";

const Main = (props) => {

    console.log(props.query);

    let REACT_APP_ACCESS_KEY = 'Ue-fRKwJBEpNjjWFX6rb3VYBEYcnTO6rJaRA8Ck8qqo';

    let [toggleColumnsCount, setToggleColumnsCount] = useState(false);

    let perPageCount = toggleColumnsCount ? 10 : 9;

    let [page, setPage] = useState(1);

    const changePage = (pageNumber) =>{
        setPage(pageNumber);
    }
    
    let url = `https://api.unsplash.com/${props.query ? 'search/' : ''}photos/?client_id=${REACT_APP_ACCESS_KEY}&page=${page}${props.query ? '&query='+props.query : '' }&per_page=${perPageCount}`

    console.log(url);

    const [imagesArr, setImagesArr] = useState([]);
  
    const [fetchImages, isImagesLoading, imageError] = useFetch(async () =>{
        const data = (await fetch(url)).json();
        const result = await data;
        if(props.query){
            let searchedImages = result.results;
            setImagesArr([...imagesArr, ...searchedImages]);
        }else{
            setImagesArr([...imagesArr, ...result]);
        }
    })

    useEffect(()=>{
        fetchImages();
    },[page,toggleColumnsCount])

    let pagesArr = [1,2,3,4,5,6,7,8,9,10];

    let columnsConditionArr = toggleColumnsCount 
    ? <FiveColumsLayout imagesArr={imagesArr}/> 
    : <ThreeColumsLayout   imagesArr={imagesArr}/>

    const toggleColumnsHandler = () => {
        setToggleColumnsCount(!toggleColumnsCount);
        setImagesArr([]);
    }

    return ( 
        <main className="max-w-[1320px] w-full mx-auto px-[20px] smooth_appearing">
            <SearchBlock onClickHandler={toggleColumnsHandler}/>
            <div className="flex items-start gap-6 ">
                {
                    isImagesLoading 
                    ? <Loader/>
                    : columnsConditionArr
                }
            </div>
            <PaginationList activePage={page} changePage={changePage} pages={pagesArr}/>
        </main>
     );
}
 
export default Main;

/* 
1. done full
2. done full
3. done full
4. done full
5. done full
6. Зробити пошук зображень.
7. done full
8. done full
9. done full

**Бонус задачі**

1. done full
2. Можливість зберігати / видаляти зображення зі стрічки галереї в колекцію профілю.
*/