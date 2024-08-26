import styled from "styled-components";
import Todo from "./Todo";
import { useTodos } from "../context/todosContext.jsx";

const TodoListStyle = styled.ul`
    display: flex;
    flex-direction: column;
    > li {
        padding: 8px 0;
        font-size: 1.6rem;
        border-top: 1px solid #ddd;
        > label {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
`;

const TodoList = () => {
    const todos = useTodos();

    return (
        <TodoListStyle>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Todo todo={todo} />
                </li>
            ))}
        </TodoListStyle>
    );
};

export default TodoList;
