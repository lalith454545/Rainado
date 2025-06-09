import { useState } from "react";
function DynamicList(){
    const [item, setItem]= useState([]);
    const [input, setInput]= useState("");
    function add(){
        if(input.trim()){
            setItem([...item, input]);
            setInput("");
        }
    }
    return(
        <div>
            <input 
            type="text"
            onChange={(e)=>setInput(e.target.value)}
            value={input}
            placeholder="Enter item"/>
            <button onClick={add}>
                Add Item
            </button>
            <ul>
                {item.map((i, ind)=>(<li key={ind}>{i}</li>))}
            </ul>
        </div>
    )
}
export default DynamicList;