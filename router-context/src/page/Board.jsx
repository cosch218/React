import React from 'react'
import { useEffect } from 'react';

// 주소 값으로 보낸 id를 가져오기 위해 useParams 사용
// boardData의 값이 undefined일 경우 다시 BoardList 컴포넌트로 이동하기 위해 useNavigate 사용
import { useParams, useNavigate } from 'react-router-dom'

// dummy.json의 내용이 필요함
import data from '../data/dummy.json'

export default function Board() {
  // 주소 값으로 보낸 id를 가져오기 위해 useParams 사용
  const {id} = useParams();


  // 배열의 함수인 find를 이용하여 배열 안에서 함수의 조건이 참인 단 하나의 값을 가져온다
  const boardData = data.find( (d)=>(d.id == id) )
  // find로 값을 찾지 못할 경우 undefined 출력 >> 오류!
  // >> useEffect를 사용해서 boardData의 값이 undefined면 Error 컴포넌트 또는 BoardList 컴포넌트로 이동하게 할 수 있다
  // useNavigate()를 사용하면 함수를 이용해서 화면이동가능
  const navigate = useNavigate();
  // useEffect의 두번째 인자값([])이 빈 배열이라면 컴포넌트 생성 시 실행
  useEffect(()=>{
    if (boardData == undefined) {
      navigate('/boardlist');
    }
  },[])


  return (
    <div>
      { /** useEffect를 사용하기 위한 삼항연산자 
       * 화면이 먼저 렌더되고 useEffect가 실행되기 때문에 화면상에서 나타나는 오류를 제거하고 useEffect로 이동
      */
        boardData && (
          <div>
            <h3>제목 : {boardData.title}</h3>
            <p>작성자 : {boardData.writer}</p>
            <p>작성 날짜 : {boardData.date}</p>
            <p>내용 : {boardData.content}</p>
          </div>
        )
      }
    </div>
  )
}
