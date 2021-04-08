const calculator = {
	plus : (a, b) => a + b,
	minus : (a, b) => a - b,
	devide : (a, b) => a / b,
	multiply : (a, b) => a * b,
	power : (a, b) => a ** b
	
}

const plus = calculator.plus(5, 3);
const minus = calculator.minus(5, 3);
const devide = calculator.devide(5, 3);
const multiply = calculator.multiply(5, 3);
const power = calculator.power(5, 3);

console.log(plus, minus, devide, multiply, power);
