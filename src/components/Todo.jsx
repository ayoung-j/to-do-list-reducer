import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const TodoText = styled.div`
    width: 100%;
`;

const Todo = ({ todo, onChangeTodo, onDeleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;

    if (isEditing) {
        todoContent = (
            <>
                <Input
                    value={todo.text}
                    onChange={(e) => {
                        onChangeTodo({
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
                    onChangeTodo({
                        ...todo,
                        done: e.target.checked,
                    });
                }}
            />

            {todoContent}

            <Button onClick={() => onDeleteTodo(todo.id)}>삭제</Button>
        </label>
    );
};

export default Todo;
