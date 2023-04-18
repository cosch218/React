import React from 'react'
import { useEffect, useContext } from 'react';


// 주소 값으로 보낸 id를 가져오기 위해 useParams 사용
// boardData의 값이 undefined일 경우 다시 BoardList 컴포넌트로 이동하기 위해 useNavigate 사용
import { useParams, useNavigate } from 'react-router-dom'


// dummy.json의 내용이 필요함
import data from '../data/dummy.json'


// json 내용 대신에 DataContext에 있는 boardlist 들고와서 화면에 출력하기
import DataContext from '../context/DataContext';


export default function Board() {
  // Context의 값을 가져옴 
  // 수정, 삭제를 위해 action 속성도 가져옴
  const { state, action } = useContext(DataContext);
  const {boardlist} = state;


  // 주소 값으로 보낸 id를 가져오기 위해 useParams 사용
  const {id} = useParams();


  // 배열의 함수인 find를 이용하여 배열 안에서 함수의 조건이 참인 단 하나의 값을 가져온다
  const boardData = boardlist.find( (d)=>(d.id == id) )


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


  // 게시물 삭제 메소드
  const deleteBoard = () => {
    // 1. "정말로 삭제하시겠습니까?" 알림창을 띄워 확인 누르면 삭제되고 취소 누르면 실행 취소
    if(window.confirm("정말로 삭제하시겠습니까?")){
      // 2. 현재 id를 들고 온다 >> useParams를 통해 가져온 id를 들고 온다
      // 3. id와 동일한 객체를 제외한 새로운 배열을 만든다 >> filter() 사용
        // 일치 비교연산자 사용할 때는 자료형까지 동일해야 한다
      const newBoardlist = boardlist.filter( (board) => (board.id !== Number(id)) )
      // 4. 새로운 배열을 set메소드를 통해 넣어준다
      action.setBoardlist(newBoardlist);
      // 5. boradlist로 이동
      navigate('/boardlist');
    }
  }



  return (
    <div>
      { /** useEffect를 사용하기 위한 삼항연산자 
       * 화면이 먼저 렌더되고 useEffect가 실행되기 때문에 화면상에서 나타나는 오류를 제거하고 useEffect로 이동
       * boardData = undefined == false
       * boardDate = 값있음 == true
       * >> 자동 형변환
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

      {/** writer의 값이 같을 때만 아래 버튼들 보이게 만들기 >> 삼항연산자 사용
       * boarddata의 값이 있을 때 비교!
       * >> 먼저 boardData가 있는지 확인한 후에 비교하고 출력
       * 연달아서 비교 확인하기 위해 && 연산자 사용
       * 첫번째 확인할 내용 : boardData가 있는지? >> 값이 있으면 true, 없으면
       * 두번째 확인할 내용 : state.user.writer와 boardData.writer 비교
      */}
      {
        boardData && (state.user.writer === boardData.writer &&
          <div>
            <button
            // navigate의 state를 이용하여 boardData객체를 전달
              onClick={()=>{navigate('/board-edit-form', {state: boardData})}}
            >
              수정
            </button>
            <button
              onClick={deleteBoard}
            >
              삭제
            </button>
          </div>
          )
      }
    </div>
  )
}
