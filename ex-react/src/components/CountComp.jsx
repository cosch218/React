import { Component } from "react";


class CountComp extends Component {
    // constructor를 통해 props 값을 받아오고
    constructor(props) {
        // super를 통해 props 값 전달
        super(props);
        // 사용할 값을 this를 통해 state로 값 저장
        this.state = {
            count : 0
        }
    }
    render() {
        const {count} = this.state;
        return(
            <div>
                <h3>값 : {count}</h3>
                <button
                    onClick={() => { this.setState( { count : count + 10 } ) } }
                >
                    count + 10
                </button>
            </div>
        )
    }
}


export default CountComp;