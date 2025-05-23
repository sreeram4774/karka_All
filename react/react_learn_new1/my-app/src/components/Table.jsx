const Table=()=>{
    const fruits=["apple","orange","kiwi","banana","pineapple"]
    return(
        <>
            <table border={1}>
                <thead>  
                        <tr>
                        <th>Index</th>
                        <th>Fruits</th>
                        </tr>  
                </thead>
                <tbody>
                    {fruits.map((data,index)=>
                        <tr key={index}> 
                            <td>{index+1}.</td>
                            <td>{data}</td>
                        </tr>

                    )}
                </tbody>
            </table>
        </>
    )
}
export default Table