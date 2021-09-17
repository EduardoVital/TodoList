<template>
  <div class="footer">
    <p>{{getTodoList.length}} items left</p>
    <a @click.prevent="filterAll()">all</a>
    <a @click.prevent="filterIsActive()">Active</a>
    <a @click.prevent="filterIsCompleted()">Completed</a>
    <a @click.prevent="handleClearCompletedTodos">Clear Completed</a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FooterTaskList',
  props: {
    filterIsCompleted: Function,
    filterIsActive: Function,
    filterAll: Function,
  },
  computed: {
    ...mapGetters(['getTodoList']),
  },
  methods: {
    ...mapActions(['setClearCompletedTodos']),

    handleClearCompletedTodos() {
      this.setClearCompletedTodos();
    },
  },
};

</script>

<style scoped lang="scss">
.footer {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: var(--gray-placeholder);
  }

  a {
    text-decoration: none;
    color: var(--gray-placeholder);
    cursor: pointer;
  }
}
</style>
