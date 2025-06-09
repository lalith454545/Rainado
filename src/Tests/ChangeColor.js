import { useState } from "react";
function Color(){
    const [color, setColor]= useState("");
    function chan(col){
        setColor(col);
    }
    return(
        <div style={{backgroundColor: color}}>
            <input
            type="text"
            value={color}
            onChange={(e)=>setColor(e.target.value)}
            placeholder="Enter color"/>

            <button onClick={()=> chan(color)}>Click Me</button>
        </div>
    )
}
export default Color;