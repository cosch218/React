import React, { Component } from 'react'
// 컴포넌트에서 원하는 다른 컴포넌트를 들고와서 사용 가능
import EventComp from './EventComp';

export class RefDomEvent extends Component {
    constructor(props) {
        super(props);
        // 1. input 태그가 들어갈 공간을 변수로 만들어주기
        this.textInput = null;
        // 2. ref 콜백함수를 이용해서 DOM에 접근
        // 1) ref에 들어갈 함수 작성 (화살표 함수)
        this.setTextInputRef = (element) => {
            // 2) element를 통해서 ref를 통해 DOM 가져옴
            // 3) 저장해서 쓰기 위해 만든 공간에 할당
            this.textInput = element;
        }

        // 리액트 16.3 버전 이후 사용 가능
        this.myRef = React.createRef();

        /** 직접 작성한 다른 컴포넌트도 ref를 통해 들고올 수 있다 */
        this.myComp = React.createRef();
    }

    // this.textInput에 접근하는 메소드
    textInputEvent = () => {
        if (this.textInput) {
        // ref를 통해 DOM을 가져와서 그 안에 있는 내용을 JS에서 id를 통해 가져온 것처럼 접근할 수 있다
        this.textInput.focus();
        }
    }

    // myRef 확인
    myRefEvent = () => {
        if(this.myRef.current) {
            this.myRef.current.focus();
        }
    }
    

    render() {
    return (
        <div>
            <h1>Ref를 통해 input 가져오기</h1>
            <input 
                type="text" 
                // 3. ref 속성을 이용해서 setTextInputRef를 호출
                ref= {this.setTextInputRef}
                />

            {/** input 태그가 들고 와졌는지 확인하기 위해 button 태그를 작성 */}
            <button onClick={() => {console.dir(this.textInput)}}>console에 textInput 출력</button>

            <button
                onClick={ this.textInputEvent }
            >
                버튼을 누르면 input에 포커스
            </button>

            <input 
                type="text" 
                ref= {this.myRef}
            />
            <button
                onClick={ () => {console.log(this.myRef.current)}}
            >
                myRef 값 확인
            </button>
            <button
                onClick={ this.myRefEvent }
            >
                myRef에 포커스
            </button>

            <hr />
            <h1>다른 컴포넌트를 불러와서 ref를 통해 가져올 수 있다</h1>
            <EventComp ref={this.myComp}/>
            <hr />
            <button
                // 컴포넌트를 ref로 들고 오면 그 컴포넌트에 있는 메소드, props, state에 다 접근할 수 있다.
                // state와 props의 경우 그 값을 가져올 수 있고 메소드의 경우 해당 메소드를 실행할 수 있다.
                // => 부모 컴포넌트에서 자식 컴포넌트의 값을 가져오거나 메소드 사용 가능
                onClick={ () => {console.dir(this.myComp.current)} }
            >버튼을 누르면 ref로 들고온 myComp의 값 확인</button>
            <hr />

            <h3>리액트에서 이벤트 사용할 때 화살표함수 또는 익명함수에 넣어서 사용하는 이유</h3>
            <p>자바스크립트에서 addEventListener를 사용할 때와 동일한 이유</p>
            <p>addEventListener를 사용할 때에도 함수 이름을 넣어 전달해서 실행</p>
            <p>그래서 함수이름() (중괄호)실행한 결과(중괄호)를 넣어주면, 이벤트가 실행할 때마다 되는 것이 아니라 화면이 렌더할 때 실행된다</p>
            <hr />
        </div>
    )
    }
}

export default RefDomEvent