import React from 'react'
import { useState } from 'react'

const Usestate_table = () => {
    const [text,setText]=useState('')
    const [product,setProduct]=useState([])

    const handlechange=(event)=>{
        setText(event.target.value)

    }
     const handleclick=()=>{
        if(text.trim() !==""){
            setProduct([...product,text])
            setText("")
        }
     }


  return (
    <>
        <input type="text" onChange={handlechange} value={text} /> 
        <button onClick={handleclick}>click</button>
        <table border={1}>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Product</th>
                </tr>
            </thead>
            <tbody>
                {product.map((item,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default Usestate_table