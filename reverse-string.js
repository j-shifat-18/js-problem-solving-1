const reverseString =(str)=>{
    let reverseStr = "";
    let j = 0;
    for(let i = str.length-1 ; i>=0 ; i--)
    {
        // console.log(str[i])
        reverseStr += str[i];
        // console.log(reverseStr)
        j++;
    }
    return reverseStr;
}



// const str = "Hello";
// let str2 ="";
// str2 += str[0];
// // console.log(str2)
// const result = reverseString(str);
// console.log(result);