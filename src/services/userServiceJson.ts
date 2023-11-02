import {axiosServiceJson} from "./axiosServiceJson";
import create from "./http-service";

export interface IUser{
    id:number,
    name:string
}

export default create('/users');
//
// const userServiceJson = {
//     getAllUsers:()=>{
//         const controller = new AbortController();
//        const request = axiosServiceJson.get<IUser[]>('/users',{signal:controller.signal});
//
//        return {request, cancel:()=>controller.abort()}
//     },
//     deleteUser:(id:number) =>{
//       return axiosServiceJson.delete(`/users/${id}`)
//     },
//     createUser:(user:IUser)=>{
//         return  axiosServiceJson.post('/users', user)
//     },
//     updateUser:(user:IUser)=>{
//         return axiosServiceJson.patch(`/users/${user.id}`, user)
//     }
// }
// export {userServiceJson}