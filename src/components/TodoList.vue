/* eslint-disable vue/valid-v-else */
<template>
  <div>
      <input type="text" class="new-todo" placeholder="ajouter une tache" v-model="newTodo" id="newTodo" @keyup.enter="addTodo({titre: newTodo})">
      <div class="main">
          <ul class="todo-list">
    
      <li v-for="(todo, index) in todosFiltered" v-bind:key="todo.id" :class="{ completed: todo.completed, editing: todo === editing}">
       <div class="view">
            <input type="checkbox" v-model="todo.completed" class="toggle" >
          <label  @dblclick="editTodo(todo)" >
          {{ todo.titre }}
         
          </label>
           <button class="destroy" @click="removeTodo(index)">
              </button>
        </div>  
        <input type="text" v-model="todo.titre"  @keyup.enter="doneEdit(todo)" @blur="doneEdit(todo)" @keyup.esc="cancelEdit" class="edit" v-focus="todo === editing">
      </li>
      </ul>
      </div>
      <footer class="footer">
         <div> <label><input type="checkbox" :checked="!anyReamaining" @change="checkAllTodos" :change="!get" >Check all</label></div>
          <div class="todo-count">{{ reamaining }} Tache à faire</div>
          <ul class="filters">
            <li>
                <a href="#" :class="{selected: filter === 'all'}" @click="changefilter('all')">Toutes</a>
            </li>
             <li>
                <a href="#" :class="{selected: filter === 'todo'}" @click="changefilter('todo')">A faire</a>
            </li>
             <li>
                <a href="#" :class="{selected: filter === 'done'}" @click="changefilter('done')">Faites</a>
            </li>
        </ul>
        
        <div>
           
        <button v-if="showClearCompletedButton" @click="clearCompleted" class="clear-completed" >Supprimer les tâches finies</button>
     
       </div>
        
          </footer>
  </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'todo-list',
 
  data() {
      return {
          newTodo:'',
          idForTodo: 3,
         editing : null,
          beforeEditCache:'',
      }
  },
  computed: {
      ...mapGetters('todos', ['reamaining','anyReamaining','checkAllTodos','get','todosFiltered','showClearCompletedButton'])
      ,
      
  },
  directives: {
      focus: {
          inserted: function (el) {
              el.focus()
          }
      }
  },
  methods: {
    ...mapActions('todos',['addTodo','clearCompleted','changefilter','removeTodo','doneEdit']),
    
    
    
      editTodo(todo) {
          
            this.editing = todo
            this.beforeEditCache = todo.titre
      },
      /*changefilter(filter){
          this.todos.filter = filter;
          }*/ 
    doneEdit(todo) {
          if (todo.titre.trim() == '') {
              todo.titre = this.beforeEditCache
          }
          this.editing = null
      },
      cancelEdit(){
          this.editing.name = this.beforeEditCache
          this.editing = null
      },/*
      
      checkAllTodos() {
          this.todos.ForEach((todo) => {todo.completed = event.target.checked})
      }*/
     
  }
}
</script>


<style src="./Todos.css">
.todo-input {
    width: 100px;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;

&:focus {
    outline: 0;
}
}
.todo-item-label {
    padding: 10px;
    border: 1px solid white;
    margin-left: 12px;
}


</style>
