'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
//  웹에서 " Like " 버튼을 누르면 실행됨

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
//  html에 존재하는 "like_button_container" div에 들어갈 곳에
//  LikeButton 이라는 컴포넌트를 랜더링하는 코드
