const List_Array =()=>{
    const fruits=["apple","orange","kiwi","banana","pineapple"]
        return(
            <>
            <h1>FRUITS</h1>
            <ul>
                {fruits.map((data)=>
                <li>{data}</li>
                )}
            </ul>
            </>
        )
    }
    
export default List_Array