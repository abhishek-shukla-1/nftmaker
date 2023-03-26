import Pixel from "./pixel";

const Row=({width,selectedColor,pixelClickCount,setPixelClickCount})=>{
    let arrColumns=[];
    for (let i=0;i<width;i++){
        arrColumns.push(<Pixel pixelClickCount={pixelClickCount} setPixelClickCount={setPixelClickCount}  
            selectedColor={selectedColor}/>);
    }
    return(
        <>
        {arrColumns.map((ele,idx)=><div key={idx} className="column">{ele}</div>)}
        </>
    )
}

export default Row;