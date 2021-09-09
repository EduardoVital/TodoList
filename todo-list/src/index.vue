<template>
  <Header/>
  <TaskList />
</template>

<script>
import Header from './components/Header/Header.vue';
import TaskList from './components/TaskList/TaskList.vue';

export default {
  name: 'Index',
  components: {
    Header,
    TaskList,
  },
};
</script>
