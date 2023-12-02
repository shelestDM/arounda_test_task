import { useEffect, useState } from "react";
import FiveColumsLayout from "./image/FiveColumsLayout";
import ThreeColumsLayout from "./image/ThreeColumsLayout";
import Loader from "./UI/Loader";
import { useFetch } from "../hooks/useFetch";
import SearchBlock from "./SearchBlock";
import PaginationList from "./pagination/PaginationList";

const Main = () => {

    let REACT_APP_ACCESS_KEY = 'Ue-fRKwJBEpNjjWFX6rb3VYBEYcnTO6rJaRA8Ck8qqo';

    let [toggleColumnsCount, setToggleColumnsCount] = useState(false);

    let perPageCount = toggleColumnsCount ? 10 : 9;

    let [page, setPage] = useState(1);

    console.log(perPageCount);

    const changePage = (pageNumber) =>{
        setPage(pageNumber);
    }

    let url = `https://api.unsplash.com/photos/?client_id=${REACT_APP_ACCESS_KEY}&page=${page}&per_page=${perPageCount}`;

    const [imagesArr, setImagesArr] = useState([]);
  
    const [fetchImages, isImagesLoading, imageError] = useFetch(async () =>{
        const data = (await fetch(url)).json();
        const images = await data;
        setImagesArr([...imagesArr, ...images]);
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
        <main className="max-w-[1320px] w-full mx-auto px-[20px]">
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
1. Два види дисплея стрічки галереї, опція з 3 колонами та з 5, між якими можна буде перемикатися при натисканні на кнопку.
2. 
3. 
4. При натисканні на зображення в стрічці має вести на сторінку цього зображення з доповненою інфою 
(Типу опис, теги, лайки, автор, інше. Не обов'язково багато просто пару деталей про зображення).
5. При натисканні на тег зображення з індивідуальної сторінки, вести на колекцію зображень із цим тегом. 
(Колекція повинна працювати за тією ж логікою, що і головна стрічка).
6. Зробити пошук зображень.
7. 
8. 
9. 

**Бонус задачі**

1. Зробити реєстрацію (Найбільша базова реєстрація).
2. Можливість зберігати / видаляти зображення зі стрічки галереї в колекцію профілю.
*/

/* {
isImagesLoading 
? <Loader/>
: <FiveColumsLayout CreateFiveSubArrays={CreateFiveSubArrays} arr={imagesArr}/>
} */