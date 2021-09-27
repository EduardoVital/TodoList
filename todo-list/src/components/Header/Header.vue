<template>
  <section :class="[this.getToggle ? 'bg-sun' : 'bg-moon' , 'bg']">
    <div class="container flexbox">
      <div>
        <h1>Todo</h1>
      </div>
      <div class="toggle" @click="handleToggleImage">
        <img v-if="!this.getToggle" src="@/assets/images/icons/icon-moon.svg" alt="icon moon">
        <img v-if="this.getToggle" src="@/assets/images/icons/icon-sun.svg" alt="icon sun">
      </div>
    </div>
    <CreateTask />
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CreateTask from '../CreateTask/CreateTask.vue';

export default {
  name: 'Header',
  components: {
    CreateTask,
  },
  computed: {
    ...mapGetters(['getToggle']),
  },
  mounted() {
    const { body } = document;
    body.classList.add('bg-sun');
  },
  methods: {
    ...mapActions(['setToggle']),
    handleToggleImage() {
      this.setToggle();
      const { body } = document;
      if (body.classList.contains('bg-sun')) {
        body.classList.remove('bg-sun');
        body.classList.add('bg-moon');
      } else {
        body.classList.remove('bg-moon');
        body.classList.add('bg-sun');
      }
    },
  },
};
</script>

<style scoped lang="scss">
.bg {
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;
}

.bg-moon {
  background-image: url('../../assets/images/bg-desktop-light.jpg');
}
.bg-sun {
  background-image: url('../../assets/images/bg-desktop-dark.jpg');
}

.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    text-transform: uppercase;
    color: var(--text-white);
    letter-spacing: 10px;
    font-size: 40px;
    font-weight: 700;
  }

  .toggle {
    cursor: pointer;
  }
}

// media query
@media (max-width: 720px) {
  .bg {
    height: 40vh;
  }

  .bg-moon {
  background-image: url('../../assets/images/bg-mobile-light.jpg');
  }
  .bg-sun {
    background-image: url('../../assets/images/bg-mobile-dark.jpg');
  }
}
@media (max-width: 320px) {
  .bg {
    height: 50vh;
  }
}
</style>
