<template>
  <button class="checkmark"></button>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style scoped lang="scss">
.checkmark {
  background-color: transparent;
  padding: 12px;
  border-radius: 50%;
  border: 1px solid var(--gray);
  margin-right: 10px;
}
</style>
