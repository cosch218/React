import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import DataContext from '../context/DataContext'

export default function MyPage() {
  const { state, action } = useContext(DataContext);

  const [show, setShow] = useState(false);

  // DOM에 접근하기 위해 리액트에서 id 대신 사용하는 useRef
  // id 대신에 useRef를 사용하는 이유 : id 값으로 접근하면 return의 화면이 다 호출된 뒤에 접근
  // >> useEffect를 이용해서 마운트 후에 id 접근
  // useRef를 사용하면 바로 작성을 해도 마운트 후에 값을 가져옴
  // React는 가상 돔이기 때문에 render 이후에 return의 태그들이 화면에 출력
  const prePic = useRef();

  // 좋아요 삭제 메소드
  // 1. 삭제할 id를 찾는다
  const deleteLike = (id) => {
    // 2. 삭제할 id를 제외하고 새로운 배열을 만든다
    const newLikelist = state.likelist.filter((like)=>(like.boardId !== id))
    // 3. 새로운 배열을 set- 메소드를 이용하여 넣는더
    action.setLikelist(newLikelist);
  }

  // 프로필 이미지 변경 메소드 >> 모달창 사용하는 방식
  const changeProfile = () => {
    setShow(true);
    // 1. 사진을 선택하는 창 출력 >> input type="file"
    // 2. 그 사진을 선택하면 프로필 사진이 바뀜 >> set메소드를 이용하여 user.profile 값 수정
  }

  // input:file 안에 있는 file 값을 가져오는 메소드
  // 1. input 태그 안에 있는 값을 가져오기 위해 e(이벤트 객체) 사용
  const onLoadFile = (e) => {
    console.dir(e.target)
    // >> 이벤트 객체의 파일 배열 중 0번째 인덱스의 name에 파일명 저장되어 있음
    // 2. URL.createObjectURL()을 이용하여 파일의 값을 변형해서 사용
    // >> 나중에 DB에서도 저장해서 사용 가능
    // 3. user.profile에 값을 넣어서 사용

    /** URL.createObjectURL에서 오류 발생 
     * typeError : 잘못된 값이 들어갔을 때 생기는 오류
     * >> 확인하니 값을 선택하지 않았을 때 undefined가 들어감
     * 
     * 해결방법 생각하기
     * 1) undefined 값이 들어왔을 때 다른 값으로 수정해서 넣기
     * 2) undefined가 들어왔을 때 메소드(또는 함수) 실행 중지
     *    메소드 중지하는 방법 : return을 실행하면 메소드가 종료됨
    */
    if (e.target.files[0] === undefined) {
      // return을 사용하여 메소드 종료
      return -1;
    }
    action.setUser(
      {
        ...state.user,
        profile : URL.createObjectURL(e.target.files[0])
      }
    )
    // useRef로 들고온 미리보기 div를 들고 와서 style의 backgroundImage 바꿔서 출력
    console.log(prePic);
    prePic.current.style.backgroundSize = "cover";
    prePic.current.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`
  }


  return (
    <div>
      <h3>MyPage</h3>
      <div>
        <img 
          src={state.user.profile} 
          alt="프로필 사진" 
          width={200}
          style={{borderRadius: "50%"}}
        />
        <button onClick={changeProfile}>
          모달창으로 프로필 수정
        </button>
        {/** onChange를 이용하여 들고 오는 사진이 바뀔 때마다 실행
         * 실행하면서 input 그 값을 가져오기 위함
         * input type="text"에서 값을 들고 온 것과 유사
         */}
        <input type="file" onChange={onLoadFile}/>
      </div>
      <h5>{state.user.writer}님의 페이지</h5>
      <hr />
      <h5>좋아요 리스트</h5>
      <ul>
        <li>게시글 제목</li>
        {
          state.likelist.map((like)=>(
            <li key={like.boardId}>
              <Link to={`/boardlist/${like.boardId}`}>{like.title}</Link>
              <button onClick={ () => {deleteLike(like.boardId)} }>삭제</button>
            </li> 
            
          ))
        }
      </ul>

      {/** 모달창을 사용하기 위한 공간 
       * 모달창의 형태 : 전체화면에 출력되는 창
       * 디자인을 먼저 넣어주는 것 : 전체화면에 출력되기 때문
      */}
      <div className='modal-background'
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.3)",
          position: "absolute",
          top: "0",
          // 모달창의 화면을 display의 값에 따라 수정
          // >> useState로 작성해서 화면에 출력
          // show를 이용해서 T/F
          display: show ? "block" : "none"
        }}
      >
        <div className='modal'
          style={{
            position: "relative",
            top: "300px",
            width:"50%",
            height: "300px",
            backgroundColor: "white",
            margin: "auto",
            padding: "50px",
            borderRadius: "10px"
          }}
        >
          {/** 미리보기 이미지 >> img 태그를 통해 가져와도 된다
           * div의 backgroundImage를 통해 가져오기
           * 
           * 이미지 값을 넣어주기 위해서 div의 ref를 지정하여 DOM으로 들고와서 지정
           * 
           * 이미지 값을 useState로 저장해서 값이 있을 때 background에 출력하는 방법도 있다 (modal 참고)
           */}
          <div ref={prePic}
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "lightgray"
            }}
          ></div>
          <input type="file" onChange={onLoadFile}/>
          <button onClick={()=>{setShow(false)}}>
            닫기
          </button>
        </div>
      </div>
    </div>
  )
}
