let array = [0,10,9,-1,-2,-3,-4,-5,-20]
function maxValue(array) {
  let maxNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if(array[i] > maxNumber) {
      maxNumber = i
    }
  }
  console.log(maxNumber);
  return maxNumber
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