import { useState } from "react";
import FiveColumsLayout from "./image/FiveColumsLayout";
import ThreeColumsLayout from "./image/ThreeColumsLayout";

const Main = () => {
    const ACCESS_KEY = 'Ue-fRKwJBEpNjjWFX6rb3VYBEYcnTO6rJaRA8Ck8qqo';

    // let data = fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=9`);

    // async function GetData (){
    //     let newData = (await data).json();
    //     let photos = (await newData)
    //     console.log(photos);
    // }
    // GetData()

    let [isThreeColVisible, setIsThreeColVisible] = useState(false)
    let arr = [0,1,2,3,4,5,6,7,8];

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

    return ( 
        <main className="max-w-[1320px] w-full mx-auto px-[20px]">
            <div className="flex items-start gap-6 ">
                <button onClick={()=>{setIsThreeColVisible(!isThreeColVisible)}}>3/5</button>
                {
                    isThreeColVisible
                    ? <ThreeColumsLayout CreateThreeSubArrays={CreateThreeSubArrays} arr={arr}/> 
                    : <FiveColumsLayout CreateFiveSubArrays={CreateFiveSubArrays} arr={arr}/>
                }
            </div>
        </main>
     );
}
 
export default Main;