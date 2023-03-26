import nftAnimation from "../assests/nft_animation.json";
import Lottie from "lottie-react";
import x from 'react';
const Loader=()=>{
    console.log(x);
    return(

        <Lottie style={{height:"98vh"}}  animationData={nftAnimation} loop={true} />
    );
};

export default Loader