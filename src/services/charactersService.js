import {axiosService} from "./axiosService";
import {urls} from "../constants";

const charactersService = {
    getAll:(page)=>axiosService.get(urls.characters, {params:{page}})
}

export {charactersService}