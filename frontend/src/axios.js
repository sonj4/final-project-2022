import axios from 'axios';

export default axios.create({
    baseURL: "https://djangoproject133.herokuapp.com/api/movie/"
})