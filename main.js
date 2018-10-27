const n = 4;
buildSomthg(n)

function quad(number) {
  return number * number;
}
function swap(array) {
  let last = array.pop();
  array.push(last);
  return array;
}
function buildSomthg(n) {
  const n2 = quad(n);
  let template = [];
  let template2 = new Array(n2);
  console.log(template2.length);
  for (let i = 0; i < n2; i++) {
    const value = i+1
    template2.fill(value,i,value)
  }
  console.log(template2);
  // number splitter by n.
  for (let i = 0; i < n; i++) {
    let element = template[i];
    let startNum = i*n;
    let endNum = n+startNum
    if (i === 0) {
      startNum = 0;
      endNum = n;
    }
    console.log(startNum);
    console.log(endNum);
      template.push(template2.slice(startNum,endNum));
  }
  // right

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
