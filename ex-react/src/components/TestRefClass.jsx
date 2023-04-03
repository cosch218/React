import React, { Component } from 'react'

export class TestRefClass extends Component {
    constructor(props) {
        super(props);
        this.inputBackground = null;
        this.setInputBackground = (element) => {
            this.inputBackground = element;
        }
        this.inputBackgroundRef = React.createRef();
    }

    changeBackColor = () => {
        if (this.inputBackgroundRef.current) {
            this.inputBackgroundRef.current.focus();
            this.inputBackgroundRef.current.style.backgroundColor = "red";
        }
    }

    render() {
    return (
        <div>
            <h1>콜백함수와 createRef를 통한 ref 설정 실습</h1>
            <h3>ref 콜백함수 사용</h3>
            <input 
                type="text" 
                ref={this.setInputBackground}
            />
            <button
                onClick={ () => {this.inputBackground.style.backgroundColor = "red"} }
            >
                색을 바꿉니다
            </button>
            <hr />
            <h3>createRef 사용</h3>
            <input 
                type="text"
                ref={this.inputBackgroundRef}
                />
            <button
                onClick={ this.changeBackColor }
            >
                색을 바꿉니다
            </button>
            <hr />
        </div>
        
    )
    }
}

export default TestRefClass