const removeDuplicate  = (arr)=>{
    const seenArr = [];

    for(let i = 0 ; i < arr.length ; i++){
        if(!seenArr.includes(arr[i])){
            seenArr.push(arr[i]);
        }
    }

    return seenArr;
}


// const arr = [1, 2, 2, 3, 4, 4 , 5 , 6 , 6 , 5 , 8] ;

// console.log(removeDuplicate(arr))