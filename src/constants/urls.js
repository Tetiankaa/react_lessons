const baseUrlDummy = 'https://dummyjson.com/';
const baseUrlJson = 'https://jsonplaceholder.typicode.com';

const posts = '/posts';
const users = '/users';

const urls = {
    users,
    posts:{
        base:posts,
        byId:(id)=>`${posts}/${id}`
    }
}
export {baseUrlDummy, urls, baseUrlJson}