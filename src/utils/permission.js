import router from "@/router";

router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem("x-Project-token");
  let authLogin = JSON.parse(localStorage.getItem("authLogin"));

  if (!token && to.path === "/") {
    return next({ path: "/login" });
  }

  if (token && (to.path === "/" || to.name === "Login" || to.name === "Register")) {
    if (authLogin.role === "user") {
      return next({ name: "Home" });
    } else {
      return next({ name: "HomeAdmin" });
    }
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      return next({
        name: "Login",
      });
    }

    if (to.meta.accessedBy && to.meta.accessedBy.indexOf(authLogin.role) === -1) {
      if (authLogin.role === "user") {
        return next({ name: "Home" });
      } else {
        return next({ name: "HomeAdmin" });
      }
    }
  }

  return next();
});
