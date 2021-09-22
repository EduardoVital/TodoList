<template>
  <section :class="[this.toggle ? 'bg-sun' : 'bg-moon' , 'bg']">
    <div class="container flexbox">
      <div>
        <h1>Todo</h1>
      </div>
      <div class="toggle" @click="handleToggleImage">
        <img v-if="!toggle" src="@/assets/images/icons/icon-moon.svg" alt="icon moon">
        <img v-if="toggle" src="@/assets/images/icons/icon-sun.svg" alt="icon sun">
      </div>
    </div>
    <CreateTask />
  </section>
</template>

<script>
import CreateTask from '../CreateTask/CreateTask.vue';

export default {
  name: 'Header',
  data() {
    return {
      toggle: false,
    };
  },
  components: {
    CreateTask,
  },
  methods: {
    handleToggleImage() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style scoped lang="scss">
.bg {
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;
  height: 45vh;
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
</style>
