<template>
  <input class="input-text" type="text" :placeholder=text />
</template>

<script>
export default {
  name: 'Input',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
.input-text {
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  font: 16px 'Josefin Sans', sans-serif;
  color: var(--gray-placeholder);
  background: var(--text-white);
}
</style>
