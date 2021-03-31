export function adjacentElementsProduct(inputArray: number[]): any {
  let largeProduct = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];

    largeProduct = largeProduct < product ? product : largeProduct;
  }

  return largeProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
