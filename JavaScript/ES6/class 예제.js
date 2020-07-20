class Person{
	//constructor
	constructor(name){
		this.name = name;
	}
	//method
	sayHello(){
		console.log(`안녕 나는 ${this.name}이야`);
	}
}

//인스턴스
const jeewon = new Person('이지원');
const jeewoong = new Person('이지웅');

jeewon.sayHello();
jeewoong.sayHello();

class Student extends Person{
	//constructor
	constructor(name, school, major){
		super(name);
		//super를 활용하여 부모클래스의 상태를 초기화. name은 부모 클래스에서 받아 왔기 때문
		
		this.school = school;
		this.major = major;
	}
	
	//method
	getMajor(){
		console.log(`안녕 나는 ${this.name}이야. ${this.school}에 다니고 있고, ${this.major} 야`);
	}
}

const yeoungKu = new Student('영구', '낙성대', '치킨심리학과');
yeoungKu.getMajor();
