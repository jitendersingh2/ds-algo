/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let count = 0;
    let result = null;
    const len = nums.length;
    for(let i = 0; i < len; i++) {
        if(count == 0) {
            result = nums[i];
        }
        count += nums[i] === result ? 1 : -1;
    }
    
    return result;
};

majorityElement([3,2,3]);