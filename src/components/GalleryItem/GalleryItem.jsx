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
            <h3 style={{color:'white'}}>{pic.title}</h3>
            <div onClick={togglePicAndDescription}   data-testid="toggle" style={{overflow:'hidden'}} >
               {showPic ?
                <img src={pic.url} style={{ width: '250px', height: '250px', alignContent:'center',border: '7px solid gold', borderRadius: '5px' }} /> :
                <p style={{ width: '250px', height: '250px', alignContent: 'center',margin: '0 auto',  wordWrap:'break-word', overflow:'hidden',alignSelf:'center',color:'white' }} data-testid="description">{pic.description}</p>
               }
            </div>
            <p style={{color:'white'}}>Likes: {likes}  <Fab size="small" color="primary" data-testid="like" onClick={addLike}><FavoriteIcon color="secondary" /></Fab></p>
        </div>
     )
}

export default GalleryItem;