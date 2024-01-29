//imports
import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import { useState, useEffect } from 'react';
import axios from 'axios';



function GalleryList(){
    const [gallery, setGallery]=useState([]);

    const fetchGallery =()=>{
      axios.get('/api/gallery')
        .then((response)=>{
          console.log(response.data);
          setGallery(response.data);
        })
        .catch((err)=>{
          console.log(err);
        })
    }

    useEffect(()=>{
      fetchGallery();
    }, [])


    return(
        <div data-testId="galleryList">
            {(gallery).map((pic)=>{
                return(
                <GalleryItem key={pic.id} pic={pic} />
                
            )})}
        </div>
        )
    }

export default GalleryList;