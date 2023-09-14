/* eslint-disable vue/script-setup-uses-vars */
const MESSAGE = "MESSAGE";

export const state = {
  message: null,
};

const getters = {};

const mutations = {
  [MESSAGE](state, data) {
    state.message = data;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
