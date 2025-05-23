    let vowels=["a","e","i","o","u"]
    let words=["karka"]

    for(let i=0;i<vowels.length;i++){
        let vowel=vowels[i]
        for(let j=0;j<words.length;j++){
            let word=words[j] 
            if(vowel== word){
                console.log("it is vowel word")
            }
            else{
                console.log("it is not a vowel word")
            }
        }
    }





