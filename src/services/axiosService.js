import axios from "axios";
import {baseURL} from "../constants/urls";

const axiosService = axios.create({baseURL}) //({baseURL:baseURL})

export {axiosService};