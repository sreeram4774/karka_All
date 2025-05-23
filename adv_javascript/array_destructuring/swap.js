// let x=1;
// let y=3;
// [x,y]=[y,x];
// console.log(x);
// // console.log(y);



// const nested = [1, [2, 3], 4];

// const [one,[two], four] = nested;

// console.log(one);   // 1
// console.log(two);   // 2
// console.log(three); // 3
// console.log(four); 



const numbers = [1, 2, 3, 4, 5];

const [first,second,...rest] = numbers;

console.log(first);  
console.log(second); 
console.log(rest); 