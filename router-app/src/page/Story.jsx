import React from 'react'
import { Link } from 'react-router-dom'

// URL 파라미터 값 가져오는 함수
// useParams : 파라미터의 줄임말
import { useParams } from 'react-router-dom'

export default function Story() {
    // URL 파라미터로 전달된 값을 useParams()를 이용하여 가져올 수 있다
    // * 주소의 위치에 맞게 전달
    // app.js path='/story/:value'
    // >> 주소로 값을 전달할 때 : /story/apple
    const params = useParams();
    const { value } = useParams(); // >>객체
    return (
        <div>
            <h1>{params.value}Story</h1>
            <p>현재 화면은 {value}Story 입니다.</p>
            <p>파라미터 값 : {params.value}</p>
            <p>객체로 구조화 할당 : {value}</p>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
        </div>
    )
}
