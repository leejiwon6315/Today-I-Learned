## 의미있고 발음하기 쉬운 변수 이름 사용
#### 안 좋은 예
```
const yyyymmdstr = moment().format('YYYY/MM/DD');
```
#### 좋은 예
```
const currentDate = moment().format('YYYY/MM/DD');
```
<br/>

## 동일한 유형의 변수에 동일한 어휘를 사용
#### 안 좋은 예
```
getUserInfo();
getClientData();
getCustomerRecord();
```
#### 좋은 예
```
getUser();
```
<br/>

## 검색 가능한 이름을 사용
#### 안 좋은 예
```
setTimeout(blastOff, 86400000);
```
#### 좋은 예
이런 경우 대문자로 const 전역 변수를 선언 권장.<br/>
*const는 값이 바뀌거나 재할당 되지 않는다
```
const MILLISECONDS_IN_A_DAY = 86400000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);
```
<br/>

## 의도를 나타내는 변수들을 사용
#### 안 좋은 예
```
const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(address.match(cityZipCodeRegex)[1], address.match(cityZipCodeRegex)[2]);
```
#### 좋은 예
```
const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);
```
<br/>

## 자신만 알아볼 수 있는 작명을 피하라
#### 안 좋은 예
1은 무엇을 나타내는가?
```
const locations = ['서울', '인천', '수원'];
locations.forEach(l => {
  doStuff();
  doSomeOtherStuff();
  
  // ...
  // ...
  // ...
  // ...
  
  dispatch(l);
});
```
#### 좋은 예
명시적인 것이 암시적인 것보다 좋다.
```
const locations = ['서울', '인천', '수원'];
locations.forEach(location => {
  doStuff();
  doSomeOtherStuff();
  
  // ...
  // ...
  // ...
  
  dispatch(location);
});
```
<br/>

## 문맥상 필요없는 것들을 쓰지 않기
#### 안 좋은 예
```
const Car = {
  carMake: 'BMW',
  carModel: 'M3',
  carColor: '파란색'
};

function paintCar(car) {
  car.carColor = '빨간색';
}
```
#### 좋은 예
Car 내에 정의되어 있는 make, model, color는 이미 Car라는 객체 안에 소속되어 있음<br/>
굳이 앞에 car를 붙이지 않아도 된다.
```
const Car = {
  make: 'BMW',
  model: 'M3',
  color: '파란색'
};

function paintCar(car) {
  car.color = '빨간색';
}
```
<br/>

## 기본 매개변수가 short circuiting 트릭이나 조건문 보다 깔끔하다.
#### 안 좋은 예
```
function createMicrobrewery(name) {
  const breweryName = name || 'Hipster Brew Co.';
  
  // ...
}
```
#### 좋은 예
기본 매개변수는 종종 short circuiting 트릭보다 깔끔하다. 단, 기본 매개변수가 undefined 일때만 적용.
<br/>

"", false, numm, 0, NaN 과 같은 falsy한 값들은 기본 매개변수가 적용되지 않는다.
```
function createMicrobrewery(name = 'Hipster Brew Co.') {

  // ...
}
```
<br/>
<br/>

#### 출처
https://edu.goorm.io/lecture/20119/번역판-clean-code-javascript
<br/>
Robert C. Martin's 'Clean Code'
