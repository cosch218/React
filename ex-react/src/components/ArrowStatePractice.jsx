import { useState } from 'react';

let globalId = 6;

const ArrowStatePractice = (props) => {
    const [message, setMessage] = useState(
        {
            time: "15:29",
            text: "안녕하세요"
        }
    );
    const [number, setNumber] = useState(0);

    const [array, setArray] = useState([1,2,3,4]);

    const [students, setStudents] = useState([
        {id: 1, name: "김00", checked: false},
        {id: 2, name: "장00", checked: false},
        {id: 3, name: "최00", checked: false},
        {id: 4, name: "박00", checked: false},
        {id: 5, name: "이00", checked: false},
    ])

    const [inputName, setInputName] = useState("");

    const inputChange = (e) => {setInputName(e.target.value)}

    const addStudent = () => {
        const newStudents = students.concat(
            {
                id: globalId++,
                name: inputName
            }
        );
        setStudents(newStudents);
        setInputName("");
    }

    const inputCheck = (student) => {
        const newStudents = students.map(
            (s) => {
                if (student.id !== s.id) {
                    return s;
                } else {
                    return {
                        ...s,
                        checked: !s.checked
                    }
                }
            }
        )
        setStudents(newStudents)
    }

    const deleteStudent = (id) => {
        const newStudents = students.filter(
            (s) => s.id !== id 
        )
        setStudents(newStudents);
    }

    return (
        <div>
            <p>{number},{message.text}</p>
            <button
                onClick={
                    () => {
                        setMessage(
                            {
                                ...message,
                                time: "15:45",
                                text: "반갑습니다"
                            }
                        )
                        setNumber(1)
                    }
                }
            >
                글자값 수정
            </button>
            
            <h3>useState()와 map()을 이용한 배열 화면에 출력</h3>
            {
                array.map((num, i) => <li key={i}>{num}</li> )
            }

            <h3>useState()와 map()을 이용한 학생 명부 출력</h3>
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
                        <li key={student.id}>
                            <input 
                                type="checkbox"
                                checked={student.checked}
                                readOnly
                                onClick={ () => {inputCheck(student)} }
                            />
                            {student.id}. {student.name}
                            <button
                                onClick={ () => {deleteStudent(student.id)} }
                            >
                                삭제
                            </button>
                        </li> 
                    )
                }
            </ul>
            <hr />            
        </div>
    )
}

export default ArrowStatePractice;