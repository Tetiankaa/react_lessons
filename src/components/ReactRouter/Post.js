import React from 'react';
import {useLoaderData} from "react-router-dom";
import {postService} from "../../services/postService";

export const postLoader =async ({params})=>{
    // const {data} =  await postService.getById(params.id);
    // return data;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const resJson = await res.json();

    return resJson;
}
const Post = () => {
    const result = useLoaderData();

    return (
        <div>
            <h1>{result.id} {result.title}</h1>
        </div>
    );
};

export {Post};

