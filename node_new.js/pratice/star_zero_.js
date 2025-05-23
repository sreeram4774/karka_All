let a=[5,10,15,20,25,30,35]
for(let i=0;i<a.length;i++){
    if(a[i]%5!=0){
        a[i]="*"
    }
    else{
        a[i]="0"
    }
}
console.log(a)