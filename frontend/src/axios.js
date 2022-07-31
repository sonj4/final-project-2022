import axios from 'axios';

export default axios.create({
    baseURL: "https://djangoresttodo1.herokuapp.com/api"
})