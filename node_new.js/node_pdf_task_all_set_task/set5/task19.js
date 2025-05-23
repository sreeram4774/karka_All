let a =[23, 4, -6, 23, -9, 21, 3, -45, -8]
let positive=[]
let negative=[]
for(let i=0;i<a.length;i++){
    if(a[i]>0){
        positive.push(a[i])

    }
    else{
        negative.push(a[i])
    }
}
console.log(positive)
console.log(negative)