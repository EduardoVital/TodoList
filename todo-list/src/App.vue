<template>
  <Header msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Header from './components/Header/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
