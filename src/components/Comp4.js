import { useState } from "react";
function Form(){
    const [name, setName]= useState('');
    return(
        <div>
            <input
                type="text"
                value={name}
                placeholder="Enter name"
                onChange={(e)=> setName(e.target.value)}
            ></input>
            <p1>Name is: {name}</p1>
        </div>
    )
}
export default Form;