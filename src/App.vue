<template>
 <div id="app" class="container">
  <img alt="Vue logo" src="./assets/logo.png" class="logo">
  <todo-list></todo-list>
  </div>
</template>

<script>

import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TodoList,
  }
}
</script>

<style>
* {
  box-sizing: border-box;

}
.container {
  max-width: 600px;
  margin: 0 auto;
}
.logo {
  display:block;
  margin: 20px auto;
  height: 75px;

}

</style>
