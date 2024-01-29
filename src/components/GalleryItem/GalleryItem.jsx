//imports
import React from "react";
import { useState } from "react";
import axios from "axios";
import { updateLikes } from "../../GalleryAPI/gallery.api";  


function GalleryItem({pic}){
     const [showPic, setShowPic]=useState(true);
     const [likes, setLikes]=useState(pic.likes)

     const togglePicAndDescription=()=>{
        setShowPic(!showPic);
     }

     const addLike=()=>{
        console.log('like button clicked');
        setLikes(likes +1);
        console.log(pic.id);
        updateLikes(pic.id)
            .then(()=>{
                console.log('like updated');
            })
            .catch((err)=>{
                console.error(err);
                setLikes(likes);
            });
     };

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