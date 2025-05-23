// const array=[1,2,3,4]
// const reduce=array.reduce((accum,num)=>(accum+num),0)
// console.log(reduce)


// const arr=[1,2,3,4,5]
// const total=arr.reduce((acc,num)=>{
//     return num>acc ? num : acc
// },0)
// console.log(total)


const array=[1,2,3,4]
const reduce=array.reduce((accum,num)=>(accum>num ? accum:num),0)
console.log(reduce)