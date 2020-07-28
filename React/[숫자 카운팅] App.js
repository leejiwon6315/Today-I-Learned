import React from 'react';

class App extends React.Component{
 
    state = {
      count: 0
    };

// setState 를 사용하여 state 내의 데이터를 불러와 재설정함.
// state의 요소의 값을 직접 바꾸는 것이 아닌 current를 사용하여 setState로 가져온 값을 App에서 변경이 가능하게 함.

    plus = () => {
      this.setState(current => ({ count : current.count +1 }));
    };
    
    minus = () => {
      this.setState(current => ({ count : current.count -1 }));
    };
    
    render(){
      return(
        <div>
          <h1>The Number Count {this.state.count}</h1>
          <button onClick ={ this.plus }>Plus </button>
          <button onClick ={ this.minus }>Minus</button>
        </div>
      );
    }
}

export default App;
