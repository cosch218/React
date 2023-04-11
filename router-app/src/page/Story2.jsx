import React from 'react'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'

export default function Story2() {
    const params = useParams();
    // 전달한 이름이 name이므로 name 값 사용
    const { name } = useParams(); 
    return (
        <div>
            <h1>{params.name}Story</h1>
            <p>현재 화면은 {name}Story 입니다.</p>
            <p>파라미터 값 : {params.name}</p>
            <p>객체로 구조화 할당 : {name}</p>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
        </div>
    )
}
