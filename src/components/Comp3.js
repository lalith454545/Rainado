import { useState } from "react";

function List(){
    const lis=["Hello", "Lalith", "Srinandan"];
    const [show, setShow]= useState([]);
    function display(){
        const res= lis.map((s, index)=> <p key= {index}>{s}</p>);
        setShow(res);
    }
    return(
        <div>
            <button onClick={display}>
                Click me to display Items
            </button>
            {show}
        </div>
    )
}
export default List;