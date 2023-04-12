import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import '../css/headerlink.css'

// 링크들을 모아서 헤더에 고정하기
export default function HeaderLink() {
    const fruit = "banana"
    return (
        <div>
            {/** a 태그 대신 컴포넌트의 주소로 이동 */}
            {/** to의 속성값으로 자바스크립트의 문자열 가능 */}
            <NavLink 
                className={ ({isActive}) => isActive ? "link-style" : "" } 
                to={"/about"}
            >
                About
            </NavLink>
            <NavLink 
                className={ ({isActive}) => isActive ? "link-style" : "" } 
                to={`/story/${fruit}`}
            >
                Story
            </NavLink>
            <NavLink 
                className={ ({isActive}) => isActive ? "link-style" : "" } 
                to={`/articles`}
            >
                Articles
            </NavLink>
            <NavLink 
                className={ ({isActive}) => isActive ? "link-style" : "" } 
                to={`/story2`}
            >
                Story2List
            </NavLink>
            <NavLink 
                end // 주소가 완전히 일치할 때만 class 이름 추가
                className={ ({isActive}) => isActive ? "link-style" : "" } 
                to={`/navigate`}
            >
                Navigate
            </NavLink>
        </div>
    )
}
