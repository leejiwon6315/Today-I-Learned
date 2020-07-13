const nameArr = ['a', 'b', 'c'];
nameArr.forEach((name) => console.log(`내이름은 ${name}이야`));

const nameArr = [3, 4, 6];
const n = nameArr.map(num => num*2);
console.log(n);

//filter() = 내가 원하는 조건을 만족하는 배열속 요소를 새로운 배열(변수)에 담음
const numArr = [1,2,3,4,5,6,7,8];

const odd = numArr.filter( x => (x%2===1) );
console.log(odd);
