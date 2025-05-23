function sum(a,b){
    let result=a*b
    if(result > 500){
        return a+b
    }
    else{
        return result
    }
}
console.log(sum(10,50))