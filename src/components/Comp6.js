import { useState, useEffect } from "react";
function Hide(){
    const [show, setShow]= useState(false);
    function revert(){
        setShow(!show);
    }
    return(
        <div>
            <button onClick={revert}>
                {!show? "Show": "Hide"} Message
            </button>
            {show && <p> This message is hidden/ shown</p>}
        </div>
    )
}
export default Hide;