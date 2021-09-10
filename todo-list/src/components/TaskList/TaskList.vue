<template>
  <section>
    <div v-for="task in getTodoList" :key="task.id" class="container-task">
      <Button />
      <span>{{ task.title }}</span>
    </div>
    <FooterTaskList />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Button from '../Button/Button.vue';
import FooterTaskList from '../FooterTaskList/FooterTaskList.vue';

export default {
  name: 'TaskList',
  components: {
    Button,
    FooterTaskList,
  },
  computed: {
    ...mapGetters([
      'getTodoList',
    ]),
  },
  methdos: {
    ...mapActions([
      'actionTodoList',
    ]),
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
    }
  }
}

</style>
