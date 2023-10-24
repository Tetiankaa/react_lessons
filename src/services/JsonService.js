import axios from "axios";
import {baseURLJson} from "../constants/urls";

const jsonService = axios.create({baseURL:baseURLJson});

export {jsonService}