//imports
import React from "react";
import { useState } from "react";


function GalleryItem({pic}){
     const [showPic, setShowPic]=useState(true);
     const [likes, setLikes]=useState(pic.likes)

     const togglePicAndDescription=()=>{
        setShowPic(!showPic);
     }

     const addLike=(event)=>{
        console.log('like button clicked');
        setLikes(likes +1);

     }

     return(
        <div data-testID="galleryItem">
            <div onClick={togglePicAndDescription}>
               {showPic ?
                <img src={pic.url} /> :<p>{pic.description}</p>
               }
            </div>
            <p>Likes: {likes}  <button onClick={addLike}>Like</button></p>

        </div>
     )



}

export default GalleryItem;