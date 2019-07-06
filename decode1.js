function decodeMessage(data) {
    const memo = [...Array(data.length + 1)];
    return helper(data, data.length, memo);
}

function helper(data, k, memo) {
    if (data[0] === '0') return 0;
    if (k === 0) return 1;
    if (memo[k]) {
        return memo[k];
    }
    let result = helper(data, k - 1, memo);
    if (k > 1 && data.substr(0, 2) < 27) {
        result += helper(data, k - 2, memo);
    }
    memo[k] = result;

    return result;
}

decodeMessage('1111111111111111111111111111111111111111111111111');