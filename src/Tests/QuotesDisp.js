import { useState } from "react";
function Quotes(){
    const [show, setShow]= useState(false);
    const quo=["q1", "q2", "q3", "q4", "q5"];
    return(
        <div>
            <button onClick={()=> setShow(!show)}>Show Quotes</button>
            {show && quo.map((val, ind)=>(<p key={ind}>{val}</p>))}
        </div>
    )
}
export default Quotes;