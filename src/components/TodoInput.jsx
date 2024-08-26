import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const TodoInputStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
`;

const TodoInput = ({ onAddTodo }) => {
    const [text, setText] = useState("");

    return (
        <TodoInputStyle>
            <Input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="내용을 입력해주세요" />
            <Button
                onClick={() => {
                    setText("");
                    onAddTodo(text);
                }}>
                추가
            </Button>
        </TodoInputStyle>
    );
};

export default TodoInput;
