<template>
  <div class="footer">
    <p>5 items left</p>
    <a href="#">all</a>
    <a href="#">Active</a>
    <a href="#">Completed</a>
    <a href="#">Clear Completed</a>
  </div>
</template>

<script>

export default {
  name: 'FooterTaskList',
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
