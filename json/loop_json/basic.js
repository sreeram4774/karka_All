fetch("./basic.json").then(res=>res.json()).then(data =>{
    // console.log(data)
    let product=data.Details
    let div=document.getElementById("text")
    for(let i=0;i<product.length;i++){
        let b=product[i]
        // console.log(b)
        let row=document.createElement("p")
        let result=`name: ${b.name},<br>age:${b.age},<br>place:${b.place}`
        row.innerHTML=result
        div.appendChild(row)


    }

})