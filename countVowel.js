const countVowel = (str)=>{
    let count = 0 ;

    const vowels = ["A" , "E" , "I" , "O" , "U" , "a", "e" , "i" , "o" , "u"];

    // console.log(vowels.includes("d"));

    for(let i = 0 ; i<str.length ; i ++){
        if(vowels.includes(str[i])){
            count++;
        }
    }

    return count ;
}

//  console.log(countVowel("progrmming"))