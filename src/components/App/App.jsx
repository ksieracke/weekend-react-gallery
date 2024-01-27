import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react'
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {

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

    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
