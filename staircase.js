// Brute Force Solution
function numWays(n) {
    if (n === 0 || n === 1) return 1;
    return numWays(n - 1) + numWays(n - 2);
}
// Optimal Solution
function numWays_bootomUp(n) {
    if (n === 0 || n === 1) return 1;
    const nums = [1, 1];
    for (let i = 2; i < n; i++) {
        const prevSec = nums[1];
        nums[1] = nums[0] + nums[1];
        nums[0] = prevSec;
    }
    return nums[0] + nums[1];
}

numWays_bootomUp(6);