class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const leejiwon = new Human("jeewon", 25, "man");

const sayHi = (person: Human): string => {
  return `name: ${person.name} age: ${person.age} gender: ${person.gender}`;
};

console.log(sayHi(leejiwon));

export {};
