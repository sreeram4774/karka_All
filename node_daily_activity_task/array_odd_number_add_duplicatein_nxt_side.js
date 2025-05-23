let array=[1,0,2,3,0,4,5,0]
let a=[]
for(let i=0;i<array.length;i++){
    if(array[i]%2==1){
        a.push(array[i],i)

    }
    else{
        a.push(array[i])
    }
}
console.log(a)


