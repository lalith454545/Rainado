import { useState, useEffect } from "react";
function Resize(){
    const [size, setSize]= useState(window.innerWidth);
    useEffect(()=>{
        function resize(){
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", resize);
        resize();
        return ()=> window.removeEventListener("resize", resize);
    },[]);
    return (
        <div>
            <p>The width is: {size}</p>
        </div>
    )
}
export default Resize;