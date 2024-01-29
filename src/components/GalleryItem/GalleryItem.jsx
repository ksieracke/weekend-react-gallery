//imports
import React from "react";
import { useState } from "react";
import axios from "axios";
import { updateLikes } from "../../GalleryAPI/gallery.api";  
import {Fab} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';


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
        <div data-testid="galleryItem" style={{textAlign:'center', height:'350px', width: '300px'}} >
            <p><h3>{pic.title}</h3></p>
            <div onClick={togglePicAndDescription}   data-testid="toggle" >
               {showPic ?
                <img src={pic.url} style={{ width: '250px', height: '250px', alignContent:'center' }} /> :
                <p style={{ width: '250px', height: '250px', alignContent: 'center',margin: '0 auto', lineHeight:'250px' }} data-testid="description">{pic.description}</p>
               }
            </div>
            <p>Likes: {likes}  <Fab size="small" color="primary" data-testid="like" onClick={addLike}><FavoriteIcon color="secondary" /></Fab></p>
        </div>
     )
}

export default GalleryItem;