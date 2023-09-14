/* eslint-disable vue/script-setup-uses-vars */
import {
  getAllDataProducts,
  createDataProducts,
  editDataProducts,
  detailDataProducts,
  deleteDataProducts,
  getAllDataUsers,
  createDataUsers,
  editDataUsers,
  detailDataUsers,
  deleteDataUsers,
} from "@/components/admin/api/index";
import { CONSTANTS } from "@/utils/constant";
import Helper from "@/helpers/index";

const SUCCESS = "SUCCESS";
const GET_ALL_DATA_PRODUCTS = "GET_ALL_DATA_PRODUCTS";
const CREATE_DATA_PRODUCTS = "CREATE_DATA_PRODUCTS";
const EDIT_DATA_PRODUCTS = "EDIT_DATA_PRODUCTS";
const DETAIL_DATA_PRODUCTS = "DETAIL_DATA_PRODUCTS";

const GET_ALL_DATA_USERS = "GET_ALL_DATA_USERS";
const CREATE_DATA_USERS = "CREATE_DATA_USERS";
const EDIT_DATA_USERS = "EDIT_DATA_USERS";
const DETAIL_DATA_USERS = "DETAIL_DATA_USERS";

export const state = {
  success: true,
  getAllDataProducts: null,
  createDataProducts: null,
  editDataProducts: null,
  detailDataProducts: null,
  getAllDataUsers: null,
  createDataUsers: null,
  editDataUsers: null,
  detailDataUsers: null,
};

const mutations = {
  [SUCCESS](state, data) {
    state.success = data;
  },
  [GET_ALL_DATA_PRODUCTS](state, data) {
    state.getAllDataProducts = data;
  },
  [CREATE_DATA_PRODUCTS](state, data) {
    state.createDataProducts = data;
  },
  [EDIT_DATA_PRODUCTS](state, data) {
    state.editDataProducts = data;
  },
  [DETAIL_DATA_PRODUCTS](state, data) {
    state.detailDataProducts = data;
  },

  [GET_ALL_DATA_USERS](state, data) {
    state.getAllDataUsers = data;
  },
  [CREATE_DATA_USERS](state, data) {
    state.createDataUsers = data;
  },
  [EDIT_DATA_USERS](state, data) {
    state.editDataUsers = data;
  },
  [DETAIL_DATA_USERS](state, data) {
    state.detailDataUsers = data;
  },
};

const getters = {};

const actions = {
  async getDataProducts({ commit }, { vue }) {
    let dataProducts = await getAllDataProducts();
    if (dataProducts.data.status !== CONSTANTS.SUCCESS) {
      return commit(GET_ALL_DATA_PRODUCTS, dataProducts.data);
    }

    return Helper.handleError(vue, dataProducts.data);
  },
  async createDataProducts({ commit }, { vue, dataCreateProducts }) {
    let createProducts = await createDataProducts(dataCreateProducts);
    if (createProducts.data.status !== CONSTANTS.SUCCESS) {
      return commit(CREATE_DATA_PRODUCTS, createProducts.data);
    }

    return Helper.handleError(vue, createProducts.data);
  },
  async editDataProducts({ commit }, { vue, dataEditProducts, id }) {
    let editProducts = await editDataProducts(dataEditProducts, id);
    if (editProducts.data.status !== CONSTANTS.SUCCESS) {
      return commit(EDIT_DATA_PRODUCTS, editProducts.data);
    }
    return Helper.handleError(vue, editProducts.data);
  },
  async detailDataProducts({ commit }, { vue, id }) {
    let detailProducts = await detailDataProducts(id);
    if (detailProducts.data.status !== CONSTANTS.SUCCESS) {
      return commit(DETAIL_DATA_PRODUCTS, detailProducts.data);
    }

    return Helper.handleError(vue, detailProducts.data);
  },
  async deleteDataProducts({ commit }, { vue, id }) {
    console.log(commit, vue);
    return await deleteDataProducts(id);
  },

  async getDataUsers({ commit }, { vue }) {
    let dataUsers = await getAllDataUsers();
    if (dataUsers.data.status !== CONSTANTS.SUCCESS) {
      return commit(GET_ALL_DATA_USERS, dataUsers.data);
    }

    return Helper.handleError(vue, dataUsers.data);
  },
  async createDataUsers({ commit }, { vue, dataCreateUsers }) {
    let createUsers = await createDataUsers(dataCreateUsers);
    if (createUsers.data.status !== CONSTANTS.SUCCESS) {
      return commit(CREATE_DATA_USERS, createUsers.data);
    }

    return Helper.handleError(vue, createUsers.data);
  },
  async editDataUsers({ commit }, { vue, dataEditUsers, id }) {
    let editUsers = await editDataUsers(dataEditUsers, id);
    if (editUsers.data.status !== CONSTANTS.SUCCESS) {
      return commit(EDIT_DATA_USERS, editUsers.data);
    }
    return Helper.handleError(vue, editUsers.data);
  },
  async detailDataUsers({ commit }, { vue, id }) {
    let detailUsers = await detailDataUsers(id);
    if (detailUsers.data.status !== CONSTANTS.SUCCESS) {
      return commit(DETAIL_DATA_USERS, detailUsers.data);
    }

    return Helper.handleError(vue, detailUsers.data);
  },
  async deleteDataUsers({ commit }, { vue, id }) {
    console.log(commit, vue);
    return await deleteDataUsers(id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
