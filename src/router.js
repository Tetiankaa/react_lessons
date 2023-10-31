import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {PostPage} from "./pages/PostPage";
import {postService} from "./services/postService";

const router = createBrowserRouter([
    {path:"",element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'users'}/>},
            {path:'users', element:<UsersPage/>, children:[
                    {path:':userId', element:<PostPage/>,loader:({params:{userId}})=>postService.getById(userId)}
                ]}
        ]}
])

export {router}