import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {authService} from "./authService";

const carService = {
    // getAll:()=>axiosService.get(urls.cars.base,
    //     {headers:{Authorization:`Bearer ${authService.getToken()}`}})
    getAll:(page)=>axiosService.get(urls.cars.base,{params: {page}}),
    create:(data)=>axiosService.post(urls.cars.base, data)
}
export {carService}