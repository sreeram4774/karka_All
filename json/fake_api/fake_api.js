fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>{
    const product=data[0]
    document.getElementById("one").innerText=`Name :${product.userId}`
})