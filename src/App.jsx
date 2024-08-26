import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodosProvider } from "./context/todosContext.jsx";

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

function App() {
    return (
        <TodosProvider>
            <GlobalStyle />
            <TodoContainer>
                <TodoTitle>To Do List</TodoTitle>
                <TodoInput />
                <TodoList />
            </TodoContainer>
        </TodosProvider>
    );
}

export default App;
