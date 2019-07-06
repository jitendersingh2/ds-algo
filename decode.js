// Decode the message
function num_ways(data) {
  const memo = [...Array(data.length + 1)];
  return helper(data, data.length, memo);
}

function helper(data, k, memo) {
  if (k === 0) return 1;
  const s = data.length - k;
  if (data[s] === '0') return 0;
  if(memo[k]) {
    return memo[k];
  }
  let result = helper(data, k-1, memo);
  if (k > 1 && data.substr(0, 2) < 27) {
      result += helper(data, k-2, memo);
  }
  memo[k] = result;
  return result;  
}

num_ways('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');