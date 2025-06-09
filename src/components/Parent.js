import { useState } from "react";
import Child1 from "./ChildA";
import Child2 from "./ChildB";
function Parent(){
    const [text, setText]= useState("");
    return(
        <div>
            <Child1 text={text} setText={setText}/>
            <Child2 text={text}/>
        </div>
    )
}
export default Parent;