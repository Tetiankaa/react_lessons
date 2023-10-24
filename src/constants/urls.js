const baseURLJson = 'https://jsonplaceholder.typicode.com';

const baseUrlCars = 'http://owu.linkpc.net/carsAPI/v1';

const posts = '/posts';

const cars = '/cars'

const urls={
    posts,
    cars:{
        base:cars,
        byId:(id)=>`${cars}/${id}`
    }
}
export {urls, baseURLJson, baseUrlCars}