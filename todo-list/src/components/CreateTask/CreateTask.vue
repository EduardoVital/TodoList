<template>
  <div class="create-task">
    <Button />
    <input class="input-text" type="text" v-model="task" placeholder="Creating a new todo..." v-on:keyup.enter="handleCreateNewTask" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Button from '../Button/Button.vue';

export default {
  name: 'Header',
  components: {
    Button,
  },
  data() {
    return {
      task: '',
    };
  },
  methods: {
    ...mapActions(['setTodoList']),
    handleCreateNewTask() {
      const randomId = Math.floor(Math.random() * 1000);
      const newTask = {
        id: randomId,
        title: this.task,
        isActive: false,
      };

      if (!this.task) {
        return;
      }

      this.setTodoList(newTask);

      this.task = '';
      this.isActive = false;
    },
  },
};
</script>

<style scoped lang="scss">
.create-task {
  max-width: 484px;
  margin: 0 auto;
  width: 100%;
  background: var(--text-white);
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .input-text {
    width: 100%;
    outline: none;
    border: none;
    font-size: 16px;
    font: 16px 'Josefin Sans', sans-serif;
    color: var(--gray-placeholder);
    background: var(--text-white);
  }
}
</style>
