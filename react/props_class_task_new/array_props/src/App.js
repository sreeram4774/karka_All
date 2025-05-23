import React from "react";
import {Add} from './component/Array'

export const App=()=>{
  let array=["apple","orange","kiwi"]
      return(
        <Add name={array}/>
      )
}