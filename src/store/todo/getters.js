export function todos(state)
{
    return state.todos;
}


 // eslint-disable-next-line vue/return-in-computed-property
/*export function  property (state) {
    return this.todos.filter(todo => !todo.completed).length;
 }*/
 export function completed (state) {
    return state.todos.filter(todo => todo.completed).length;
}
 export function property(state) {
     return state.todos.filter(state => !state.completed).length;
 }

export function hasTodos () {
     return this.todos.length > 0;
 }
 export function filteredTodos() {
     if (this.filter === 'todo') {
         return this.todos.filter(todo => !todo.completed);
     } else if (this.filter === 'done'){
         return this.todos.filter(todo => todo.completed);
     }
     return this.todos;
 }

