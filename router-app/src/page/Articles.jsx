import React from 'react'

// Link를 통해서 react-router-dom에서 지정한 주소로 이동
// Outlet을 통해서 중첩라우터를 사용
import { Link, Outlet } from 'react-router-dom';

// 게시글 목록을 보여 주는 페이지 컴포넌트
export default function Articles() {
    // 배열을 사용하여 목록 작성
    const list = [1, 2, 3, 4, 5];

    return (
        <div>
            <h3>Article 목록입니다.</h3>
            {/** 중첩 라우터를 사용한 Route에 들어갔을 때 연결된 페이지 컴포넌트가 보인다 */}
            <Outlet />
            {
                list.map((id) => (
                    <Link to={`/articles/${id}`}>| 게시글 {id} |</Link>
                ))
            }
        </div>
    )
}