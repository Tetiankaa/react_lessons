import React from 'react';
import {Posts} from "../components/PostContainer/Posts";
import {useLoaderData} from "react-router-dom";

const PostPage = () => {
    const {data} = useLoaderData();

    return (
        <div>
            <Posts posts={data}/>
        </div>
    );
};

export {PostPage};