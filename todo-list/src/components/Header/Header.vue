<template>
  <section class="bg">
    <div class="container flexbox">
    <div>
      <h1>Todo</h1>
    </div>
    <div>
      <img src="../../assets/images/icons/icon-moon.svg" alt="icon moon">
    </div>
  </div>
  <div class="task">
    <input type="checkbox">
    <input class="input-task" type="text">
  </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg {
  background-image: url('../../assets/images/bg-desktop-light.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 300px;
}
.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    text-transform: uppercase;
    color: var(--text-white);
    letter-spacing: 15px;
    font-size: 36px;
    font-weight: bold;
  }
}

.task {
  max-width: 484px;
  margin: 0 auto;
  width: 100%;
  background: white;
  padding: 20px;
  box-shadow: 2px 0px 10px black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
