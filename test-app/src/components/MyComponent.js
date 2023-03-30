// 파일의 이름과 클래스 이름을 동일하게 사용

/* 클래스형 컴포넌트 */
// react의 component를 상속받아와서 사용하는데 이처럼 상속받아와서 사용하게 되면 component의 내용을 사용 가능

// react에서 Component를 받아와서 상속
import {Component} from 'react';

class MyComponent extends Component {
    // 클래스형 컴포넌트의 특징 : render 함수에서 return을 통해 HTML을 내보내줌
    render() {
        // 필요한 변수 작성
        const name = "React";
        return (
            // 필요한 HTML 작성
            <div>
                <h1>클래스형 컴포넌트</h1>
                <p>{name} 공부를 하고 있습니다</p>
            </div>
        )
    }
}

// 내보내기
export default MyComponent;