import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      { name: 'Cardio', selected: true },
      { name: 'Pectoraux', selected: true },
      { name: 'Abdos', selected: true },
      { name: 'Jambes', selected: true },
      { name: 'Bras', selected: true },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
