function subSets(nums) {
    const subSets = [];
    generateSubsets(0, nums, [], subSets);

    return subSets;
}

function generateSubsets(index, nums, current, subSets) {
    console.log(index, nums, current, subSets);
    subSets.push([...current]);
    for (let i = index; i < nums.length; i++) {
        current.push(nums[i]);
        generateSubsets(i + 1, nums, current, subSets);
        console.log('popping');
        current.pop();
    }
}

subSets([1,2,3]);