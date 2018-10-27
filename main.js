const n = 4;
function quad(number) {
  return number * number;
}
// function sliceAndDice(template, n) {
//   template.slice()
// }
function buildSomthg(n) {
  const n2 = quad(n);
  let template = [];
  let template2 = new Array(n2);
  console.log(template2.length);
  for (let i = 0; i < n2; i++) {
    const value = i+1
    template2.fill(value,i,value)
  }
  // for (let i = 0; i < n; i++) {
  //   template.push(new Array(n));
  // }
  console.log(template2);
  // number splitter by n.
  console.log(4*0) 
  for (let i = 0; i < n; i++) {
    let element = template[i];
    let startNum = i*n;
    let endNum = n+startNum
    if (i === 0) {
      startNum = 0;
      endNum = n;
    }
    // console.log(n);
    console.log(i);
    console.log(startNum);
    console.log(endNum);
    if(i == 1) {
      template.push(template2.slice(startNum,endNum));
    } else {
      template.push(template2.slice(startNum,endNum))
    }
  }
  // right
  let shiftR = template[1].slice(0,3)
  console.log(shiftR);
  template.forEach((value, index, array) => {
    if(index === 0) {
      console.log('skip');
    } else {
      for (let i = 0; i < value.length; i++) {
        const element = value[i];
        console.log(element);
        if (element !== array[0][4]) {

        };
      }
      console.log(value);
      console.log(index);
    }
  })
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  let modified = template.map(() => {
    
  })
  // bottom
  // left
  // top 
  console.log(template);
  return template 
}
console.log(buildSomthg(n));
