<template>
  <Inputs @new-todo="addTodo"/>
  <TodoItem :todo-list="todos" @delete-todo="deleteTodo"/>
  <div>
    Nombre de tâches : {{ todosLength }}
  </div>
</template>

<script>
import Inputs from "./components/Inputs";
import TodoItem from "./components/TodoItem";

export default {
  name: 'App',
  components: {
    Inputs,
    TodoItem
  },
  data: function () {
    return {
      todos: []
    }
  },
  computed: {
    todosLength() {
      return this.todos.length
    }
  },
  methods: {
    addTodo(text) {
      if(this.todosLength !== 0) {
        console.log(this.todos[this.todosLength - 1].id + 1)
      }
      this.todos.push(
        {
          text: text,
          id: this.todosLength !== 0 ? this.todos[this.todosLength-1].id + 1 : 0
        }
      )
    },
    deleteTodo(todoId) {
      this.todos.splice(this.todos.findIndex((todo) => {
        return todo.id === todoId
      }), 1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#counter {
  font-weight: bold;
}
</style>
