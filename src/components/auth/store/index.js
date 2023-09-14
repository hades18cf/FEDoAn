/* eslint-disable vue/script-setup-uses-vars */
import {
  loginAccount,
  logoutAccount,
  registerAccount,
} from "@/components/auth/api/index";
import { CONSTANTS } from "@/utils/constant";
import Helper from "@/helpers/index";

const SUCCESS = "SUCCESS";
const LOGIN_ACCOUNT = "LOGIN_ACCOUNT";
const LOGOUT_ACCOUNT = "LOGOUT_ACCOUNT";
const REGISTER_ACCOUNT = "REGISTER_ACCOUNT";

export const state = {
  success: true,
  loginData: null,
  logoutData: null,
  registerData: null,
};

const mutations = {
  [SUCCESS](state, data) {
    state.success = data;
  },
  [LOGIN_ACCOUNT](state, data) {
    state.loginData = data;
  },
  [LOGOUT_ACCOUNT](state, data) {
    state.logoutData = data;
  },
  [REGISTER_ACCOUNT](state, data) {
    state.registerData = data;
  },
};

const getters = {};

const actions = {
  async loginAccount({ commit }, { vue, payload }) {
    let dataLogin = await loginAccount(payload);
    if (dataLogin.data.status === CONSTANTS.SUCCESS) {
      return commit(LOGIN_ACCOUNT, dataLogin.data.data);
    }

    return Helper.handleError(vue, dataLogin.data);
  },
  async logoutAccount({ commit }, { vue }) {
    let dataLogout = await logoutAccount();
    if (dataLogout.data.status === CONSTANTS.SUCCESS) {
      return commit(LOGOUT_ACCOUNT, dataLogout.data);
    }

    return Helper.handleError(vue, dataLogout.data);
  },
  async registerAccount({ commit }, { vue, payload }) {
    let dataRegister = await registerAccount(payload);
    if (dataRegister.data.status === CONSTANTS.SUCCESS) {
      return commit(REGISTER_ACCOUNT, dataRegister.data);
    }

    return Helper.handleError(vue, dataRegister.data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
