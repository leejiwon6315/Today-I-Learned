import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const num = document.getElementById("number");
const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (cnt = 0, action) => {
  //reducer : 현재 상태값을 수정하고 반환하는 함수 파라미터는 상태값(초기화 가능)과 action 함수를 갖는다
  //action을 dispatch 할 때마다 최근 상태값(current state)에 의해 countModifier가 호출됨

  switch (action.type) {
    case ADD:
      return cnt + 1;

    case MINUS:
      return cnt - 1;

    default:
      return cnt;
  }

  //return 값은 항상 상태를 return함
};

const onChange = () => {
  num.innerText = countStore.getState();
};

const countStore = createStore(countModifier); //Store에 상태를 저장
countStore.subscribe(onChange); //store의 내용이 바뀔때(상태 변화), 바뀌지 않는(일정한) 함수를 실행줌

plus.addEventListener("click", () => countStore.dispatch({ type: ADD })); //action은 object형태이어야 하고 type을 정의해주어야함
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
