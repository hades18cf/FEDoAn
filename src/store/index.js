import { createStore } from 'vuex'
import storeAuthen from "@/components/auth/store/index";
import storeProduct from "@/components/admin/store/index";
import storeUser from "@/components/admin/store/index";
import storeDataParam from "@/components/layout/store/index";
import { LOADING } from "@/utils/constant";
export default createStore({
  modules: {
    storeAuthen,
    storeProduct,
    storeDataParam,
    storeUser,
  },
  mutations: {
    [LOADING](state, payload) {
      state.showLoading = payload;
    },
  },
  state: {
    unsubscribes: []
  }
})