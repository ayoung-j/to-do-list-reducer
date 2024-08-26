import { createContext, useContext, useReducer } from "react";

// Context
export const TodosContext = createContext(null);
export const TodosDispatchContext = createContext(null);

export function TodosProvider({ children }) {
    // dispatch - 이벤트 핸들러에서 “action”을 전달하여 “사용자가 방금 한 일”을 지정
    const [todos, dispatch] = useReducer(todosReducer, initialTodos);

    return (
        <TodosContext.Provider value={todos}>
            <TodosDispatchContext.Provider value={dispatch}>{children}</TodosDispatchContext.Provider>
        </TodosContext.Provider>
    );
}

export function useTodos() {
    return useContext(TodosContext);
}

export function useTodosDispatch() {
    return useContext(TodosDispatchContext);
}

// Reducer
// (todos, action) - 현재의 state 값과 action 객체
function todosReducer(todos, action) {
    switch (action.type) {
        case "addTodo": {
            return [
                ...todos,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }
        case "changeTodo": {
            return todos.map((todo) => {
                if (todo.id === action.todo.id) {
                    return action.todo;
                } else {
                    return todo;
                }
            });
        }
        case "deleteTodo": {
            return todos.filter((todo) => todo.id !== action.id);
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

const initialTodos = [];
