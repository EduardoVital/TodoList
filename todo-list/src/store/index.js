import { createStore } from 'vuex';

export default createStore({
  state: {
    todolist: [],
  },
  mutations: {
    SET_TODOLIST(state, newTask) {
      state.todolist = [...state.todolist, newTask];
    },
    SET_REMOVE_TASK(state, removeTask) {
      const removeItem = state.todolist.filter((item) => item.id !== removeTask);
      state.todolist = [...removeItem];
    },
    SET_CHANGE_STATUS(state, isCompleted) {
      const getStatusIsCompleted = state.todolist.map((task) => (task.id === isCompleted ? {
        ...task,
        isCompleted: !task.isCompleted,
      } : task));
      state.todolist = (getStatusIsCompleted);
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
  },
  getters: {
    getTodoList: (state) => state.todolist,
  },
});
