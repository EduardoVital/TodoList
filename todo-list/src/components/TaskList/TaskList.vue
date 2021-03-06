<template>
  <section>
    <div :class="[this.getToggle ? 'bg-tasklit-moon' : 'bg-tasklit-sun' ,'container-footer']">
      <div v-if="!getFilterTodos.length" class="container-empty-task">
        <span>No items yet.</span>
      </div>
      <draggable v-else :list="getFilterTodos" @start="drag = true" @end="drag = false" v-bind="dragOptions">
        <div v-for="task in getFilterTodos" :key="task.id" class="container-task" :name="!drag ? 'flip-list' : null">
          <button v-bind:class="[task.isCompleted ? 'bg-isCompleted' : '' , 'checkmark']" @click="handleSetTaskIsCompleted(task.id)">
            <img v-if=task.isCompleted src="@/assets/images/icons/icon-check.svg" alt="Icon check">
          </button>
          <span v-bind:class="[task.isCompleted ? 'isCompleted' : '', this.getToggle ? 'text-moon' : 'text-sun']">{{ task.title }}</span>
          <button class="remove" @click="handleRemoveTask(task.id)">
            <img src="@/assets/images/icons/icon-cross.svg" alt="Cross icon">
          </button>
        </div>
      </draggable>
      <FooterTaskList :filter-is-completed="handleFilterIsCompleted" :filter-is-active="handleFilterIsActive" :filter-all="handleFilterAll"/>
    </div>
    <p>Drag and drop to reorder list</p>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { VueDraggableNext } from 'vue-draggable-next';
import FooterTaskList from '../FooterTaskList/FooterTaskList.vue';

export default {
  name: 'TaskList',
  components: {
    FooterTaskList,
    draggable: VueDraggableNext,
  },
  data() {
    return {
      filterTodos: 'All',
      drag: false,
    };
  },
  computed: {
    ...mapGetters([
      'getTodoList',
      'getFilterCompleted',
      'getFilterActive',
      'getToggle',
    ]),
    getFilterTodos() {
      if (this.filterTodos === 'Active') {
        return this.getFilterActive;
      } if (this.filterTodos === 'Completed') {
        return this.getFilterCompleted;
      }
      return this.getTodoList;
    },

    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      };
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
  .container-footer {
    color: var(--text-gray);
    max-width: 484px;
    margin: 0 auto;
    border-radius: 5px;
    position: relative;
    margin-top: -25px;
    min-height: 30px;

    .container-task {
      padding: 30px 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1px solid var(--gray);

      .text-moon {
        color: var(--text-white);
      }

      .text-sun {
        color: var(--gray-placeholder);
      }

      .isCompleted {
        text-decoration: line-through;
      }

      .bg-isCompleted {
        background: linear-gradient(#57ddff,#c058f3);
      }

      .remove {
        margin-left: auto;
        background: transparent;
        border: none;
        display: none;
      }
    }

    .container-task:hover .remove {
      display: block;
    }

    .container-empty-task {
      text-align: center;
      font-size: 18px;
      border-bottom: 1px solid var(--gray);
      padding: 30px 20px;
      color: var(--text-gray);
    }
  }

  p {
    text-align: center;
    color: var(--gray-placeholder);
  }

  .flip-list-move {
  transition: transform 0.5s;
  }

  .no-move {
    transition: transform 0s;
  }

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
}

@media (max-width: 720px) {
  section {
    height: 60vh;

    .container-footer {
      max-width: 320px;
      margin-top: -25px;

      .container-task, .container-empty-task {
        padding: 10px;
        font-size: 14px;
      }
    }

    p {
      margin-top: 100px;
    }
  }
}
@media (max-width: 320px) {
  section {
    .container-footer {
      max-width: 300px;
    }
  }
}
</style>
