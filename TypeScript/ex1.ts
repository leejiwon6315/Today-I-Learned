const name = "jeewon",
  age = 25,
  gender = "male";

const sayHi = (name: string, age: number, gender?: string): string => {
  // 변수들의 타입을 직접 지정해주기 + 함수가 반환할 타입을 설정
  // ?는 선택적인 요소를 넣을 때 사용
  return `name: ${name} age: ${age} gender: ${gender}`;
};

console.log(sayHi(name, age));

export {};
