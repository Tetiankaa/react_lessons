import axios from "axios";
import {baseUrlDummy} from "../constants/urls";

const axiosServiceDummy = axios.create({baseURL:baseUrlDummy});

export {axiosServiceDummy}