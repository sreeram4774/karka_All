// const array=[1,2,3,4,5,7,8]
// const maps=array.map((data)=>{
//     console.log(data)
//     return data *2
// })
// console.log(maps)



// const array=[1,2,3,4,5,7,8]
// const maps=array.map((data,index)=>{
//     console.log(data)
//     return {data,index}
// })
// console.log(maps)


// const a=[2,4,6,7,8,10]
// const pricediscount=1
// const total=a.map((price)=>{
//     return price -1
// })
// console.log(total)


// const a=[2,4,6,7,8,10]
// const pricediscount=1
// const total=a.map((price)=>{
//     return price - pricediscount
// })
// total.forEach((para)=>{
//     console.log(para)
// })

// const a = [
//     { name: "sree", age: 24 },
//     { name: "subin", age: 26 },
//   ];
  
//   const result = a.map((data, index) => {
//     return {
//       name:data.name,
//       age: data.age + 1,
//     };
//   });
  
//   console.log(result[0]);


// const a=[1,2,3,4,5,6]
// const script=a.map((data,index)=>`data :${index} index: ${data}`)
// console.log(script)


// const a=[1,2,3,4,5,6]
// const script=a.map(data=>data*2)
// console.log(script)



// const a = [
//       { name: "sree", age: 24 },
//       { name: "subin", age: 26 },
//     ];
    
//     const result = a.map((data) => {
//       return {
//         name:data.name,
//         age: data.age+1,
//       };
//     });
//     console.log(result)

const a = [
        { name: "sree", age: 24 },
        { name: "subin", age: 26 },
      ];

const result = a.map((data) => ({
    name:data.name,
    age:data.age+1

}));

console.log(result);









