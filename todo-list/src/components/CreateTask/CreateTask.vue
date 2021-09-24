<template>
  <div :class="[this.getToggle ? 'bg-tasklit-moon' : 'bg-tasklit-sun', 'create-task']">
    <button class="checkmark"></button>
    <input class="input-text" type="text" v-model="task" placeholder="Creating a new todo..." v-on:keyup.enter="handleCreateNewTask" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      task: '',
    };
  },
  computed: {
    ...mapGetters(['getToggle']),
  },
  methods: {
    ...mapActions(['setTodoList']),
    handleCreateNewTask() {
      const randomId = Math.floor(Math.random() * 1000);
      const newTask = {
        id: randomId,
        title: this.task,
        isCompleted: false,
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
.bg-tasklit-sun {
  background: var(--background-tasklist-sun);
}
.bg-tasklit-moon {
  background: var(--background-tasklist-moon);
}
.create-task {
  max-width: 484px;
  margin: 0 auto;
  width: 100%;
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
    background: transparent;
  }
}

// media query
@media (max-width: 720px) {
  .create-task {
    max-width: 320px;
    padding: 10px;
  }
}
@media (max-width: 320px) {
  .create-task {
    max-width: 300px;
  }
}
</style>
