import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import ImageCart from '../image/ImageCart';

const FiveColumsLayout = (props) => {
    let imagesArr = props.imagesArr;

    let firstColumn = [];
    let secondColumn = [];
    let thirdColumn = [];
    let fourColumn = [];
    let fiveColumn = [];
  
    for (let i = 0; i < imagesArr.length; i+=5) {
      firstColumn.push(imagesArr[i])
      secondColumn.push(imagesArr[i+1])
      thirdColumn.push(imagesArr[i+2])
      fourColumn.push(imagesArr[i+3])
      fiveColumn.push(imagesArr[i+4])
    }

    let imagesArrWithSubArr = [firstColumn,secondColumn,thirdColumn,fourColumn,fiveColumn];

    return ( 
        <>
         {
            imagesArrWithSubArr.map((subArr,index)=>
                <div key={index} className=" w-1/3 min-h-20 flex flex-col gap-5 ">
                    {subArr.map((imageObj) => (
                        <ImageCart  imageData={imageObj} />
                    ))}
                </div>    
            )
        }
        </>
     );
}
export default FiveColumsLayout;