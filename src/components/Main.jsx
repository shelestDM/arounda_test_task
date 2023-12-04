import { useEffect, useState } from "react";
import FiveColumsLayout from "./image/FiveColumsLayout";
import ThreeColumsLayout from "./image/ThreeColumsLayout";
import Loader from "./UI/Loader";
import { useFetch } from "../hooks/useFetch";
import SearchBlock from "./SearchBlock";
import PaginationList from "./pagination/PaginationList";
import REACT_APP_ACCESS_KEY from "../api_key";
import NoImageFound from "./UI/NoImageFound";

const Main = (props) => {
    
  let api_key = REACT_APP_ACCESS_KEY;

  let [toggleColumnsCount, setToggleColumnsCount] = useState(false);

  let perPageCount = toggleColumnsCount ? 10 : 9;

  let [page, setPage] = useState(1);

  const changePage = (pageNumber) => {
    setPage(pageNumber);
  };

  let [searchQuery, setSearchQuery] = useState(props.query || '');

  let url = `https://api.unsplash.com/${searchQuery  ? "search/" : ""}photos/?client_id=${api_key}&page=${page}${searchQuery ? "&query=" + searchQuery : ""}&per_page=${perPageCount}`;
  
  const [imagesArr, setImagesArr] = useState([]);

  const [fetchImages, isImagesLoading, imageError] = useFetch(async () => {
    const data = (await fetch(url)).json();
    const result = await data;

    if (props.query || searchQuery) {
      let searchedImages = result.results;
      setImagesArr([...imagesArr, ...searchedImages]);
    } else {
      setImagesArr([...imagesArr, ...result]);
    }
  });

  useEffect(() => {
    fetchImages();
  }, [page, toggleColumnsCount]);


  let getQueryForSearch = () =>{
    if(page===1){
      setPage(2);
      setImagesArr([]);
    }else{
      setPage(1);
      setImagesArr([]);
    }
  }


  let columnsConditionArr = toggleColumnsCount ? <FiveColumsLayout imagesArr={imagesArr} /> : <ThreeColumsLayout imagesArr={imagesArr} />;

  const toggleColumnsHandler = () => {
    setToggleColumnsCount(!toggleColumnsCount);
    setImagesArr([]);
  };

  let isToggleBtnDisabled = page > 1 ? true : false;

  console.log(page);
  return (
    <main className="max-w-[1320px] w-full mx-auto px-[20px] smooth_appearing">
      <SearchBlock
        getQueryForSearch={getQueryForSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isToggleBtnDisabled={isToggleBtnDisabled}
        onClickHandler={toggleColumnsHandler}
      />
      <div className="flex gap-6 flex-col lxs:items-center sm:items-start sm:flex-row">
        {
            isImagesLoading
            ? <Loader /> 
            : columnsConditionArr
        }
        </div>

        { (imagesArr.length === 0 ) && <NoImageFound/>}

        {!(imagesArr.length === 0 ) && <PaginationList activePage={page} changePage={changePage} page={page} />}
        
        <div className="text-sm text-red-400 text-center">
            {imageError}
        </div>
    </main>
  );
};

export default Main;

/* 
1. done full
2. done full
3. done full
4. done full
5. done full
6. done full
7. done full
8. done full
9. done full

**Бонус задачі**

1. done full
2. Можливість зберігати / видаляти зображення зі стрічки галереї в колекцію профілю.
*/
