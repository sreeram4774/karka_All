let a=[1,2,3,4,5,10,12,20]
let b=[]
for(let i=0;i<a.length;i++){
   if(a[i]%5==0){
    console.log(a[i])
   }
   else{
      b.push(a[i])
   }
 
}
console.log(b)