function Child1({text, setText}){
    return(
        <div>
            <h3>Child 1</h3>
            <input
            type="text"
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder="Enter text"/>
        </div>
    )
}
export default Child1;