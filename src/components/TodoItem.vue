<template>
   <div class="todo-item">
         <div class="view">
            <input type="checkbox" v-model="completed" class="toggle">
          <label  @dblclick="editTodo" :class="{completed : completed }">
          {{ titre }}
         
          </label>
           <button class="destroy" @click="removeTodo(index)">
              </button>
    <input type="text" v-model="titre"  @keyup.enter="doneEdit" @blur="doneEdit" @keyup.esc="cancelEdit" class="edit" v-focus="todo === editing" >
        </div> 
       </div>
</template>

<script>
export default {
name: 'todo-item',
pros: {
    todo: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    }
},
data() {
    return {
        'id' : this.todo.id,
        'titre': this.todo.titre,
        'completed': this.todo.completed,
        'editing': null,
        'beforeEditCache': ''
    }
},
methods: {
    removeTodo(index) {
        this.$emit('removeTodo', index)
    }
}
}
</script>