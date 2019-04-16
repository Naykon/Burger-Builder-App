import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-facc5.firebaseio.com/'
});

export default instance;