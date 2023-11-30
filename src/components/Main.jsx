import { useEffect, useState } from "react";
import FiveColumsLayout from "./image/FiveColumsLayout";
import ThreeColumsLayout from "./image/ThreeColumsLayout";
import Loader from "./UI/Loader";
import { useFetch } from "../hooks/useFetch";
import SearchBlock from "./SearchBlock";

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
        // fetchImages();
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

    return ( 
        <main className="max-w-[1320px] w-full mx-auto px-[20px]">
            <SearchBlock/>
            <div className="flex items-start gap-6 ">

                {/* <button onClick={()=>{setIsThreeColVisible(!isThreeColVisible)}}>3/5</button> */}
                {/* {
                    isImagesLoading 
                    ? <Loader/>
                    : <FiveColumsLayout CreateFiveSubArrays={CreateFiveSubArrays} arr={imagesArr}/>
                } */}
                  {/* {
                    isImagesLoading 
                    ? <Loader/>
                    : <ThreeColumsLayout CreateThreeSubArrays={CreateThreeSubArrays} arr={imagesArr}/>
                } */}
            </div>
        </main>
     );
}
 
export default Main;