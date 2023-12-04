import ImageCart from "./ImageCart";

const ThreeColumsLayout = (props) => {
  let imagesArr = props.imagesArr;

  let firstColumn = [];
  let secondColumn = [];
  let thirdColumn = [];

  for (let i = 0; i < imagesArr.length; i+=3) {
    firstColumn.push(imagesArr[i])
    secondColumn.push(imagesArr[i+1])
    thirdColumn.push(imagesArr[i+2])
  }

  let imagesArrWithSubArr = [firstColumn, secondColumn, thirdColumn]
  return (
    <>
        {
            imagesArrWithSubArr.map((subArr,index)=>
                <div key={index} className="w-full lxs:w-9/12 sm:w-1/3 min-h-20 flex flex-col gap-5 ">
                    {subArr.map((imageObj) => (
                        <ImageCart key={imageObj.id} imageData={imageObj} />
                    ))}
                </div>    
            )
        }
    </>
  );
};

export default ThreeColumsLayout;
