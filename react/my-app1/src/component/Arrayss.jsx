import React from 'react'
export const Arrayss = ({item}) => {
  return (
    <>
        <ul>
            {Array.isArray(item) && item.map((items,index)=>(
                <li key={index}>{items}</li>
            ))}
        </ul>
    </>

  )
}
