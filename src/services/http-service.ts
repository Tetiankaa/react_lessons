import {axiosServiceJson} from "./axiosServiceJson";
import {IUser} from "./userServiceJson";

interface Entity{
    id:number
}
class HttpService {
    endpoint:string;
    constructor(endpoint:string) {
        this.endpoint=endpoint;
    }

        getAll<T>(){
            const controller = new AbortController();
            const request = axiosServiceJson.get<T[]>(this.endpoint,{signal:controller.signal});

            return {request, cancel:()=>controller.abort()}
        }
        deleteById(id:number){
            return axiosServiceJson.delete(this.endpoint + `/${id}`)
        }
        create<T>(entity:T){
            return  axiosServiceJson.post<T>(this.endpoint, entity)
        }
        update<T extends Entity>(entity:T){
            return axiosServiceJson.patch<T>(this.endpoint+`/${entity.id}`, entity)
        }

}

const create = (endpoint:string) => new HttpService(endpoint);

export default create;