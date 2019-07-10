function orderStatistics(nums, k) {
    const len = nums.length;
    let min1 = nums[0];
    let min2 = nums[1];
    for(let i = 0; i < len; i++) {
        if(nums[i] < min1) {
            min2 = min1;
            min1 = nums[i];
        } else if(nums[i] < min2) {
           min2 = nums[i]; 
        }
    }

    return min2;
}

orderStatistics([3,2,0,6], 1)