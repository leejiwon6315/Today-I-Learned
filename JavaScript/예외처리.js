try{
	console.log("try 문장");
	throw new Error("사전 정의된 에러");
	//throw 에러를 발생시키는 함수
}
catch(err){
	console.log("catch 문장");
	console.log(err.name);
	console.log(err.message);
	console.log(err);
}
finally{
	console.log("finally 문장");
}
