function Child({notParent}){
    return <button onClick={notParent}> function</button>
}
function Parent(){
    function sendal(){
        alert("Hello");
    }
    return <Child notParent={sendal}></Child>
}
export default Parent;