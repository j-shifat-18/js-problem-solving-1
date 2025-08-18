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

