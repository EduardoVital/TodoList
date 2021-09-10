import { createStore } from 'vuex';

export default createStore({
  state: {
    todolist: [],
  },
  mutations: {
    SET_TODOLIST(state, newTask) {
      state.todolist = [...state.todolist, newTask];
    },
  },
  actions: {
    setTodoList({ commit }, newTask) {
      commit('SET_TODOLIST', newTask);
    },
  },
  getters: {
    getTodoList: (state) => state.todolist,
  },
});
