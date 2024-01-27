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
                <img src={pic.url} />
            </div>
        </div>
     )



}

export default GalleryItem;