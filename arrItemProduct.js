function arrItemProduct(arr) {
  const arrProduct = arr.reduce((a, b) => a * b);
  return arr.map(_ => arrProduct).map((x, i, A) => x / arr[i]);
}

arrItemProduct([1, 2, 3, 4, 5]);
