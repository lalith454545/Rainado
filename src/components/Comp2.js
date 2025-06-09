import { use, useState } from "react";
function Counter(){
    const [count, setCount]= useState(0);
    function increase(){
        setCount(count+1);
    }
    return(
        <div>
            <button onClick={increase}>
                Click me to increase
            </button>
            <p>{count}</p>
        </div>
    )
}
export default Counter;