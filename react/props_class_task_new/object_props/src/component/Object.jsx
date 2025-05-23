 import React from "react";

 export const Object=(props)=>{
    return(
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Place</th>
                    </tr>
                </thead>
                <tbody>
                    {props.details.map((item,index)=>(
                        <tr key={item.Id}>
                            <td>{index +1}</td>
                            <td>{item.Id}</td>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td>{item.Place}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
 }