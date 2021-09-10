import { createStore } from 'vuex';

export default createStore({
  state: {
    todolist: [
      {
        title: 'Javascript',
        id: 1,
        isActive: false,
      },
      {
        title: 'CSS',
        id: 2,
        isActive: false,
      },
      {
        title: 'HTML',
        id: 3,
        isActive: false,
      },
    ],
  },
  mutations: {
    SET_TODOLIST(state, payload) {
      state.todolist = payload;
    },
  },
  actions: {
    setTodoList({ commit }, payload) {
      commit('SET_TODOLIST', payload);
    },
  },
  getters: {
    getTodoList: (state) => state.todolist,
  },
});
