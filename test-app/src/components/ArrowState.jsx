// 리액트 16.8버전 이후로 함수형에서 state 사용 가능
import {useState} from "react";

// css 파일 들고 오기
import "./arrowState.css";

// 화면 업데이트에 상관없이 사용하는 변수
    // 변수를 언제 가지고 오느냐에 따라 초기화 된다
    // >> 클래스형에서는 render()안에 값이 계속 초기화
    // >> 함수형에서는 함수 안에 있는 내용이 계속 초기화 
// 현재 컴포넌트에서 전역변수로 쓸 변수
let globalId = 4;

// 함수형 컴포넌트의 특징
// 1) this를 사용하지 않는다
// 2) 안에 값을 넣어줄 때 변수로 할당하기 때문에 const나 let을 사용한다
const ArrowState = (props) => {
    // useState는 항상 함수(컴포넌트) 안에 작성
    const [message, setMessage] = useState(
        {
            time: "10:53",
            text: "메세지 입니다"
        }
    );

    // useState는 여러번 사용할 수 있다
    const [number, setNumber] = useState(0);
    const [array, setArray] = useState([1,2,3,4]);

    // map을 이용하여 id값과 name 값을 화면에 출력
    const [students, setStudents] = useState(
        [
            {id: 1, name: "홍길동", checked:true},
            {id: 2, name: "성춘향", checked:false},
            {id: 3, name: "흥부", checked:false},
        ]
    )

    // 학생 이름을 받아올 공간
    const [inputName, setInputName] = useState("");

    // 메소드 작성
    const inputChange = (e) => {setInputName(e.target.value)} 
    const addStudent = () => {
        // 1) 값을 받아와서 새로운 배열로 만들기
        // 2) 새로운 배열을 student에 할당
        const newStudents = students.concat(
            {
                id: globalId++,
                name: inputName
            }
        );
        setStudents(newStudents);
        setInputName("");
    }
    // id 값을 전달하여 메소드 안에서 사용
    const deleteStudent =  (id) => {
        // input:checkbox에 checked 값이 true일 때 button을 누르면 삭제
        // filter()를 사용하여 클릭한 id 값을 제외하고 새로운 배열 작성
        const newStudents = students.filter(
            (s) => s.id !== id
        )
        setStudents(newStudents);
    } 

    return (
        <div>
            <p>{number}, {message.text}</p>
            <button
                // useState로 작성한 함수를 통해서 값을 넣어줄 때 그 값의 자료형이 같지 않아도 넣어준다
                // >> 작성할 때 그 값의 자료형을 확인하고 동일한 형태로 할당
                // ...(스프레드 연산자) : 객체나 배열의 값(요소)를 꺼내서 사용하기 때문에 값(요소) 중 일부분만 수정할 때 사용
                // 객체에서 동일한 속성 이름을 사용하면 마지막에 작성한 값을 사용
                onClick={ () => {setMessage(
                    {
                        ...message,
                        text:"수정된 메세지",
                        time:"11:02"
                    }
                )} }
            >
                글자값 수정
            </button>
            <h3>usestate()와 map()을 이용한 배열 화면에 출력</h3>
            {
                array.map( (num, i) => <li key={i}>{num}</li> )
            }
            <h3>usestate()와 map()을 이용한 학생 명단 출력</h3>
            <h4>학생 추가</h4>
            <input 
                type="text" 
                onChange={inputChange}
                value={inputName}
            />
            <button
                onClick={addStudent}
            >
                추가
            </button>
            <ul>
                {
                    students.map( (student) => 
                        <li 
                            key={student.id}
                            className={student.checked ? "on" : ""}
                        >
                            <input 
                                type="checkbox" 
                                checked={student.checked}
                                readOnly
                                onClick={()=>{
                                    // 체크박스를 클릭하면, 클릭한 객체의 checked 값이 바뀜
                                    // >> map()을 이용하여 작성
                                    // map() : 배열 안의 요소의 값을 return을 사용하여 새로운 배열로 만들 수 있다
                                    // 클릭한 객체를 찾았다면 그 객체의 checked값을 수정하여 return
                                    const newStudents = students.map(
                                        (s) => {
                                            // s를 통해서 각각의 객체 값을 확인
                                            // 1) 클릭한 체크박스의 id 값과 모든 s의 id값 비교
                                            // 2) id값이 같지 않다면 원래의 객체 값 가져오기
                                            // 3) id값이 같다면 checked 값을 !를 이용하여 수정한 값을 가져오기
                                            if (student.id !== s.id) {
                                                return s;
                                            } else {
                                                // 원래 객체에서 checked 값만 수정하기 위해서 s 안에 있는 속성을 ...(스프레드 연산자)를 통해 추가
                                                // 그 중 바꾸고자 하는 속성인 checked를 작성해서 수정
                                                return {
                                                    ...s,
                                                    checked: !s.checked
                                                }
                                            }
                                        }
                                    )
                                    setStudents(newStudents)
                                }}
                        />
                            {student.id}. {student.name}
                            <button
                                // 클릭했을 때 배열 삭제 > 클래스형 컴포넌트 내용 참고
                                onClick={()=>{deleteStudent(student.id)}}
                            >
                                삭제
                            </button>
                        </li> 
                    )
                }
            </ul>
            
        </div>
    )
};

export default ArrowState;