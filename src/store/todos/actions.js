
export function addTodo({ commit },data){
    commit("addTodo",data);
}
export function editTodo({commit},data){
    commit("editTodo",data)
}
export function clearCompleted({ commit }){
    commit("clearCompleted");
}
export function changefilter({ commit},filter){
    commit("changefilter",filter);
}/*
export function checkAllTodos( { commit}){
commit("checkAllTodos",event.target.checked);
}*/
export function removeTodo( {commit},id){
    commit("removeTodo",id);
}
/*
export function doneEdit({ commit },data){
    commit("doneEdit",{
        'id': this.id,
        'titre': this.titre,
        'completed':this.completed
    });
}
*/

//ne pas effacer pour montrer qu'on a essayer