import { useEffect, useState } from "react";
import FiveColumsLayout from "./image/FiveColumsLayout";
import ThreeColumsLayout from "./image/ThreeColumsLayout";
import Loader from "./UI/Loader";
import { useFetch } from "../hooks/useFetch";
import SearchBlock from "./SearchBlock";
import PaginationList from "./pagination/PaginationList";
import ImageCart from "./image/ImageCart";
import ImageModal from "./modal_window/ImageModal";

const Main = () => {

    let REACT_APP_ACCESS_KEY = 'Ue-fRKwJBEpNjjWFX6rb3VYBEYcnTO6rJaRA8Ck8qqo';
    let perPageCount = 9;
    let url = `https://api.unsplash.com/photos/?client_id=${REACT_APP_ACCESS_KEY}&per_page=${perPageCount}`;

    const [imagesArr, setImagesArr] = useState([]);
  
    const [fetchImages, isImagesLoading, imagesLoading] = useFetch(async () =>{
        const data = (await fetch(url)).json();
        const images = await data;
        setImagesArr([...images]);
    })

    useEffect(()=>{
        fetchImages();
    },[])
    console.log(imagesArr);


    function CreateFiveSubArrays(arr){
        let fiveColumsArr = [];

        for (let i = 0; i < arr.length; i+=2) {
            fiveColumsArr[i] = [arr[i], arr[i+1]]  
        }
        return fiveColumsArr;
    }

    function CreateThreeSubArrays(arr){
        let threeColumsArr = [];

        for (let i = 0; i < arr.length; i+=3) {
            threeColumsArr[i] = [arr[i], arr[i+1],arr[i+2]]  
        }
        return threeColumsArr;
    }

    let [isThreeColVisible, setIsThreeColVisible] = useState(false);

    let [selectedImg, setSelectedImg] = useState(''); 

    return ( 
        <main className="max-w-[1320px] w-full mx-auto px-[20px]">
            <SearchBlock/>
            <div className="flex items-start gap-6 ">
                  {
                    isImagesLoading 
                    ? <Loader/>
                    : <ThreeColumsLayout 
                        CreateThreeSubArrays={CreateThreeSubArrays} 
                        arr={imagesArr}/>
                }
            </div>
            {/* <PaginationList/> */}
        </main>
     );
}
 
export default Main;

/* 
1. Два види дисплея стрічки галереї, опція з 3 колонами та з 5, між якими можна буде перемикатися при натисканні на кнопку.
2. Стрічка галереї має бути як у Unsplash (Зображення у стрічці автоматично заповнюють порожнє місце залежно від їх розмірів).
3. Пагінація стрічки як сторінок.
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