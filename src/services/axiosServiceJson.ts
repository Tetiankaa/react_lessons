import axios from "axios";

const axiosServiceJson = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

export {axiosServiceJson}