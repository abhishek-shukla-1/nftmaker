import Row from "./row";
import {exportComponentAsPNG } from 'react-component-export-image';
import { CirclePicker    } from 'react-color';
import { useRef, useState } from "react";
import Button from "./button";

const Whiteboard=({height,width})=>{
    
    const [selectedColor,setSelectedColor]=useState("#F44336");
    const [pixelClickCount,setPixelClickCount]=useState(0);
    const nftImageRef=useRef();
    let arrRow=[];
    for (let i=0;i<height;i++){
        arrRow.push(<Row selectedColor={selectedColor} pixelClickCount={pixelClickCount} setPixelClickCount={setPixelClickCount} 
            width={width} row={i}/>)
    }
    return (
        <>
        <div style={{margin: "2rem"}}>
            <div ref={nftImageRef}>
                {arrRow.map((ele,idx)=><div key={idx} style={{display:"flex"}} className="row">{ele}</div>)}
            </div>
        </div>

        <div style={{margin:"2rem", marginTop:"0"}}><CirclePicker 
        onChangeComplete={(color)=>setSelectedColor(color.hex)}/></div>

        <Button name="Save as PNG" onClick={() => (pixelClickCount!==0)?exportComponentAsPNG(nftImageRef):alert("We don't save blank images !")}
            style={{margin:"1%",fontSize:"2rem",borderRadius:"5px",width:"50vw",cursor:"pointer"}}  />
        </>

    );
}

export default Whiteboard;