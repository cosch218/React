const ArrowComponent = (props) => {
    // props를 분해해서 사용하고 싶다면 리턴 위에 변수를 넣어서 사용 가능
    const {text,children} = props;
    return (
        <div>
            <h1>함수형 컴포넌트</h1>
            <p>하나의 부모 태그로 전달</p>
            {/** App.js 의 <ArrowComponent /> 에서 text와 children 속성 확인 가능 */}
            <p>text속성으로 가져온 props 값 : {props.text}, {text}</p>
            <p>{props.children}, {children}</p>
        </div>
    )
}

export default ArrowComponent;