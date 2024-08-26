import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { useTodosDispatch } from "../context/todosContext.jsx";

const TodoInputStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
`;

const TodoInput = () => {
    const [text, setText] = useState("");
    const dispatch = useTodosDispatch();

    // 추가
    function handleAddTodo(text) {
        dispatch({
            // "action" 객체:
            type: "addTodo",
            id: new Date().getTime(),
            text,
        });
    }

    return (
        <TodoInputStyle>
            <Input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="내용을 입력해주세요" />
            <Button
                type="text"
                onClick={() => {
                    setText("");
                    handleAddTodo(text);
                }}>
                추가
            </Button>
        </TodoInputStyle>
    );
};

export default TodoInput;
