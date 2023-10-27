import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getAll:()=>axiosService.get(urls.posts.base),
    getById:(postId)=>axiosService.get(urls.posts.byId(postId))
}
export {postService}