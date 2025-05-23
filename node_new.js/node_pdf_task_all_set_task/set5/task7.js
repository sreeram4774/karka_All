
// square //

// let a=5
// for(let i=0;i<=a;i++){
//     let row="";
//     for(let j=0;j<a;j++){
//         row+="*"
//     }
//     console.log(row)
// }


// triangle //

// let a=5
// for(let i=1;i<=a;i++){
//     let row=""
//     for(let j=0;j<i;j++){
//         row+="*"
//     }
//     console.log(row)
// }


// dimond //

let a=5
for(let i=1;i<=a;i++){
    let row=""
    for(let j=a;j>i;j--){
        row+=" "
    }
    for(let k=0;k<(2*i-1);k++){
        row+="*"
    }
    console.log(row)
}

for(let i=a-1;i>=1;i--){
    let row=""
    for(let j=a;j>i;j--){
        row+=" "
    }
    for(let k=0;k<(2*i-1);k++){
        row+="*"
    }
    console.log(row)
}


