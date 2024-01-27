//imports
import React from "react";
import { useState } from "react";

function GalleryItem({pic}){
     const [showPic, setShowPic]=useState(true);

     const togglePicAndDescription=()=>{
        setShowPic(!showPic);
     }

     return(
        <div data-testID="galleryItem">
            <div onClick={togglePicAndDescription}>
               {showPic ?
                <img src={pic.url} /> :<p>{pic.description}</p>
               }
            </div>
        </div>
     )



}

export default GalleryItem;