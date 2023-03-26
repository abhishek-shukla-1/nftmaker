import { useState } from "react";

const Pixel=({selectedColor,pixelClickCount,setPixelClickCount})=>{
    const[color,setColor]=useState("white");
    return (
        <div onClick={()=>{setColor(selectedColor);setPixelClickCount(pixelClickCount+1) }} style={{width:"1rem",height:"1rem",cursor:"pointer", backgroundColor:color}}></div>
    )
}

export default Pixel;