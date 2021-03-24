

export function addTodo(state,todo) {

    state.todos.push({
        id: todo.id,
        titre: todo.titre,
        completed: false
    });
}
/*
export function doneEdit(state,todo) {
    
    const index = state.todos.findIndex(item => item.id = todo.id);
    state.todos.splice(index, 1 , {
        id: todo.id,
        titre: todo.titre,
        completed:false
    })
}*/


export function removeTodo(state, id){
  const index = state.todos.findIndex(item => item.id = id);
  state.todos.splice(index,1);
}/*
export function checkAllTodos(state) {
    state.todos.ForEach((todo) => {todo.completed = event.target.checked})
}*/


export function clearCompleted(state) {
    state.todos = state.todos.filter(todo => !todo.completed)
}


export function changefilter(state,filter){
    state.filter = filter;
}

//t'es pas obligé d'en enlever pour montrer au prof qu'on a essayer