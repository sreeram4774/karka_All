import React from "react";
import {Object} from './component/Object'

export const App=()=>{

  const a=[
    {Id:1,Name:"sreeram",Age:25,Place:"Ngl"},
    {Id:2,Name:"Achu",Age:20,Place:"Tiruchy"},
    {Id:3,Name:"sooraj",Age:27,Place:"Coimbathore"}

  ]
  return(
    <Object details={a}/>
  )
}
