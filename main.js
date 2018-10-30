let array = [5,2,1,4,3]
function maxValue(array) {
  let maxNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if(array[i] > maxNumber) {
      maxNumber = array[i]
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