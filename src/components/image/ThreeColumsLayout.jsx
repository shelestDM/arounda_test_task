import ImageCart from "./ImageCart";

const ThreeColumsLayout = (props) => {
    return ( 
        <>
            {
            props.CreateThreeSubArrays(props.arr).map((subArr)=>
            <div key={subArr[0].id} className=" w-1/3 min-h-20 flex flex-col gap-5 ">
                {
                    subArr.map((img)=>
                       <ImageCart key={img.id} imageData={img}/>
                    )
                }
            </div>
            )
        }
        </>
     );
}
 
export default ThreeColumsLayout;