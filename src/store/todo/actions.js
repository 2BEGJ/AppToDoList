import axios from 'axios';

export function load({ commit }){
    axios.get('json/immo.json')
            .then(response => {
                //console.log(response);
                commit("load", response.data);
            })
            .catch(function(error){
                console.log(error);
            }); 

}
export function addTodo({ commit },data) //ajouter le data
{
    commit("addTodo", data);
}
export function deleteTodo ({ commit },data) //supprimer le data
{
    commit("deleteTodo", data);
}
export function deleteCompleted (){
this.todos = this.todos.filter(todo => !todo.completed)
}
export function editTodo (todo) {
    this.editing = todo
    this.oldTodo = todo.name
}
export function doneEdit ({ commit }, data) {
    commit("doneEdit", {
        data,
        done: !data.done
    })
}
export function cancelEdit () {
    this.editing.name = this.oldTodo
    this.doneEdit()
}
