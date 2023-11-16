import {CarForm, Cars} from "../components";
import {useSelector} from "react-redux";

const CarsPage = () => {
    const {error} = useSelector(state=> state.cars);
    return (
        <div>
            {error && <h1>{JSON.stringify(error)}</h1>}
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarsPage};