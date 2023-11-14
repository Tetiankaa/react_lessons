import {useEffect, useState} from "react";
import userServiceJson, {IUser} from "../services/userServiceJson";
import {CanceledError} from "axios";

const useUsers = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    const [error, setError] = useState('');

    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{

        setLoading(true);

        const {request, cancel}  = userServiceJson.getAll<IUser>();

        request.then(({data})=>{
            setUsers(data);
            setLoading(false);
        })
            .catch((error)=>{
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(false);
            })
            .finally(()=>{
                setLoading(false);
            })
        return cancel();

    },[]);

    return {users, error, isLoading, setUsers, setError}
}

export {useUsers}