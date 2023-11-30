import ImageCart from '../image/ImageCart';

const FiveColumsLayout = (props) => {
    return ( 
        <>
            {
            props.CreateFiveSubArrays(props.arr).map((subArr, index)=>
            <div key={subArr[0].id} className="w-1/5 min-h-20 flex flex-col gap-6 ">
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
 
export default FiveColumsLayout;