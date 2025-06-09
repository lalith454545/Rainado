import { useState } from "react";
function CharC(){
    const [mat, setMat]= useState("");
    return(
        <div>
            <input
            type="text"
            value={mat}
            placeholder="Enter text"
            onChange={(e)=>setMat(e.target.value)}
            />

            <p>Count: {mat.length}</p>
            {mat.length>=10 && <p>Count limit crossed</p>}
        </div>
    )
}
export default CharC;