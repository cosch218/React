import React, { Component } from 'react'


{/** LoginComp 작성
* state : name, login(값 : false)
* <input>에서 name 값 받아와 수정
* <button>에서 login 값 true로 만들고
* login 값이 true일 때 <h1>에 name 값을 화면에 출력
*/}
export class LoginComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            login : false
        }

        this.inputName = this.inputName.bind(this);
        this.clickLogin = this.clickLogin.bind(this);
    }

    inputName = (e) => {
        this.setState({name: e.target.value});
    }

    clickLogin = (e) => {
        this.setState({login: true});

    }

    render() {
        const {name, login} = this.state;
    return (
        <div>
            {/* className = { login ? "on" : "" } 보통 이런 클래스네임을 이용해서 스타일을 추가한다 */}
            <div style={{ display : login ? "none" : "block" }}>
                <p>이름을 입력하세요</p>
                <input 
                    type="text"
                    onChange={ this.inputName }
                />
                <button
                    onClick={ this.clickLogin }
                >
                    login
                </button>
            </div>
            <h1>
                { login ? name+"님 환영합니다" : ""
                /* {}로 한 번 감싸면 자바스크립트라고 인식하기 때문에 { login ? {name} + "님 환영합니다" : "" }일 경우 이 name을 객체로 인식한다.
                문자열로 사용하려면 name이라는 속성명만 가져와서 사용해야 된다   */}
            </h1>
        </div>
    )
    }
}

export default LoginComp