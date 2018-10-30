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
// function bubleSort(array) {

//   return array
// }
// bubleSort(array);

// let a = 5;
// let b = 11;
// let c = 0;
// c = a;
// a = b;
// b = c
// console.log(c)

// console.log(a,b)