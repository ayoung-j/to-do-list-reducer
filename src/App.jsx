import { useReducer } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import todosReducer from "./reducer/todosReducer.js";

const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    max-width: 500px;
`;

const TodoTitle = styled.h2`
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 20px;
`;

const initialTodos = [];

function App() {
    const [todos, dispatch] = useReducer(todosReducer, initialTodos);
    // dispatch - 이벤트 핸들러에서 “action”을 전달하여 “사용자가 방금 한 일”을 지정

    // 추가
    function handleAddTodo(text) {
        dispatch({
            // "action" 객체:
            type: "addTodo",
            id: new Date().getTime(),
            text,
        });
    }

    // 변경
    function handleChangeTodo(todo) {
        dispatch({
            // "action" 객체:
            type: "changeTodo",
            todo,
        });
    }

    // 삭제
    function handleDeleteTodo(todoId) {
        dispatch({
            // "action" 객체:
            type: "deleteTodo",
            id: todoId,
        });
    }

    return (
        <>
            <GlobalStyle />
            <TodoContainer>
                <TodoTitle>To Do List</TodoTitle>
                <TodoInput onAddTodo={handleAddTodo} />
                <TodoList todos={todos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo} />
            </TodoContainer>
        </>
    );
}

export default App;
