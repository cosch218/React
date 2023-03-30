import { Component } from "react";
import { PropTypes } from "prop-types";

class OtherComp extends Component {
    render() {
        const {name} = this.props;
        return( // name에 기본값이 없다면 삼항연산자를 사용할 수도 있다
            <div>{name ? name : "이름"}</div>
        )
    }
}

// props가 전달되지 않았을 때 undefined 대신 기본으로 들어갈 값
OtherComp.defaultProps = {
    name : "기본이름"
}
// prop-types 라이브러리 설치 후 사용
// 다른 자료형이 들어가면 콘솔에 오류로 알려줌
OtherComp.propTypes = {
    name : PropTypes.string
}

export default OtherComp;