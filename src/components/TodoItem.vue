<template>
  <div class="todoWrapper" v-for="todo in todoList">
    <div>
      {{todo.text}}
    </div>
    <div>
      <input type="button" @click="emitDelete(todo)" value="Supprimer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  emits: ['deleteTodo'],
  props: {
    todoList: Array
  },
  methods: {
    emitDelete(todo) {
      this.$emit('deleteTodo', todo.id)
    }
  }
}
</script>

<style scoped>
  .todoWrapper {
    display: flex;
  }
</style>