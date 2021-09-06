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
  <!-- Transformar em componente -->
  <div class="create-task">
    <button class="checkbox"></button>
    <input class="input-text" type="text" placeholder="Create a new todo...">
  </div>
  <!--  -->
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
  height: 600px;
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

.create-task {
  max-width: 484px;
  margin: 0 auto;
  width: 100%;
  background: white;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .input-text {
    width: 100%;
    outline: none;
    border: none;
    font-size: 16px;
    font: 16px "Poppins", Arial, sans-serif;
    color: var(--gray-placeholder);
  }

  .checkbox {
    background-color: transparent;
    padding: 12px;
    border-radius: 50%;
    border: 1px solid var(--gray);
    margin-right: 10px;
  }
}
</style>
