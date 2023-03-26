import {useState } from "react";

const Layout=()=>{
    const[width,setWidth]=useState("");
    const[height,setHeight]=useState("");
    return(
        <div style={{display:"flex",flexDirection:"column", gap:"2rem",padding:"2rem",width: "50vw",borderRadius:"10px"}}>
                <input onChange={(e)=>setHeight(e.target.value)} value={height} id="inputHeight" placeholder="Height" type="number" min="1"
                style={{textAlign:"center",fontSize:"2rem", borderRadius:"5px"}} />
                <input onChange={(e)=>setWidth(e.target.value)} value={width} id="inputWidth" placeholder="Width" type="number" min="1"
                style={{textAlign:"center",fontSize:"2rem",borderRadius:"5px"}}/>
        </div>
        
    );
}

export default Layout;