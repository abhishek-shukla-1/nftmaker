import { useEffect, useState } from 'react';
import Button from './components/button';
import Loader from './components/Loader';
// import Layout from './components/layout';
import Whiteboard from './components/whiteboard';
import './index.css';

function App() {
  const[isLayoutHidden,setLayout]=useState(false);
  const[width,setWidth]=useState("");
  const[height,setHeight]=useState("");
  const[btnType,setBtnType]=useState("Submit");
  const[loading,setLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>setLoading(false),3000);
  },[]);

  return (
    <>
    { loading 
      ? <Loader/>
      :<div style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"2%"}}>
            <h1 style={{fontSize:"2.5rem",margin:"1%"}}>NFT Generator</h1>
            
            {
            !isLayoutHidden && 
            (<div style={{display:"flex",flexDirection:"column", gap:"2rem",padding:"2rem",width: "50vw",borderRadius:"10px"}}>
                <input onChange={(e)=>setHeight(e.target.value)} value={height} id="inputHeight" placeholder="Height" type="number" min="1" style={{textAlign:"center",fontSize:"2rem", borderRadius:"5px"}} />
                <input onChange={(e)=>setWidth(e.target.value)} value={width} id="inputWidth" placeholder="Width" type="number" min="1" style={{textAlign:"center",fontSize:"2rem",borderRadius:"5px"}}/>
            </div>)
            }
            
            {isLayoutHidden && <Whiteboard height={height} width={width}/>}
            
            <Button onClick={()=>{
              if ((width==="" && height===""))
                return;
              
              setLayout(!isLayoutHidden);
              if (btnType==="Back"){
                setHeight("");
                setWidth("");
              }
              btnType==="Submit" ? setBtnType("Back") : setBtnType("Submit");
              
              }}  
              name={btnType}
              style={{margin:"1%",fontSize:"2rem",borderRadius:"5px",width:"50vw",cursor:"pointer"}}  />
        </div>
    }
    </>
  );
}

export default App;
