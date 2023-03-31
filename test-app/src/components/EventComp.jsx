import React, { Component } from 'react'

export class EventComp extends Component {
    // state 작성
    constructor(props) {
        super(props);
        this.state = {
            name: "홍길동",
            address: "부산",
            toggle: true,
            color: "",
            input: "",
            inputNickname: "",
            inputBook : ""
        }

        // 메소드에 .bind로 묶어서 this 전달
        // = 은 할당 연산자
        // 오른쪽에 있는 this.printEvent는 작성한 메소드이다. 이 메소드에 .bind(this)로 연결하는 것
        // 왼쪽에 있는 this.printEvent는 이름
        // 참고) let num = 0; num = num + 1;  >> num의 결과 : 1
        this.printEvent = this.printEvent.bind(this);
        this.printAddress = this.printAddress.bind(this);
        this.setToggle = this.setToggle.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.arrowPrint = this.arrowPrint.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    // 메소드로 작성한 함수 (이벤트 안에서 작성한 함수 그대로 들고 와서 사용할 수 있다)
    // render에서 사용한 값은 쓸 수 없다 (ex : name)
    // => this.state.name 을 통해 접근할 수 있다
    // 메소드에 바로 bind를 통해서 this를 묶어줄 수 없다 => .bind(this) 삭제
    // 메소드만 만들어서 바로 사용하면 this를 찾지 못해서 오류가 난다
    // 이것을 해겨하기 위해 constructor에서 bind로 묶어서 사용
    printEvent() {
        console.log("이벤트 출력");
        // name 값을 render 의 this.state 에서 값을 가져왔기 때문에 this를 연결하지 않아도 사용 가능
        console.log(this.state.name);
    }

    printAddress(e) {
        console.log(e.type, "이벤트 완료");
        console.log(this.state.address);
    }

    // this.setState 사용해서 수정
    setToggle() {
        this.setState({toggle: !this.state.toggle})
    }

    // this.setState 통해서 컬러값 수정
    changeColor(e) {
        // e: 이벤트 객체를 들고와서 e.type을 통해 setState에 값 다르게 넣을 수 있다
        // e.type을 통해 setState값 수정 가능
        // onMouseLeave에 changeColor를 추가하여 onMouseLeave 이벤트가 발생했을 때는 ""으로 color 변경
        if (e.type === "mouseenter") {
            this.setState({color: "red"});
        } else if (e.type === "mouseleave") {
            this.setState({color: "black"});
        };
    }

    // 화살표 함수를 가지는 메소드
    // 메소드 이름에 화살표 함수 작성
    arrowPrint = () => {
        console.log("이벤트 실행");
        console.log(this.state.name);
    }

    changeName = () => {
        this.setState({name: "성춘향"});
    }

    
    // onChange 공용메소드
    onInputChange = (e) => {
        // inputNickname을 그대로 사용하면 inputNickname에만 값이 들어간다
        // => {[e.target.name] : name 속성값} 을 가져와서 사용
        // .으로 이어지는 선택자(?) 변수 값을 사용하려면 []로 묶어서 사용 가능
        this.setState({ [e.target.name] : e.target.value });
    }

    render() { 
        // render 안에서 this = EventComp;
        // this.state 는 constructor 의 속성값
        const {name} = this.state;
    return (
        // 이벤트를 위한 버튼 작성
        <div>
            <h3>버튼을 클릭했을 때 console.log("이벤트 실행")</h3>
            <button
                // 실행할 함수 내용이 짧을 때 화살표 함수를 이용하여 바로 작성
                // 이벤트 객체 사용 가능
                // this를 사용했을 때 자기자신 클래스 컴포넌트가 호출됨 => 클래스 컴포넌트에서 사용하는 props 값과 state 값 호출 가능
                onClick={ (e) => {console.log(e, this)} }
            >
                화살표함수를 사용해서 이벤트 실행
            </button>
            <button
                // 익명함수를 사용했을 때 이벤트 객체 사용 가능
                // 익명함수에서 this를 사용하면 연결된 객체가 없으므로 undefined 값 출력됨
                // HTML 파일에서 js 익명함수를 들고오면 window 객체로 들고 오지만,
                // React 파일에서 익명함수를 들고오면 this의 값이 undefined 이다.
                // React 에서익명함수를 사용하려면 함수의 this값을 연결해줘야 한다.
                // this 값을 연결하기 위해 .bind() 사용
                // return 안에서 .bind(this)로 불러오는 this = EventComp
                onClick={ function(e) {console.log(e, this)}.bind(this)}
            >
                익명함수를 사용해서 이벤트 실행
            </button>

            <h3>이벤트 함수(메소드)를 따로 작성하는 방법</h3>
            <p>버튼을 눌렀을 때 console.log(이벤트 출력), this.state.name "홍길동" 출력</p>
            <button
                onClick={function() {
                    console.log("이벤트 출력");
                    // name 값을 render 의 this.state 에서 값을 가져왔기 때문에 this를 연결하지 않아도 사용 가능
                    console.log(name);
                }.bind(this)}
            >
                메소드를 사용한 이벤트
            </button>
            <button
                // 작성한 메소드를 들고 올 때 this.를 통해 가져옴
                onClick={ this.printEvent }
            >
                메소드를 사용한 이벤트
            </button>

            {/* 이벤트 : 메소드 만들기 실습 */}
            <h3> 이벤트 : 메소드 만들기 실습</h3>
            <p>버튼을 누르면 state의 address 값으로 "부산"을 출력하고, console.log를 이용하여 "이벤트 완료" 출력</p>
            <button
                onClick={ this.printAddress }
            >
                이벤트
            </button>

            {/* this.setState를 사용하는 메소드 */}
            <h3>this.setState를 사용하는 메소드</h3>
            <button
                onClick={ function() {
                    this.setState({toggle: !this.state.toggle})
                }.bind(this)
            }
            >
                {this.state.toggle ? "on" : "off"}
            </button>
            <button
                onClick={ this.setToggle }
            >
                {this.state.toggle ? "on" : "off"}
            </button>

            {/* 실습 */}
            <p
                onMouseEnter={ this.changeColor }
                onMouseLeave={ this.changeColor }
                style = {{color : this.state.color}}
            >
                p 태그에 마우스를 올리면 글자를 빨간색으로 바꾸기
            </p>

            {/* 화살표 함수로 메소드 만들어서 사용하기 */}
            <h3>화살표 함수로 메소드 만들어서 사용하기</h3>
            <button
                onClick={ () => {
                    console.log("이벤트 실행");
                    console.log(this.state.name);
                }}
            >
                화살표 함수로 메소드를 만들어 사용한 이벤트
            </button>
            <button
                onClick={ this.arrowPrint }
            >
                화살표 함수로 메소드를 만들어 사용한 이벤트
            </button>

            {/* 화살표 함수를 이용해서 버튼을 클릭했을 때 name 값을 성춘향으로 바꾸기 */}
            <h3>화살표 함수로 메소드 만들기 실습</h3>
            <button
                onClick={ this.changeName }
            >
                {name}
            </button>

            {/* form - input 태그의 값 사용하기 */}
            <h3>input 태그에서 값을 가져올 state를 onChange를 사용해서 수정</h3>
            <p>{this.state.input}</p>
            <input 
                type="text"
                onChange={ (e) => {
                    console.log(e.target.value)
                    this.setState({input : e.target.value})
                    // 아래의 console.log가 위의 console.log(e.target.value)보다 한 발짝 늦게 출력됨 
                    // setState는 비동기로 움직임 => 바로 state에 접근해서 값을 출력하면 이전 값이 나온다
                    console.log("input값 : ", this.state.input)
                }}
            />

            {/* change 공용함수 만들기 : 사용하지 않아도 상관 없다 */}
            <h3>input 2개에서 값 받아오기</h3>
            <p>inputNickname의 값 : { this.state.inputNickname }</p>
            <input 
                name="inputNickname"
                type="text" 
                onChange={ this.onInputChange }
            />
            <p>inputBook의 값 : {this.state.inputBook}</p>
            <input
                name="inputBook"
                type="text"
                onChange={ this.onInputChange }
            />
        </div>
    )
    }
}

export default EventComp