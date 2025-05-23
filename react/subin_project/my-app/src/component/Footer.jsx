import "./Footer.css"

export const Footer =()=>{
    return(
        <>
          {/* <div style={{backgroundColor:"red",height:"100px"}}>
            </div>   */}
            <div className="footer">
                <div className="text">
                    <div className="farm">
                        <div className="" style={{textAlign:"start"}}>
                        <h1>Farm Fresh</h1>
                        <h1>Delights</h1>
                        <span>Fresh products</span>
                        </div>
                    </div>
                    <div className="input">
                       <input className="input1" type="text"/>
                       <button className="btns">Subscribe Now</button>
                    </div>
                    <div className="icon">
                       <i class="fa-brands fa-2x fa-twitter"></i>
                       <i class="fa-brands fa-2x fa-twitter"></i>
                       <i class="fa-brands fa-2x fa-twitter"></i>
                       <i class="fa-brands fa-2x fa-twitter"></i>
                    </div>
                </div>
            </div>
        </>
    )
}