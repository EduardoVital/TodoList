<template>
  <section>
    <div v-for="task in getTodoList" :key="task.id" class="container-task">
      <button class="checkmark" @click="handleSetTaskIsCompleted(task.id)"></button>
      <span>{{ task.title }}</span>
      <button class="remove" @click="handleRemoveTask(task.id)">Remover</button>
    </div>
    <FooterTaskList />
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FooterTaskList from '../FooterTaskList/FooterTaskList.vue';

export default {
  name: 'TaskList',
  components: {
    FooterTaskList,
  },
  computed: {
    ...mapGetters([
      'getTodoList',
    ]),
  },
  methods: {
    ...mapActions(['setRemoveTask']),
    handleRemoveTask(id) {
      this.setRemoveTask(id);
    },

    handleSetTaskIsCompleted(id) {
      const getStatusIsCompleted = this.getTodoList.map((task) => (task.id === id ? {
        ...this.getTodoList,
        isCompleted: !this.getTodoList.isCompleted,
      } : this.getTodoList));

      this.getTodoList = (getStatusIsCompleted);
    },
  },
};
</script>

<style scoped lang="scss">
section {
  background: var(--text-white);
  max-width: 484px;
  margin: 0 auto;
  box-shadow: 0px 0px 3px 0px var(--gray);
  border-radius: 5px;
  position: relative;
  margin-top: -30px;

  .container-task {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--gray);

    span {
      color: var(--gray-placeholder);
      // text-decoration: line-through
    }

    .remove {
      margin-left: auto;
    }
  }
}

</style>
