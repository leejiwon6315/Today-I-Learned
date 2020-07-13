const arrowAdd = (num1, num2) => num1 + num2; 
console.log(arrowAdd(10, 3));

const arrowpower = num1 => num1 * num1;
console.log(arrowpower(12));

const isPos = num => (num <=0 ? 0 : num);
console.log(isPos(2));

setTimeout(()=> console.log("s"), 3000);
