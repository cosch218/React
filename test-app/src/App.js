import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import LoginComp from "./components/LoginComp";
// 동일한 컴포넌트 파일에서 두개 이상 내보냈을 때, 그 각각의 값은 {}를 통해 가져올 수 있다
import { LoginText } from "./components/LoginComp";
import TextComp from "./components/TextComp";
import OtherComp from "./components/OtherComp";
import StateComp from "./components/StateComp";
import EventComp from "./components/EventComp";
import RefDomEvent from "./components/RefDomEvent";
import MapComp from "./components/MapComp";
import LifeCycle from "./components/LifeCycle";
import ArrowComponent from "./components/ArrowComponent";
import ArrowTest from "./components/ArrowTest";
import ArrowState from "./components/ArrowState";
import EffectHook from "./components/EffectHook";

/* 리액트에서 오류가 뜨는 이유
 * 1. 존재하지 않는 컴포넌트 출력 => 가능하면 컴포넌트를 만든 이후에는 이름을 바꾸지 말 것
 * 2. {}를 닫지 않았을 경우 => 오류 코드를 보면서 각 라인에 있는 코드들을 주석 또는 삭제 처리하면서 확인 */
function App() {
  return (
    // 작성한 컴포넌트는 태그처럼 사용할 수 있다 => ex : <MyComponent />
    <div className="App">
      <h1>리액트 프로젝트를 수정해서 사용합니다</h1>
      <MyComponent />
      {/* 만든 컴포넌트에 속성=값을 통해 props 값을 전달 */}
      <LoginComp login={true} name="홍길동" />
      {/* 만든 컴포넌트 사이에 글자를 적어서 전달 */}
      {/* 이 글자는 props의 children으로 전달된다 */}
      {/* props의 값을 전달하지 않으면 props 속성에 대한 값이 undefined로 출력된다 */}
      {/* undefined는 형 변환을 하게 되면 false 값으로 출력되기 때문에 login = false 값이 화면에 출력된다 */}
      <LoginComp>내용 전달</LoginComp>
      {/* 새로운 TextComp를 만들어서 children에 들어간 값을 h1 태그에 넣어서 출력,
       * name값을 받아와서 p 태그에 name님 출력  */}
      <TextComp name="홍길동">반갑습니다</TextComp>
      <TextComp name="성춘향">환영합니다</TextComp>
      <OtherComp name={123} />
      {/* State를 가진 컴포넌트 */}
      <StateComp />
      <StateComp />
      {/* 이벤트 */}
      <EventComp />
      <RefDomEvent />
      <MapComp />
      <LifeCycle />
      {/** 함수형 컴포넌트 */}
      <ArrowComponent text="문자열 전달" />
      <ArrowComponent text="문자열 전달">children 전달</ArrowComponent>
      {/** 함수형 컴포넌트 실습
       * 아래 컴포넌트를 함수형으로 만들고 출력하기
       * name="green" : h3 태그로 출력
       * check={true} : check 값이 true일 때 name 출력
       * children="환영합니다" : p 태그로 출력
       */}
      <ArrowTest name="green">환영합니다</ArrowTest>
      <ArrowState />
      {/** 함수형 컴포넌트의 hook 사용 */}
      <EffectHook />
    </div>
  );
}

// import를 이용하여 다른 파일에서 값을 가져올 때 export를 이용해서 내보내는 값
export default App;
