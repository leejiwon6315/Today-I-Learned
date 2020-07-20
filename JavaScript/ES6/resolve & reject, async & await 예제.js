//resolve & reject
function sayHello(name){
	
	return new Promise( (resolve, reject) => {
		
		setTimeout(() => {
			console.log(`내이름은 ${name}이야`);
			resolve(`${name}`);
			//resolve 내의 인자를 .then에게 전달이 가능
			
			//resolve : 함수가 잘 처리되었을 때 호출
			//reject : 잘 실행되지 않았을 때 호출
		}, 2000);
	});
}

sayHello("지원").then((name)=>{console.log(`그래 안녕 ${name}`)});
				//위 함수 resolve에서 전달 받은 인자 name
//.then : resolve 호출시
//.catch : reject 호출시 

//async & await
async function ppoong(name){
	const resultName = await sayHello(name);
	//비동기 함수인 sayHello 함수가 실행 된 후에 실행시키기 위해 async & await 사용
	
	console.log("이 문구는 2초뒤 실행됩니다");
}

ppoong("이지원");

//2초뒤에 인자로 "지원" 을 담은 sayHello 가 실행이되고, "이지원"을 인자로 담은 sayHello 가 실행된다 _ 순서 차이는 있지만 거의 동시실행인듯 함
//첫번째 "지원" 을 담은 sayHello가 잘 실행됐기에 "그래 안녕 지원" 이 실행이 된다 _ 이 문구가 두번째로 실행 될 줄 알았지만 아니었음. 모든 실행이 우선인듯
//마지막으로 2초뒤 출력되는 문구가 실행

//async & await : 외부정보를 가져 올때 많이 사용됨
//예외처리가 자주 발생할 가능성이 있어 try & catch & finally와 함께 자주 사용됨
