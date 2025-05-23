import React from 'react'

export const Props = ({data}) => {
    const mark_grade=(marks)=>{
        if (marks >= 90 && marks <= 100) {
            return "A Grade";
          } else if (marks >= 80 && marks <=89) {
            return "B Grade";
          } else if (marks >= 70 && marks <=79) {
            return "C Grade";
          } else {
            return "Fail";
          }
        };
  return (
    <>
        <table border="1" style={{ borderCollapse: 'collapse',width:"700px",height:"200px",textAlign:"center"}}>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Students Name</th>
                    <th>Subjects</th>
                    <th>Marks</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((datas,index)=>(               
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{datas.name}</td>
                            <td>{datas.subject}</td>
                            <td>{datas.Marks}</td>
                            <td>{mark_grade(datas.Marks)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
  )
}
