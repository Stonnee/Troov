import action from './actions';
import getter from './getters';
import mutation from './mutations';
import stat from './state';

/* export default {
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
} */

export const state = stat;
// SYNC
export const mutations = mutation;

// ASYNC
export const actions = action;

export const getters = getter;
