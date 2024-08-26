// (todos, action) - 현재의 state 값과 action 객체
export default function todosReducer(todos, action) {
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
