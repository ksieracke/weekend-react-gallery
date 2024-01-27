//imports
import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList({gallery}){
    return(
        <div data-testId="galleryList">
            {gallery.map(pic=>(
                <GalleryItem key={pic.id} pic={pic} />
            ))}
        </div>
        )
    }

export default GalleryList;