import React from 'react'
export const Props = ({item}) => {
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    item.map((data,index) => (
                        <tr key={index}>
                        <td>{index + 1}</td> 
                        <td>{data.name}</td> 
                        <td>{data.age}</td> 
                        </tr>
                    ))
                }

            </tbody>
        </table>
    </>
  )
}
