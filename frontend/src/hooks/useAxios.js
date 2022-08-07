import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://djangoproject133.herokuapp.com/api/';

const useAxios = (axiosParams) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async (params) => {
        try {
            const result = await axios.request(params);
            setResponse(result.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []); 
    //console.log(response)
        return { response, loading, error };

    
};

export default useAxios;
