<template>
  <div v-if=!isMobile class="footer">
    <p>{{getTodoList.length}} items left</p>
    <div class="filter">
      <a class="link" @click.prevent="filterAll()">All</a>
      <a @click.prevent="filterIsActive()">Active</a>
      <a @click.prevent="filterIsCompleted()">Completed</a>
    </div>
    <a @click.prevent="handleClearCompletedTodos">Clear Completed</a>
  </div>
  <div v-else class="footer">
    <div class="infos">
      <p>{{getTodoList.length}} items left</p>
      <a @click.prevent="handleClearCompletedTodos">Clear Completed</a>
    </div>
    <div :class="[this.getToggle ? 'bg-tasklit-moon' : 'bg-tasklit-sun','filter']">
      <a class="link" @click.prevent="filterAll()">All</a>
      <a @click.prevent="filterIsActive()">Active</a>
      <a @click.prevent="filterIsCompleted()">Completed</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FooterTaskList',
  data() {
    return {
      isMobile: false,
    };
  },
  props: {
    filterIsCompleted: Function,
    filterIsActive: Function,
    filterAll: Function,
  },
  mounted() {
    this.handleMobileLayout();
  },
  computed: {
    ...mapGetters(['getTodoList', 'getToggle']),
  },
  methods: {
    ...mapActions(['setClearCompletedTodos']),

    handleClearCompletedTodos() {
      this.setClearCompletedTodos();
    },

    handleMobileLayout() {
      if (window.innerWidth <= 720) {
        this.isMobile = true;
      }
    },
  },
};

</script>

<style scoped lang="scss">
.footer {
  font-size: 14px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .filter {
    display: flex;
    justify-content: space-evenly;
    width: 45%;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .link {
    color: var(--blue);
  }
}

// media query
@media (max-width: 720px) {
  .footer {
    flex-direction: column;
    padding: 10px;

    .infos {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    .filter {
      position: absolute;
      bottom: -70px;
      padding: 10px;
      border-radius: 5px;
      width: 320px;
      justify-content: center;
      font-size: 18px;

      a {
        margin: 0 5px;
      }
    }
  }
}
@media (max-width: 320px ) {
  .footer {
    .filter {
      width: 300px;
    }
  }
}
</style>
