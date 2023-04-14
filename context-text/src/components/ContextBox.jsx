import React from 'react'

// Context의 값을 가져오기 위해서 Context 호출
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'

export default function ContextBox() {
  return (
    <div>
      <ContextText></ContextText>
    </div>
  )
}

function ContextText() {
  // useContext() ThemeContext를 가져와서 출력하기
  const theme = useContext(ThemeContext);
  return <p>{theme}</p>
}