
export function reamaining (state) {
    return state.todos.filter(todo => !todo.completed).length;
}
export function anyReamaining (state, getters) {
    return getters.reamaining != 0;
}
export function checkAllTodos (state) {
    return state.todos.forEach(todo => {
        todo.completed = event.target.checked
        
    });
}
export function get(state, getters) {
    return getters.reamaining === 0;
}
export function todosFiltered (state) {
    
    if (state.filter == 'all') {
        return state.todos;
    }else if (state.filter == 'todo') {
        return state.todos.filter(todo => !todo.completed);
    }else if (state.filter == 'done'){
        return state.todos.filter(todo => todo.completed);
    }
    return state.todos;
    
}
export function  showClearCompletedButton(state) {
     return state.todos.filter(todo => todo.completed).length > 0;
 }
