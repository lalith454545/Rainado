import { useState } from "react";
function Counters(){
    const [counts, setCounts]= useState([0, 0, 0]);
    function inc(index){
        const up=[...counts];
        up[index]+=1;
        setCounts(up);
    }
    function res(ind){
        const up=[...counts];
        up[ind]=0;
        setCounts(up);
    }
    return(
        <div>
            <h1>Dynamic Counters</h1>
            {counts.map((val, ind)=>(
                <div key={ind}>
                    <p> Counter {ind+1}</p>
                    <p> Count= {counts[ind]}</p>
                    <button onClick={()=> inc(ind)}>Increment</button>
                    <button onClick={()=> res(ind)}>Reset</button>
                </div>
            ))}
        </div>
    )
}
export default Counters;