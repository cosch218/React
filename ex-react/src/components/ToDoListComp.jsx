import { useState } from "react";

import './toDoListComp.css';

let globalId = 1;

const ToDoListComp = (props) => {
    // 투두리스트 
    const [todoLists, setTodoLists] = useState([
        // {id:"", content:"", time:new Date()}
    ])
    // 투두리스트 input:text 값을 저장할 공간
    const [inputTodo, setInputTodo] = useState("");

    // inputTodoChange 메소드
    const inputTodoChange = (e) => {setInputTodo(e.target.value)};

    // addTodo 메소드
    const addTodo = () => {
        const newTodoLists = todoLists.concat(
            {
                id: globalId++,
                content: inputTodo,
                time: new Date(),
                checked: false
            }
        );
        setTodoLists(newTodoLists);
        setInputTodo("");
    }

    // clickCheck 메소드
    const clickCheck = (todolist) => {
        const newTodoLists = todoLists.map(
            (t) => {
                if (todolist.id != t.id) {
                    return t;
                } else {
                    return {
                        ...t,
                        checked: !t.checked
                    }
                }
            }
        )
        setTodoLists(newTodoLists);
    }

    // deleteTodo 메소드
    const deleteTodo = (id) => {
        const newTodoLists = todoLists.filter (
            (t) => t.id !== id
        );
        setTodoLists(newTodoLists);
    }

    return (
        <div>
            <h1>React 로 To do List 만들기</h1>

            <h3>To do List 추가하기</h3>
            <input 
                type="text" 
                onChange={inputTodoChange}
                value={inputTodo}
            />
            <button
                onClick={addTodo}
            >
                +
            </button>

            <h3>To do List 목록</h3>
            <ul>
                {
                    todoLists.map ( (todolist) =>
                        <li 
                            key={todolist.id}
                            className={todolist.checked ? "on" + " todolist" : "" + " todolist"}
                        >
                            <input 
                                type="checkbox"
                                checked={todolist.checked}
                                readOnly
                                onClick={ () => {clickCheck(todolist)}} 
                            />
                            {todolist.id}. {todolist.content}
                            <button
                                onClick={ () => {deleteTodo(todolist.id)} }
                            >
                                X
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default ToDoListComp