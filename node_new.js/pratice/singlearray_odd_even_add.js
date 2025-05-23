let a=[1,2,3,4,5,6]
let odd_sum=0
let even_sum=0
let odd_total=[]
let even_total=[]

for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        even_sum+=a[i]
        even_total.push(even_sum)
    }
    else{
        odd_sum+=a[i]
        odd_total.push(odd_sum)
    }
    
}
console.log(even_sum)
console.log(odd_sum)