const checkPalindrome =(str)=>{
    let reverseStr = "";
    let j = 0;
    for(let i = str.length-1 ; i>=0 ; i--)
    {
       
        reverseStr += str[i];
        j++;
    }

    return reverseStr.toLowerCase()=== str.toLowerCase();
}

// const str1 = "hello"
// const str2 = "dsd";
// // console.log(str1);
// console.log(checkPalindrome(str1))