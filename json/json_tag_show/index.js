fetch("./index.json").then(res=>res.json()).then(data=>{
    // const details=data.product
    document.getElementById("text").innerText=`name : ${data.product.name}`
})