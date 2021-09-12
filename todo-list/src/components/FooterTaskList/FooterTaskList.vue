<template>
  <div class="footer">
    <p>{{getTodoList.length}} items left</p>
    <a href="#">all</a>
    <a href="#">Active</a>
    <a href="#">Completed</a>
    <a href="#">Clear Completed</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FooterTaskList',
  computed: {
    ...mapGetters(['getTodoList']),
  },
};

</script>

<style scoped lang="scss">
.footer {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: var(--gray-placeholder);
  }

  a {
    text-decoration: none;
    color: var(--gray-placeholder);
  }
}
</style>
