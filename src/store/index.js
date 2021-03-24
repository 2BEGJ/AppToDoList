import { createStore } from 'vuex'
import todos from './todos' // Store permettant de gerer les todos

export default createStore({
 debug : true,
  modules: {
    todos
  },
})
