import { useState } from "react";


export const CounterApp= ({value})=>{

    const [contador,setContador]=useState(value);

    function handleAdd({event}){
        setContador(contador+1);
    }
    function handlentAdd({event}){
        setContador(contador-1);
    }
    function reset({event}){
        setContador(Math.round(value));
    }

    return(
     <>
        <div className="contador">
            counter app
            <div>{contador}</div>
            <button onClick={handleAdd}>
                +1
            </button>
            <button onClick={handlentAdd}>
                -1
            </button>
            <button onClick={reset}>
                Reset
            </button>
        </div>
    </>
    );
}