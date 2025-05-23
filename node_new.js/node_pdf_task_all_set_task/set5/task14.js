let not_divisble=[]
let divisble=[]
for(let i=1;i<=25;i++){
    if(i%5!=0){
        not_divisble.push(i)
    }
    else{
        divisble.push(i)
    }
}
console.log(not_divisble)
console.log(divisble)