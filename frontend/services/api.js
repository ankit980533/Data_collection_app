import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const getData = () => api.get('/data');
export const postData = (data) => api.post('/data', data);
