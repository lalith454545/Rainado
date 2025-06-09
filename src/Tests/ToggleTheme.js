import { useState } from "react";
function Toggle(){
    const [dark, setDark]= useState(false);
    const [col, setCol]= useState("white");
    function togg(){
        const next= !dark;
        setDark(!dark);
        if(dark) setCol("black");
        else setCol("white")
    }
    return (
        <div style={{backgroundColor: col, height: "100vh"}}>
            <button onClick={togg}>
                {!dark? "Light Mode": "Dark Mode"}
            </button>
        </div>
    )
}
export default Toggle;