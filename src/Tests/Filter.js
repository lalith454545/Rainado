import { useState } from "react";
function Search(){
    const [sear, setSear]= useState("");
    const arr=["a", "ab", "abc", "abcd", "bcd", "bc", "cd", "cde"]
    return(
        <div>
            <input
            type="text"
            onChange={(e)=> setSear(e.target.value)}
            value={sear}
            placeholder="enter text"/>
            {arr.map((val, ind) => (
                <p key={ind}>{val.includes(sear)?  val: ""}</p>
            ))}
        </div>
    )
}
export default Search;