/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for(let num in nums) {
        result ^= nums[num];
    }
    return result;
};

singleNumber([2,2,1]);