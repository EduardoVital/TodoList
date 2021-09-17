import { createStore } from 'vuex';

export default createStore({
  state: {
    todoList: [],
  },
  mutations: {
    SET_TODOLIST(state, newTask) {
      state.todoList = [...state.todoList, newTask];
    },
    SET_REMOVE_TASK(state, removeTask) {
      const removeItem = state.todoList.filter((item) => item.id !== removeTask);
      state.todoList = [...removeItem];
    },
    SET_CHANGE_STATUS(state, isCompleted) {
      const getStatusIsCompleted = state.todoList.map((task) => (task.id === isCompleted ? {
        ...task,
        isCompleted: !task.isCompleted,
      } : task));
      state.todoList = (getStatusIsCompleted);
    },
    SET_CLEAR_COMPLETED(state) {
      const clearCompletedTodos = state.todoList.filter((todo) => todo.isCompleted !== true);
      state.todoList = [...clearCompletedTodos];
    },
  },
  actions: {
    setTodoList({ commit }, newTask) {
      commit('SET_TODOLIST', newTask);
    },
    setRemoveTask({ commit }, removeTask) {
      commit('SET_REMOVE_TASK', removeTask);
    },
    setChangeStatus({ commit }, isCompleted) {
      commit('SET_CHANGE_STATUS', isCompleted);
    },
    setClearCompletedTodos({ commit }) {
      commit('SET_CLEAR_COMPLETED');
    },
  },
  getters: {
    getTodoList: (state) => state.todoList,
    getFilterCompleted: (state) => state.todoList.filter((todos) => todos.isCompleted === true),
    getFilterActive: (state) => state.todoList.filter((todos) => todos.isCompleted === false),
    // getClearCompleted,
  },
});
