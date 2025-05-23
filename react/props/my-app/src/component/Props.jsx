import React from 'react'
export const Props = ({item}) => {
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
