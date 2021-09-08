<template>
    <div class="create-task">
        <Button />
        <Input text="Create a new todo..."/>
    </div>
</template>

<script>
import Button from '../Button/Button.vue';
import Input from '../Input/Input.vue';

export default {
  name: 'Header',
  components: {
    Button,
    Input,
  },
};
</script>

<style scoped lang="scss">
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
}
</style>
