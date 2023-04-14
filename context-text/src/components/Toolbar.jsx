import React from 'react'
// context의 값을 사용하고자 하는 공간에 작성한 ThemeContext를 가져옴
import ThemeContext from '../context/ThemeContext'
import ObjectContext from '../context/ObjectContext'
import DataContext from '../context/DataContext'

import { useContext } from 'react'

export default function Toolbar(props) {
  return (
    <div>
      {/** 클래스형 컴포넌트 */}
      <ThemedButton />
      {/** 함수형 컴포넌트 */}
      <MyButton />
    </div>
  )
}

// 클래스형 컴포넌트로 전달
class ThemedButton extends React.Component {
  // 클래스형 컴포넌트에서 context 값을 사용하기 위해 contextType에 import해온 ThemeContext를 가져와서 쓸 수 있다
  // value로 전달한 문자열(light)가 들어가 있다
  static contextType = ThemeContext
  render() {
    // 호출할 때는 this.context를 통해서 호출
    return <button>클래스형에서 가져온 Context : theme={this.context}</button>
  }
}

// 함수형 컴포넌트로 전달
function MyButton () {
  // useContext(ThemeContext)를 통해서 값을 받아올 수 있다
  // usecontext로 받아올 변수의 이름은 자율
  // themeContext에서 작성한 value의 문자열 (light)가 들어가 있다
  // dark라고 뜨는 이유는 ThemeContext로 감싸지 않고 사용했을 때 를 초기화 할 때 넣은 값을 출력하기 때문
  // const ThemeContext = React.createContext("초기값");
  const context = useContext(ThemeContext);

  // 객체로 전달된 값은 객체로 사용
  // {name: "홍길동", login: true}
  const user = useContext(ObjectContext);


  return <div>
    <h3>{context}</h3>
      {
        user && <button>user.name 사용 : {user.name}의 버튼입니다</button>
      }
  </div>
  
}