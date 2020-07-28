# ✏️  About React & JS  ✏️ 
> React와 JavaScript를 공부하면서 배우게 된 학술적, 이론적인 부분들을 기재하여 놓았습니다.
<br/>

## 1. Component Life Cycle (컴포넌트 라이프 사이클)
> 컴포넌트, 클래스 컴포넌트는 Life Cycle Method를 가지며, 이는 기본적으로 React가 컴포넌트를 생성하고 없애는 기본적인 방법이다.
<br/>

### 1.1. Mounting(생성)
컴포넌트가 새롭게 생성되는 시점. 컴포넌트 함수가 실행되고 결과물로 나온 Element들이 DOM에 삽입되는 과정이다.<br/>
+ ` constructor() ` Javascript에서 class를 만들 때 호출된다. 때문에 컴포넌트가 Mount되기 전에 실행이 된다.<br/>
+ ` render() ` 컴포넌트에 필수적을 존재해야하는 메소드. 컴포넌트에서 작업한 내용을 최종적을 리턴하여 웹사이트에 보여주는 함수이다.<br/>
+ ` componentDidMount() ` 이 메소드는 기본적으로 컴포넌트가 랜더되었다는 것을 알려준다. 컴포넌트가 DOM에 마운팅 된 후 실행된다. 이 때 DOM에 접근이 가능하기 때문에 주로 AJAX를 요청하거나, setTimeout, setInterval 등의 함수를 실행한다.
<br/>

### 1.2. Updating(업데이트)
컴포넌트의 state 나 props 의 값이 변경되면 업데이트를 하며, 다시 랜더링을 하여 업데이트된 내용을 화면에 보여준다.<br/>
+ `render()` 변경된 내용을 랜더링함.
+ `componentDidUpdate()` 컴포넌트의 업데이트가 완료된 후, 랜더링이 완료되었을 때 호출된다.<br/>
 >componentDidUpdate() 를 이용할 때, setState 를 주의해야한다. componentDidUpdate() 에 setState를 사용한다면, 업데이트가 되는 시점에서 계속해서 state의 값을 변경하기 때문에 무한루프에 빠질 우려가 있다.
<br/>

### 1.3. Unmounting(제거)
