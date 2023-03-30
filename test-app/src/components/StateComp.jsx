import { Component } from 'react';

class StateComp extends Component {
    // state 컴포넌트 안에서 사용되는 변수
    constructor(props) {
        // constructor를 사용하면 props를 따로 연결
        super(props);
        // this.state 안에 객체 형태로 값을 작성할 수 있다
        this.state = {
            number : 0,
            name : "홍길동",
        }
    }
    // 화면에 출력되는 HTML 공간
    // 가상돔을 화면에 출력하기 위해 render()를 호출
    // 호출 시 render 안에서 사용한 변수는 초기화 된다
    // 초기화가 되지 않으려면 전역변수 또는 this.state를 사용해야한다
    // 업데이트(초기화)마다 화면에 표시되는 값 : state, props
    render() {
        // this.state의 값을 비구조화 할당을 통해 사용
        const {number, name} = this.state;
        let count = 0;
        // state를 return의 HTML 안에 직접 불러와서 사용
        return(
            <div>
                <h2>{name}</h2>
                <h3>state의 값 {number}, 변수 값 {count}</h3>
                <h3>{this.state.number}</h3>
                <button // 리액트에서는 화살표 함수 사용
                    onClick={ () => { this.setState( { number : number + 1 } ) } }
                >
                    number+1
                </button>
                <button
                    onClick={ () => { 
                        // count++의 값이 콘솔창에서는 증가하는 것이 보이지만 화면에 출력되지는 않는다
                        // 이 버튼을 누르다가 다른 버튼을 누르면 count의 값이 0으로 초기화된다
                        // => 초기화가 되지 않으려면 전역변수 또는 this.state를 사용해야한다
                        count++; 
                        console.log(count);
                    }}
                >
                    count+1
                </button>

                {/* 버튼을 눌렀을 때 number 값이 1씩 감소 */}
                <button
                    onClick={ () => { 
                        // 하나의 이벤트에서 setState를 여러 번 부를 경우 원하지 않는 값으로 나올 수 있다
                        // -1을 두 번 해서 -2가 되길 바랬지만 -1이 한 번만 됨
                        this.setState( { number : number - 1 } );
                        this.setState( { number : number - 1 } );
                        // 이전에 있던 state 값을 prevState로 들고 와서 수정
                        // 값이 바뀐 후에 들고오기에 동기적으로 값이 수정
                        // () => () 형태로 사용하는 이유 : return 값으로 객체를 전달하기 위해
                        // (prevState) => ({state속성 : 값})
                        this.setState( (prevState) => ({ number:prevState.number -1 }) );
                    } }
                >
                    number-1
                </button>

                {/* 버튼을 눌렀을 때 number 값이 0이 됨 */}
                <button
                    onClick={ () => { this.setState( { number : 0 } ) } }
                >
                    number 초기화
                </button>
            </div>
        );
    };
};

export default StateComp;