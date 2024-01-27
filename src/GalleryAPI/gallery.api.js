import axios from 'axios';

export const fetchPics=()=>{
    return axios.get('/api/pics')
};

export const updateLikes=(taskId)=>{
    return axios.put(`/api/pics/${taskId}`);
}