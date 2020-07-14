//...spread
const student = {
	name : '이지원'
}

const univStudent = {
	...student,
	major : '글로벌미디어학부'
}

const koreanUnivStudent = {
	...univStudent,
	region: 'Seoul'
}

console.log(koreanUnivStudent);

const oddNumbers = [1, 3, 5, 7, 9];
const evenNumbers = [2, 4, 6, 8, 10];
const allNumbers = [...oddNumbers, ...evenNumbers];

function allNumbersFunction(...restNum){
	//...rest
	console.log(restNum);
}

const result = allNumbersFunction(...allNumbers)

//destructuring
const SoongsilUnivStudent = {
	name : '이지원',
	major : '글로벌미디어학부',
	region : '서울'
};

const { name, ...rest } = SoongsilUnivStudent;
	   //rest를 활용하여 name을 제외한 다른 요소들을 부분집합으로 만듬
	   
console.log(rest);
