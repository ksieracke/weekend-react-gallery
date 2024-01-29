//imports
import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Grid} from '@mui/material';



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
        <div data-testId="galleryList" >
          <Grid container spacing={2} justifyContent={"center"} alignItems={"center"} >
            {(gallery).map((pic)=>{
                return(
                  <Grid item key={pic.id} xs={3} md={3} lg={3}> 
                <GalleryItem  pic={pic} />
                </Grid>
            )})}
            </Grid>
        </div>
        )
    }

export default GalleryList;