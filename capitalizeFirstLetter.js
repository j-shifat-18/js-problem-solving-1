const capitalizeFirstLetter = (str)=>{
    let capitalizeStr = "";
    let isNewWord = false ;
    for(let i = 0 ; i< str.length ; i++){
        if(i===0 ) {
            capitalizeStr+= str[0].toUpperCase();
        } 
        else if(str[i]===" ") {
            isNewWord = true;
            capitalizeStr += str[i];
        }
        else if(str[i] && isNewWord) {
            capitalizeStr += str[i].toUpperCase();
            isNewWord= false;
        }
        else capitalizeStr += str[i];
    }

    return capitalizeStr;
}

// const str = "hello world Nana mama";
// str[0].toUpperCase();
// // console.log(str)
// console.log(capitalizeFirstLetter(str))