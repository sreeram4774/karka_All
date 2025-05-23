import React from 'react'
import { Link } from 'react-router-dom';


export const Main = () => {
  return (
    <>
       <div style={{backgroundColor:"grey",height:"110px",display:"flex",alignItems:"center",}}>
            <div className='main' style={{width:"40%",display:"flex",justifyContent:"center",}}>
                <div style={{width:"30%"}}>
                <h1 style={{color:"white"}}>Sree</h1>
                </div>
            </div>
            <div className='content' style={{width:"60%",display:"flex",justifyContent:"center"}}>
                <div style={{width:"60%",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/portfolio">PORTFOLIO</Link>
                <Link to="/contact">CONTACT</Link>
                <button style={{backgroundColor:"aliceblue",width:"10%",height:"30px",}}>Apply</button>
                </div>
            </div>
       </div>   
    </>
  )
}
// export default Main;
