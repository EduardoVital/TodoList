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
  },
  actions: {
    setTodoList({ commit }, newTask) {
      commit('SET_TODOLIST', newTask);
    },
    setRemoveTask({ commit }, removeTask) {
      commit('SET_REMOVE_TASK', removeTask);
    },
  },
  getters: {
    getTodoList: (state) => state.todolist,
  },
});
