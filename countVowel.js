const countVowel = (str)=>{
    let count = 0 ;

    const vowels = ["A" , "E" , "I" , "O" , "U" , "a", "e" , "i" , "o" , "u"];


    for(let i = 0 ; i<str.length ; i ++){
        if(vowels.includes(str[i])){
            count++;
        }
    }

    return count ;
}

