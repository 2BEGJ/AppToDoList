<template>
  <ul>
    <ul style="list-style-type:none;">
			<li v-for="todo in todos" :key="todo.id">
				<div v-if="(filter=='all') || ( filter=='check' && todo.completed==true )">
					<input type="checkbox" v-if="todo.completed" checked v-on:click="doneSwitch(todo.id)">
					<input type="checkbox" v-else v-on:click="doneSwitch(todo.id)">
					{{ todo.name }} {{ todo.completed}}
					<button v-on:click="remove( todo.id )">Supprimer</button>
				</div>
			<br><br>
			</li>
		</ul>
  </ul>
</template>

<script>
export default {
  name: 'ToDoList',

      data() {
				return {
					todos: [
						{
							id: 1,
							name : 'tache 1',
							completed : false
						},{
							id: 2,
							name : 'tache 2',
							completed: true
						},{
							id: 3,
							name : 'tache 3',
							completed: true
						},{
							id: 4,
							name : 'tache 4',
							completed: false
						},{
							id: 5,
							name : 'tache 5',
							completed: false
						}
					],
					newTodo: '',
					filter: 'all',
				}
			},
			methods: {
				remove(id){
					let i = 0;
					while(id!=this.todos[i].id){
						i++;
					}
					this.todos.splice(i,1)
				},
				doneSwitch(id){
					let i = 0;
					while(id!=this.todos[i].id){
						i++;
					}
					this.todos[i].completed =! this.todos[i].completed;
				}
			}
}
</script>
