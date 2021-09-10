<template>
  <div class="create-task">
    <Button />
    <Input text="Create a new todo..."/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Button from '../Button/Button.vue';
import Input from '../Input/Input.vue';

export default {
  name: 'Header',
  components: {
    Button,
    Input,
  },
  data() {
    return {
      task: '',
    };
  },
  computed: {
    ...mapGetters([
      'getTodoList',
    ]),
  },
  methods: {
    handleCreateNewTask() {
      const randomId = Math.floor(Math.random() * 1000);
      const newTask = {
        id: randomId,
        title: this.task,
        isActive: false,
      };

      if (!this.task) {
        // eslint-disable-next-line no-useless-return
        return;
      }

      this.getTodoList = [...this.getTodoList, newTask];

      this.task = '';
      this.isActive = false;
    },
  },
};
</script>

<style scoped lang="scss">
.create-task {
  max-width: 484px;
  margin: 0 auto;
  width: 100%;
  background: var(--text-white);
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
