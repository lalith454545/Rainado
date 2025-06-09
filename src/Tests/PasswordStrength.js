import { useState } from "react";
function Pass(){
    const [color, setColor]= useState("");
    const [pass, setPass]= useState("");
    function col(){
        if(pass.length<4) setColor("red");
        if(pass.length>=4 && pass.length<8) setColor("orange");
        if(pass.length>=8) setColor("green");
    }
    return(
        <div style={{backgroundColor: color, height:"100vh"}}>
            <input
            type="password"
            onChange={(e)=> setPass(e.target.value)}
            value={pass}
            placeholder="Enter password"/>

            <button onClick={col}>
                Submit
            </button>
        </div>
    )
}
export default Pass;