const findMaxNumber = (nums)=>{
    nums.sort((a,b)=>b-a);
    return nums[0];
}

// const nums = [1 , 10 , 3 , 6 , 8];
// nums.sort((a,b)=>b-a);
// console.log(nums)

// console.log(findMaxNumber(nums));