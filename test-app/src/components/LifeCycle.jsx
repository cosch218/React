import React, { Component } from "react";

// 클래스형 컴포넌트에서 라이프 사이클 작성
export class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      date: new Date(),
    };
    // 속성 또는 필드라고 이야기한다
    // 현재 컴포넌트에서 전역으로 사용하고 싶을 때
    this.timerID = "";
  }

  // 라이프 사이클 메소드 - 마운트 되었을 때 : 시작했을 때 실행
  // 컴포넌트가 보이는 한 번만 실행
  componentDidMount() {
    console.log("마운트가 되었습니다");
    // 처음 한 번 실행하는 내용 작성
    // 또는 외부(공공데이터)에서 값을 한 번만 가져올 때나 가장 처음 실행할 내용이 있을 때 활용 가능
    // setInterval( () => {this.tick}, 1000 );
    setInterval(this.tick, 1000);
  }

  // 라이프 사이클 메소드 - 업데이트가 되었을 때 : 화면이 바뀌었을 때
  // 현재 컴포넌트가 업데이트 될 때마다 실행
  // props의 값이 바뀔 때, setState를 통해서 값이 바뀔 때 실행
  componentDidUpdate() {
    // 모든 업데이트마다 실행할 내용 작성 가능
    console.log("업데이트가 되었습니다");
  }

  componentWillUnmount() {
    // React.StrictMode를 사용할 때 마운트하고 언마운트 한 후 다시 마운트를 진행하고 작성된 내용을 실행
    // 컴포넌트가 삭제/제거될 때 출력
    console.log("컴포넌트가 언마운트 되었습니다");
  }

  // 화면에 시간 출력 메소드
  printClock = (time) => {
    // 가능하면 this.setState 사용 X
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  // 시간 값을 다시 할당하는 메소드
  tick = () => {
    // setState를 사용할 때마다 업데이트 발생
    this.setState({ date: new Date() });
  };

  render() {
    return (
      <div>
        <h3>라이프 사이클</h3>
        <h3>{this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +1
        </button>
        <hr />
        <h3>시계 : {this.printClock(this.state.date)}</h3>
        <hr />
      </div>
    );
  }
}

export default LifeCycle;
