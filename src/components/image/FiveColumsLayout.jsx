const FiveColumsLayout = (props) => {
    return ( 
        <>
            {
            props.CreateFiveSubArrays(props.arr).map((subArr, index)=>
            <div key={index} className="bg-gray-500 w-1/5 min-h-20 flex flex-col gap-5 ">
                {
                    subArr.map((img)=>
                        <p 
                        key={img}
                        className="bg-blue-300 h-10 w-full border border-black ">
                            {img}
                        </p>
                    )
                }
            </div>
            )
        }
        </>
     );
}
 
export default FiveColumsLayout;