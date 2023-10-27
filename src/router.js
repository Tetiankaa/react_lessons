import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom";
import {FirstLayout} from "./layouts/FirstLayout";
import {HomePage} from "./pages/HomePage";
import {Data, dataLoader} from "./components/ReactRouter/Data";
import {Post, postLoader} from "./components/ReactRouter/Post";

const router = createBrowserRouter([
    {path:'/',element:<FirstLayout/>, children:[
            {index:true,element: <Navigate to={'home'}/>},
            {path:'/home', element:<HomePage/>},
            {path:'/posts', element:<Data/>, loader:dataLoader },
            {path:'/posts/:id', element:<Post/>, loader:postLoader}
        ]}
])

//const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<FirstLayout />}>
//             <Route index path="/home" element={<HomePage />} />
//             <Route path="/posts" element={<Data />} loader={dataLoader}></Route>
//             <Route path="/posts/:id" element={<Post />} loader={postLoader} />
//         </Route>
//     )
// );

export {router}