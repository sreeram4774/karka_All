// let fruits=["apple","orange","kiwi"]
// const filters=fruits.filter(data => data.length>4)
// console.log(filters)


// let fruits=["apple","orange","kiwi"]
// const filters=fruits.filter(data => data.length === 5)
// console.log(filters)



const products = [
    { name: "Phone", price: 200 },
    { name: "Headphones", price: 40 },
    { name: "Keyboard", price: 30 },
    { name: "Monitor", price: 150 }
];

const affordableProducts = products.filter(product => product.price <= 50).map(product=>product.name)

console.log(affordableProducts);