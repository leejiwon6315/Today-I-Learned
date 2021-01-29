interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "jeewon",
  age: 25,
  gender: "male",
};

const sayHi = (person: Human): string => {
  // 변수들의 타입을 직접 지정해주기 + 함수가 반환할 타입을 설정
  // ?는 선택적인 요소를 넣을 때 사용
  return `name: ${person.name} age: ${person.age} gender: ${person.gender}`;
};

console.log(sayHi(person));

export {};
