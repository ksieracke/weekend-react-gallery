import axios from 'axios';

export const fetchPics=()=>{
    return axios.get('/api/gallery')
};

export const updateLikes = (picId) => {
    return axios.put(`/api/gallery/like/${picId}`);
};