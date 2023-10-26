import React from 'react';
import {useLocation} from "react-router-dom";
import {Posts} from "../components/PostsContainer/Posts";

const PostPage = () => {
    const {state:userId} = useLocation();

    return (
        <div>
           <Posts userId={userId}/>
        </div>
    );
};

export {PostPage};