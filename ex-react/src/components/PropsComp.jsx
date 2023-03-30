// rce 를 입력하고 엔터치면 아래의 형식을 자동으로 작성해줌
import { Component } from "react";

class PropsComp extends Component {
    render() {
        const {color, children} = this.props;
        return(
            <div style={{color:color}}>{children}</div>
        );
    };
};

export default PropsComp;