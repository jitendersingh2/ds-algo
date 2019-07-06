function isTwoSumAddsToTarget(list, k) {
  let start = 0;
  let end = list.length - 1;
  while (start < end) {
    const sum = list[start] + list[end];
    if (sum === k) return true;
    else if (sum > k) end--;
    else start++;
  }

  return false;
}

isTwoSumAddsToTarget([10, 2, 3, 6], 17);