let array = [0,25,10,-1,-2,-3,-4,-5,-20]
function maxValue(array) {
  let maxNumber = array[0];
  let maxNumberIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if(array[i] > maxNumber) {
      maxNumber = array[i];
      maxNumberIndex = i;
    }
  }
  console.log(maxNumberIndex);
  return maxNumberIndex
}
maxValue(array);
function sort2(array) {
  let lastIndexPosition = array.length-1 // b
  console.log(lastIndexPosition);
  let maxNumberIndex = 0;
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    if(array[i] > array[maxNumberIndex]) {
      maxNumberIndex = i; // a
      let a = array[maxNumberIndex];
      let b = array[lastIndexPosition];
      let c;
      c = a;
      a = b;
      b = c;
      array[i] = a;
      array[lastIndexPosition] = b;
      lastIndexPosition = lastIndexPosition-1;
      console.log(array);
    }
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