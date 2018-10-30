let array = [5, 25, 10, -1, -2, -3, -4, -5, -20]
function maxValue(array) {
  let maxNumber = array[0];
  let maxNumberIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
      maxNumberIndex = i;
    }
  }
  console.log(maxNumberIndex);
  return maxNumberIndex
}
// maxValue(array);
function sort2(array) {
  // unsorted array controller
  console.log(array.length);
  for (let lastIndex = array.length - 1; lastIndex > 0; lastIndex--) {
    // find max number and it's index in iteration
    let maxNumberIndex = 0;
    // console.log(maxNumber)
    for (let i = 0; i < lastIndex; i++) {
      if (array[i] > array[maxNumberIndex]) {
        maxNumberIndex = i;
        console.log(array[maxNumberIndex]);
      }
    }
    // swap positions
    // array[lastIndex];// a
    // array[maxNumberIndex]; //b
    let c = array[maxNumberIndex]; //save a to c
    array[maxNumberIndex] = array[lastIndex] // swap
    array[lastIndex] = c // restore
    console.log(c);

  }
  console.log(array);
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