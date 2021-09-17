<template>
  <section class="bg">
    <div class="container flexbox">
    <div>
      <h1>Todo</h1>
    </div>
    <div>
      <img src="@/assets/images/icons/icon-moon.svg" alt="icon moon">
    </div>
  </div>
  <CreateTask />
  </section>
</template>

<script>
import CreateTask from '../CreateTask/CreateTask.vue';

export default {
  name: 'Header',
  components: {
    CreateTask,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg {
  background-image: url('../../assets/images/bg-desktop-light.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;
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
}
</style>
