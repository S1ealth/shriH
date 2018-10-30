let array = [4, 6, 8, 1, 0, 7, 15, 19];
function maxValue(array) {
  let maxNumber = array[0];
  let maxNumberIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
      maxNumberIndex = i;
    }
  }
  return maxNumberIndex
}
// maxValue(array);
function sort2(array) {
  // unsorted array controller
  for (let lastIndex = array.length - 1; lastIndex > 0; lastIndex--) {
    // find max number and it's index in iteration
    let maxNumberIndex = 0;
    // console.log(maxNumber)
    for (let i = 0; i <= lastIndex; i++) {
      if (array[i] > array[maxNumberIndex]) {
        maxNumberIndex = i;
      }
    }
    // swap positions
    // array[lastIndex];// a
    // array[maxNumberIndex]; //b
    let c = array[maxNumberIndex]; //save a to c
    array[maxNumberIndex] = array[lastIndex] // swap
    array[lastIndex] = c // restore

  }
  return array;
}
sort2(array);
// bubleSort(array);

// let a = 5;
// let b = 11;
// let c = 0;
// c = a;
// a = b;
// b = c
// console.log(c)

// console.log(a,b)