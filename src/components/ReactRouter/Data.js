import React from 'react';
import {Link, useLoaderData, useNavigation} from "react-router-dom";
import {postService} from "../../services/postService";

const Data = () => {
    const result = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === 'loading'){
        return <h1>loading........</h1>
    }
    return (
        <div>
            {result.map(res=>(
                <div key={res.id}>
                    <Link to={`/posts/${res.id}`}>
                        <h1>{res.title}</h1>
                    </Link>
                    <p>{res.body}</p>
                </div>
            ))}
        </div>
    );
};

export {Data};

export const dataLoader = async ()=>{
    // const {data} = await postService.getAll();
    // console.log(data)
    // return data;

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonResult = await res.json();

    return jsonResult;

}