import axios from "axios";
import {baseUrlDummy} from "../constants/urls";

const axiosService = axios.create({baseURL:baseUrlDummy});

export {axiosService}