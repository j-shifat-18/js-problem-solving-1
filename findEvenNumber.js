const findEvenNumber =(nums)=>{
    const newArr = [];

    for(let i = 0 ; i<nums.length ; i++){
        if(nums[i]%2 === 0){
            newArr.push(nums[i]);
        }
    }

    return newArr;
}


// const nums = [1, 2, 3, 4, 5, 6];

// console.log(findEvenNumber(nums));