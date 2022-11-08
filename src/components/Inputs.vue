<template>
  <div class="inputWrapper">
    <div>
        <input id="new-todo-field" type="text" v-model="text"/>
    </div>
    <div>
        <input id="new-todo-button" type="button" @click="emitInput" value="Ajouter"/>
    </div>
  </div>
</template>

<script>
export default {
    name: "Inputs",
    emits: ['newTodo'],
    data: function() {
        return {
            text: ""
        }
    },
    methods: {
        emitInput() {
            if(this.text !== "") {
                this.$emit('newTodo', this.text)
            }
            this.text = ""
        }
    }
}
</script>

<style scoped>
    .inputWrapper {
        display: flex;
    }
</style>