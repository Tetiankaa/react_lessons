import {jsonService} from "./JsonService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => jsonService.get(urls.posts),
    create: (post) => jsonService.post(urls.posts, post)
}

export {postService}