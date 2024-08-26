import styled from "styled-components";
import Todo from "./Todo";

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

const TodoList = ({ todos, onChangeTodo, onDeleteTodo }) => {
    return (
        <TodoListStyle>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Todo todo={todo} onChangeTodo={onChangeTodo} onDeleteTodo={onDeleteTodo} />
                </li>
            ))}
        </TodoListStyle>
    );
};

export default TodoList;
