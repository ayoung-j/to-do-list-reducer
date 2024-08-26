import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { useTodosDispatch } from "../context/todosContext.jsx";

const TodoText = styled.div`
    width: 100%;
`;

const Todo = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTodosDispatch();
    let todoContent;

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

    if (isEditing) {
        todoContent = (
            <>
                <Input
                    value={todo.text}
                    onChange={(e) => {
                        handleChangeTodo({
                            ...todo,
                            text: e.target.value,
                        });
                    }}
                />
                <Button onClick={() => setIsEditing(false)}>저장</Button>
            </>
        );
    } else {
        todoContent = (
            <>
                <TodoText>{todo.text}</TodoText>
                <Button onClick={() => setIsEditing(true)}>수정</Button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                    handleChangeTodo({
                        ...todo,
                        done: e.target.checked,
                    });
                }}
            />

            {todoContent}

            <Button onClick={() => handleDeleteTodo(todo.id)}>삭제</Button>
        </label>
    );
};

export default Todo;
