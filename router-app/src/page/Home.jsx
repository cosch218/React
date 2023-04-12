import { Link } from 'react-router-dom'
// Link를 통해 react-router-dom에서 지정한 주소로 이동
import React from 'react'
import FormComp from '../components/FormComp';


export default function Home() {
    const fruit = "banana"
    const fruits = ["apple", "orange", "peach"]
    
    return (
        <div>
            <h1>Home</h1>
            <p>현재 화면은 Home 입니다.</p>
            
            
            {/** a 태그 대신 컴포넌트의 주소로 이동 */}
            {/** to의 속성값으로 자바스크립트의 문자열 가능 */}
            <Link to={"/about"}>About</Link>
            <Link to={`/story/${fruit}`}>Story</Link>

            <Link to={`/articles`}>Articles</Link>

            <hr />
            {/** 쿼리스트링 값을 About에 전달하는 컴포넌트 */}
            <FormComp />

            {/** map을 이용해서 배열의 값을 Link의 to 주소값으로 사용 */
                fruits.map( (f, i) => (
                    <Link 
                        to={`/story/${f}`}
                        key={i}
                    >
                        [{f}Story]
                    </Link>
                ) )
            }
            <hr />

            {/** fruits의 map을 사용하여 /story2/apple, story2/orange, story2/peach로 이동하는 Link 작성 */}
            <Link to={`/story2/${fruit}`}>Story2</Link>
            { fruits.map( (f, i) => (
                <Link
                    to={`/story2/${f}`}
                    key={i}
                > 
                [{f}Story2] </Link>
            ) )}
        </div>
    )
}
