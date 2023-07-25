import axios from 'axios';
export const fetchBooks = (page,size)=>axios.get(`http://localhost:5000/check?size=${size}&page=${page}`)