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
