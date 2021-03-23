export function load(state, data) {
    state.todos = data 
}
export function addTodo (state, data) {
    /*this.todos.push({
        completed: false,
        name: this.newTodo
    })
    this.newTodo = ''*/ 
    /*let element = [];
    element += 'id : ' + data.id;
    element += 'name : ' +data.name;*/
    state.todos.push(data)
}
export function deleteTodo (state, data){
    for (let i = 0; i < state.todos.length; i++) {
        const element = state.todos[i];
        if (element.id == data) {
            state.todos.splice(i, 1);
        }
        
    }
}
export function deleteCompleted (){
this.todos = this.todos.filter(todo => !todo.completed)
}
export function editTodo (state,{data, newtodo}) {
    data.newtodo = newtodo;
    /*this.editing = todo
    this.oldTodo = todo.name*/
}
export function doneEdit (state, {data,done}) {

    /*this.editing = null*/
    data.done = done;
}
export function cancelEdit (state, data) {
    state.todos.name = state.todos.data;
    state.todos.data.doneEdit(state, {})
}