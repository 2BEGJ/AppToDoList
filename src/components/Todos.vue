/* eslint-disable no-unused-vars */
/* eslint-disable vue/return-in-computed-property */
 eslint-disable vue/require-v-for-key 
<template>
    <div class="todoapp">
        <header class="header">
            <h1> Todos</h1>
                <input type="text" class="new-todo" placeholder="ajouter une tache" v-model="newTodo" @keyup.enter="addTodo">
                <input type="checkbox"  v-model="allDone">
        </header>
        <div class="main">
           
            <ul class="todo-list">
                
                <li class="todo" v-for="todo in filteredTodos" :key="todo.name" :class="{completed: todo.completed, editing: todo === editing}">
                    <div class="view">
                        <input type="checkbox" v-model="todo.completed" class="toggle"> 
                        <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
                        <button class="destroy" @click.prevent="deleteTodo(todo)"></button>
                        </div>
                    <input type="text" class="edit" v-model="todo.name" @keyup.enter="doneEdit" @blur="doneEdit" @keyup.esc="cancelEdit" v-focus="todo === editing">
                </li>
            </ul>
            </div>
        <footer class="footer" v-show="hasTodos">
            <span class="todo-count"><strong>{{ property }}</strong> Tache à faire </span>
        <ul class="filters">
            <li>
                <a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a>
            </li>
             <li>
                <a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a>
            </li>
             <li>
                <a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a>
            </li>
        </ul>
        <button class="clear-completed" v-show="completed" @click.prevent="deleteCompleted">Supprimer les tâches finies</button>
        </footer>
    </div>
</template>

<script>

export default {
    
    data() {
        return {
            
            todos: [{
                name: 'Tache de test',
                completed:false
            }],
            newTodo:'',
            filter: 'all',
            editing: null,
            oldTodo: ''
        }
    },
    methods: {
        addTodo () {
            this.todos.push({
                completed: false,
                name: this.newTodo
            })
            this.newTodo = ''
        },
        deleteTodo (todo){
            this.todos = this.todos.filter(i => i !== todo)
        },
        deleteCompleted (){
    this.todos = this.todos.filter(todo => !todo.completed)
        },
        editTodo (todo) {
            this.editing = todo
            this.oldTodo = todo.name
        },
        doneEdit () {
            this.editing = null
        },
        cancelEdit () {
            this.editing.name = this.oldTodo
            this.doneEdit()
        }
       
    },
    computed: {
        // eslint-disable-next-line vue/no-dupe-keys
       allDone: {
           get() {
               return this.property ===0
           },
           set(value) {
              
                   this.todos.forEach(todo => {
                       todo.completed = value
                   });
               
           }
       },
        // eslint-disable-next-line vue/return-in-computed-property
        property () {
           return this.todos.filter(todo => !todo.completed).length
        },
        completed () {
            return this.todos.filter(todo => todo.completed).length
        },
        hasTodos () {
            return this.todos.length > 0
        },
        filteredTodos() {
            if (this.filter === 'todo') {
                return this.todos.filter(todo => !todo.completed)
            } else if (this.filter === 'done'){
                return this.todos.filter(todo => todo.completed)
            }
            return this.todos
        }
    
        
    },
    directives: {
        focus (el,value){
            if (value) {
                // eslint-disable-next-line no-unused-vars
                
                    el.focus()
                }
                
            }
        }
    }
   

</script>
<style src="./Todos.css">
</style>