import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Img = ({src,className}) =>{
    return(
        <LazyLoadImage
      alt=""
      src={src} 
      className={className || ""}/>
    )
}

export default Img