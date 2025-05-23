import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <>
        <div className='navbar' style={{height:"100px",backgroundColor:"lightblue",display:"flex"}}>
            <div className='text' style={{width:"50%",backgroundColor:"blue",height:"100px"}}>
                <h1>Bloom</h1>
            </div>
            <div className='content' style={{height:"100px",width:"50%",backgroundColor:"green",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                {/* <ul> */}
                    <Link to="/">One</Link>
                {/* </ul> */}
                {/* <ul> */}
                    <Link to="/Two">Two</Link>
                {/* </ul> */}
                {/* <ul> */}
                    <Link to="/Three">Three</Link>
                {/* </ul> */}
                {/* <ul> */}
                    <Link to="/Four">Four</Link>
                {/* </ul> */}
                
            </div>
        </div>
    </>
  )
}
