<template>
  <section>
    <div v-for="task in getFilterTodos" :key="task.id" class="container-task">
      <button v-bind:class="[task.isCompleted ? 'bg-isCompleted' : '' , 'checkmark']" @click="handleSetTaskIsCompleted(task.id)"></button>
      <span v-bind:class="[task.isCompleted ? 'isCompleted' : '']">{{ task.title }}</span>
      <button class="remove" @click="handleRemoveTask(task.id)">
        <img src="@/assets/images/icons/icon-cross.svg" alt="Cross icon">
      </button>
    </div>
    <FooterTaskList :filter-is-completed="handleFilterIsCompleted" :filter-is-active="handleFilterIsActive" :filter-all="handleFilterAll"/>
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
  data() {
    return {
      filterTodos: 'All',
    };
  },
  computed: {
    ...mapGetters([
      'getTodoList',
      'getFilterCompleted',
      'getFilterActive',
    ]),
    getFilterTodos() {
      if (this.filterTodos === 'Active') {
        return this.getFilterActive;
      } if (this.filterTodos === 'Completed') {
        return this.getFilterCompleted;
      }
      return this.getTodoList;
    },
  },
  methods: {
    ...mapActions(['setRemoveTask', 'setChangeStatus']),
    handleRemoveTask(id) {
      this.setRemoveTask(id);
    },

    handleSetTaskIsCompleted(id) {
      this.setChangeStatus(id);
    },

    handleFilterIsCompleted() {
      this.filterTodos = 'Completed';
    },

    handleFilterIsActive() {
      this.filterTodos = 'Active';
    },

    handleFilterAll() {
      this.filterTodos = 'All';
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
    }

    .isCompleted {
      text-decoration: line-through;
    }

    .bg-isCompleted {
      background: blue;
    }

    .remove {
      margin-left: auto;
      background: transparent;
      border: none;
    }
  }
}

</style>
