import React, { Component } from 'react'

export class MapComp extends Component {
    constructor(props) {
        super(props);
        // this.state에 들어가있는 내용만 this.setState를 사용 가능
        this.state = { 
            names : ["홍길동", "성춘향"],
            students : [
                {id:1, name:"홍길동"},
                {id:2, name:"성춘향"},
                {id:3, name:"Jhon"},
                {id:4, name:"흥부"}
            ],
            inputText : ""  // onChange를 이용해서 input의 value 값 가져옴
        };
        // 수정될 때마다 값이 화면에 표현되지 않고, 값을 저장하고 싶을 때
        this.id = 5;
    }

    addStudent =  () => {
        // 리액트는 state 값이 바뀔 때마다 화면이 업데이트 된다 => 값을 추가할 땐 state 값을 변경하는 방법으로!
        // 1. state.students에 배열의 요소를 추가하는 방법
        // 1) push : 기존의 배열에 추가
        // 2) concat : 새로운 배열에 추가 후 return

        // 아래와 같이 push를 통해 직접 접근해서 수정할 수도 있지만 화면에 바로 업데이트되지 않는다
        // >> button의 click이벤트 발생 시 업데이트 안 됨
        // >> onChange 이벤트 발생 시 업데이트 됨
        // >> setState()가 호출되면 화면 업데이트
        // push는 직접 접근하기 때문에 잘 사용하지 않는다
        /* this.state.students.push({id:4, name:this.state.inputText}) */

        // concal을 이용해서 새로운 배열을 만든 후 setState를 이용하여 추가
        // id 값은 중복되지 않게 사용
        // 1씩 증가 => 배열의 길이값이 1씩 증가
        const newStudents = this.state.students.concat(
            {
                id: this.id,
                name: this.state.inputText
            }
        )
        this.setState({students:newStudents});
        // 속성값에 직접 접근해서 1증가
        this.id++;

        // input 태그의 value={} 를 state값으로 연결하면 steState를 통해서 값을 수정할 수 있다.
        // 접근하는 state의 이름이 다르면 따로 적어도 괜촪다
        // 아래와 같이 함께 적어도 된다.
        // this.setState({students:newStudents, inputText:""});
        this.setState({inputText :""})
    }

    // 전달해준 값을 사용하기 위해서 매개변수로 받아오기
    deleteStudent = (student) => {
        // 1. 배열에서 값을 제거하는 방법
        // 1) pop, splice = 원래 값에서 제거할 경우 => 잘 사용 X
        // 2) 값을 제거하고 새로운 배열 생상 : filter
        // filter(걸러냄) : (value) => return 참일 때 value 값을 return한 새로운 배열에 추가
        const newStudents = this.state.students.filter((s)=>s.id !== student.id);
        this.setState({students : newStudents})

    }

    render() {
        // 배열의 map 메소드 확인
        const array = [1,2,3,4];
        /** map 메소드의 특징 */
        // .map( (value, index) => return 값 )
        // map에 함수를 넣으면 그 함수의 return 값으로 새로운 배열을 작성해준다
        // >> return 값에 태그나 컴포넌트를 넣어서 반복 가능
        const arrayMap = array.map((num, index) => <p key={index}>{num*2}</p>);
    return (
        <div>
            <h1>컴포넌트 반복</h1>
            <h3>배열을 바로 출력</h3>
            <p>{array}</p>
            <p>{arrayMap}</p>
            <h3>map으로 만든 배열을 화면에 바로 출력 가능</h3>
            {array.map((num, index)=><p key={index}>{num*3}</p>)}

            {/** state 값을 가져와서 출력 */}
            <ul>
                {this.state.names.map((name, index) => <li key={index}><span>이름 : </span>{name}</li>)}
            </ul>
            {/** input 태그를 이용해서 state.students에 추가
             * 1. input의 값을 저장할 state.inputText 변수 작성
             * 2. onChange를 통해서 값을 받아옴 (state.inputText)
             * 3. 버튼을 클릭했을 때 state.students에 추가
             */}
            <input 
                type="text"
                // inputText 에 값을 저장
                onChange={ (e) => {this.setState({inputText : e.target.value})} }
                value={this.state.inputText}
            />
            <button
                // 버튼을 클릭했을 때 state.students에 {id:4, name:""} 추가
                onClick={ this.addStudent }
            >
                이름 추가
            </button>

            {/** Map 실습 - table에 배열의 객체 값 출력 */}
            <table>
                <tbody>
                    <tr>
                        <td>아이디</td>
                        <td>이름</td>
                    </tr>
                    {
                        this.state.students.map((student) => 
                        // key 는 반복되는 공간에 지정
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td
                                    // 이름을 눌러을 때 이름을 가진 객체 삭제
                                    // student의 값을 전달하기 위해서 화살표함수로 감싸기
                                    onClick={ () => {this.deleteStudent(student)} }
                                >
                                    {student.name}
                                </td>
                            </tr>)}
                        {
                            // 컴포넌트의 props 값을 이용해서 값 전달 가능
                            this.state.students.map((student) =>
                            <TableComp
                                key={student.id}
                                name={student.name}
                                id={student.id}
                            />)
                        }
                </tbody>
            </table>
        </div>
    )
    }
}

export default MapComp



/** map에서 사용할 컴포넌트 */
class TableComp extends Component {
    // 호출하는 컴포넌트(부모)에서 값을 받아서 쓰기 위해 props 사용
    render() {
        const {id, name} = this.props
        return(
            <tr>
                <td>{id}</td>
                <td>{name}</td>
            </tr>
        );
    }
}