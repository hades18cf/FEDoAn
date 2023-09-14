export default {
  handleError(vue, data) {
    if (data.errorCode === 400) {
      return vue.$store.commit("storeDataParam/ERROR_CODE", data.errorCode);
    }
    if (data.errorCode === 401) {
      window.localStorage.removeItem("x-Project-token");

      vue.$store.commit("storeDataParam/MESSAGE", data.message);
      const redirectTo = vue.$route.query.redirectTo || {
        name: "SignIn",
      };
      return vue.$router.push(redirectTo);
    }
    if (data.errorCode === 402) {
      window.localStorage.removeItem("x-Project-token");

      vue.$store.commit("storeDataParam/MESSAGE", data.message);
      const redirectTo = vue.$route.query.redirectTo || {
        name: "SignIn",
      };
      return vue.$router.push(redirectTo);
    }
    if (data.errorCode === 403) {
      return vue.$store.commit("storeDataParam/ERROR_CODE", data.errorCode);
    }
    if (data.errorCode === 404) {
      vue.$store.commit("storeDataParam/MESSAGE", data.message);
      const redirectTo = vue.$route.query.redirectTo || {
        name: "NotFound404",
      };
      return vue.$router.push(redirectTo);
    }
    if (data.errorCode === 406) {
      return vue.$store.commit("storeDataParam/ERROR_CODE", data.errorCode);
    }
    if (data.errorCode === 409) {
      return vue.$store.commit("storeDataParam/ERROR_CODE", data.errorCode);
    }
    if (data.errorCode === 410) {
      return vue.$store.commit("storeDataParam/ERROR_CODE", data.errorCode);
    }
    if (data.errorCode === 411) {
      return vue.$store.commit("storeDataParam/ERROR_CODE", data.errorCode);
    }
    if (data.errorCode != 0) {
      return vue.$store.commit("storeDataParam/MESSAGE", data.message);
    }
  },
};