import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getUsers:()=>axiosService.get(urls.users)
}
export {userService}