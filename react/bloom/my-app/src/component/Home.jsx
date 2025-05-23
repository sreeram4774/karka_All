import "./Home.css"

export const Home = () => {
    return (
        <>
            <div className="main">
                <div className="row1">
                    <div className="row m-0 m-auto" style={{ width: "85%" }}>
                        <div className="col-lg-7 col-md-4 col-sm-12 col-12 m-auto">
                            <h1 className="text-white bloom">Bloom</h1>
                        </div>
                        <div className="col-lg-5 col-md-8 col-sm-12 col-12 m-auto d-flex justify-content-between content">
                            <a href="">Home</a>
                            <a href="">About Us</a>
                            <a href="">Service</a>
                            <a href="">Portfolio</a>
                            <a href="">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="background d-flex align-center">
                <div className="row m-0 m-auto photo1" style={{ width: "85%" }}>
                    <div className="col-lg-6 m-auto">
                        <h4>Lorem Ipsum dolor sit amet</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio, ipsam quia vitae doloremque debitis eligendi, eius tempore, labore voluptatem minima? Eaque dignissimos nobis nisi eveniet veniam et dolores a.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio, ipsam quia vitae doloremque debitis eligendi, eius tempore, labore voluptatem minima? Eaque dignissimos nobis nisi eveniet veniam et dolores a Porro optio, ipsam quia vitae doloremque debitis eligendi, eius tempore, labore voluptatem minima? Eaque dignissimos nobis nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio, ipsam quia vitae doloremque debitis eligendi, eius tempore, labore voluptatem minima? Eaque dignissimos nobis nisi
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio, ipsam quia vitae doloremque debitis eligendi, eius tempore, labore voluptatem minima? Eaque dignissimos nobis nisi Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                        <button className="btn learn">Learn More</button>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                        <img src="https://wallpapers.com/images/hd/hd-vacation-house-in-the-beach-j4jasqgcc5ismew8.jpg" className="img-fluid img" alt="" />
                    </div>
                </div>
                <div className="row m-0 photo mt-3">
                    <div className="col-lg-12 col-12 m-auto">
                        <img src="https://wallpapers.com/images/hd/hd-vacation-house-in-the-beach-j4jasqgcc5ismew8.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-sm-12 col-12 m-auto text">
                        <h4>Lorem Ipsum dolor sit amet</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio, ipsam quia vitae doloremque debitis eligendi, eius tempore, labore voluptatem minima? Eaque dignissimos nobis nisi eveniet veniam et dolores.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio, ipsam quia vitae doloremque debitis eligendi, eius tempore, labore voluptatem minima? Eaque dignissimos nobis nisi </p>
                        <button className="btn learn button1">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="row m-0 m-auto mt-3" style={{ width:"85%"}}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 m-auto">
                    <h3>THis is a Heading</h3>
                </div>
            </div>
            <div className="row m-0 mt-3 m-auto" style={{ width:"93%"}}>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-2 m-auto">
                    <img src="data:image/jpeg;base64,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" width="100%" height="250px" alt="" />
                    <h4 className="mt-4">Lorem ipsum dolor, sit amet</h4>
                    <p className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, velit. Commodi magnam sapiente neque maiores molestiae obcaecati ab, distinctio, illo facilis tempora illum fuga eos soluta consectetur quos cumque cupiditateeos soluta consectetur quos cumque cupiditate.</p>
                    <button className="btn learn mb-3">Learn More</button>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-2 m-auto">
                    <img src="https://www.technocrazed.com/wp-content/uploads/2015/12/city-wallpaper-34.jpg" width="100%" height="250px" alt="" />
                    <h4 className="mt-4">Lorem ipsum dolor, sit amet</h4>
                    <p className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, velit. Commodi magnam sapiente neque maiores molestiae obcaecati ab, distinctio, illo facilis tempora illum fuga eos soluta consectetur quos cumque cupiditateeos soluta consectetur quos cumque cupiditate.</p>
                    <button className="btn learn mb-3">Learn More</button>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-2 m-auto">
                    <img src="https://www.itl.cat/pngfile/big/326-3262629_cool-beach-house-wallpaperask-taj-exotica-resort-spa.jpg" width="100%" height="250px" alt="" />
                    <h4 className="mt-4">Lorem ipsum dolor, sit amet</h4>
                    <p className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, velit. Commodi magnam sapiente neque maiores molestiae obcaecati ab, distinctio, illo facilis tempora illum fuga eos soluta consectetur quos cumque cupiditateeos soluta consectetur quos cumque cupiditate.</p>
                    <button className="btn learn mb-3 button2">Learn More</button>
                </div>

            </div>
        </>
    )
}



// import "./Home.css"


// export const Home= ()=>{
//     return(
//         <>
//             <div className="main">
//                 <div className="header_background">
//                         <div className="row m-0 border w-75 m-auto">
//                             <div className="col-lg-6">
//                                 <h1>Bloom</h1>
//                             </div>
//                             <div className="col-lg-6 ">
//                               <a href="">Home</a>
//                               <a href="">About</a>
//                               <a href="">Service</a>
//                               <a href="">Portfolio</a>
//                               <a href="">Contact Us</a>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//         </>
//     )

// }