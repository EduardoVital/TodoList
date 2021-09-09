<template>
  <section>
    <div class="container-task">
      <Button />
      <span>Algum texto</span>
    </div>
    <FooterTaskList />
  </section>
</template>

<script>
import Button from '../Button/Button.vue';
import FooterTaskList from '../FooterTaskList/FooterTaskList.vue';

export default {
  name: 'TaskList',
  components: {
    Button,
    FooterTaskList,
  },
};
</script>

<style scoped lang="scss">
section {
  background: var(--text-white);
  max-width: 484px;
  margin: 0 auto;
  box-shadow: 0px 0px 3px 0px var(--gray);
  border-radius: 5px;
  position: relative;
  margin-top: -30px;

  .container-task {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--gray);

    span {
      color: var(--gray-placeholder);
    }
  }
}

</style>
