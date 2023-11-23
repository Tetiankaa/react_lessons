import {useMemo, useState} from "react";

const summator = (n)=>{
    let sum = n;

    for (let i = 0; i < 1000; i++) {
       sum+=i;

    }
    for (let i = 0; i < 40000; i++) {

    }

    return sum;
}
const UseMemoComponent = () => {
    const [n, setN] = useState(5);
    const [count, setCount] = useState(0);

    // const res = summator(n);

    const res = useMemo(()=> summator(n),[n])

    return (
        <div>
            <div>Result:{res}</div>
            <div>Count:{count}</div>
            <button onClick={()=>setN(prevState => ++prevState)}>incN</button>
            <button onClick={()=>setCount(prevState => ++prevState)}>incCount </button>
        </div>
    );
};

export {UseMemoComponent};