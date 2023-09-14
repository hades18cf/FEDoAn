import Login from "@/components/auth/views/Login";
import Register from "@/components/auth/views/Register";
import NotFound404 from "@/components/status/404";
import LayoutAdmin from "@/components/admin/LayoutAdmin";
import Layout from "@/components/page/Layout";
import HomeAdmin from "@/components/admin/HomeAdmin";
import Widgets from "@/components/admin/views/Product/Widgets";
import Home from "@/components/page/Home";
import danhmuc from "@/components/admin/danhmuc";
import Product from "@/components/admin/Product";
import CreateProduct from "@/components/admin/views/Product/CreateProduct";
import EditProduct from "@/components/admin/views/Product/EditProduct";
import Profile from "@/components/layout/views/Profile";
import User from "@/components/admin/views/User/User";
import CreateUser from "@/components/admin/views/User/CreateUser";
import EditUser from "@/components/admin/views/User/EditUser";
import ChangePassword from "@/components/layout/views/ChangePassword";




import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    component: Layout,
    meta: {
      requiresAuth: true,
      accessedBy: ["user"],
    },
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
        meta: {
          requiresAuth: true,
          accessedBy: ["user"],
        },
      },
    ],
  },
  {
    path: "/",
    component: LayoutAdmin,
    meta: {
      requiresAuth: true,
      accessedBy: ["user"],
    },
    children: [
      {
        path: "home-admin",
        name: "HomeAdmin",
        component: HomeAdmin,
        meta: {
          requiresAuth: true,
          accessedBy: ["admin"],
        },
      },
      {
        path: "widgets",
        name: "Widgets",
        component: Widgets,
        meta: {
          requiresAuth: true,
          accessedBy: ["admin"],
        },
      },
      {
        path: "dashboard",
        name: "danhmuc",
        component: danhmuc,
        meta: {
          requiresAuth: true,
          accessedBy: ["admin"],
        },
      },
      {
        path: "product",
        name: "product",
        component: Product,
        meta: {
          requiresAuth: true,
          accessedBy: ["admin"],
        },
      },
      {
        path: "create-product",
        name: "CreateProduct",
        component: CreateProduct,
        meta: {
          requiresAuth: true,
          accessedBy: ["admin"],
        },
      },
      {
        path: "edit-product/:id",
        name: "EditProduct",
        component: EditProduct,
        meta: {
          requiresAuth: true,
          accessedBy: ["admin"],
        },
      },
      {
        path: "profile",
        name: "Profile",
        component: Profile,
        meta: {
          requiresAuth: true,
          accessedBy: ["admin"],
        },
      },
      {
        path: "user",
        name: "User",
        component: User,
        meta: {
          requiresAuth: true,
          accessedBy: ["admin"],
        },
      },
      {
        path: "create-user",
        name: "CreateUser",
        component: CreateUser,
        meta: {
          requiresAuth: true,
          accessedBy: ["admin"],
        },
      },
      {
        path: "edit-user/:id",
        name: "EditUser",
        component: EditUser,
        meta: {
          requiresAuth: true,
          accessedBy: ["admin"],
        },
      },
      {
        path: "change-password",
        name: "ChangePassword",
        component: ChangePassword,
        meta: {
          requiresAuth: true,
          accessedBy: ["admin"],
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    const scroll = {};
    if (to.meta.toTop) scroll.top = 0;
    if (to.meta.smoothScroll) scroll.behavior = "smooth";
    return scroll;
  },
});

router.beforeEach(async (to, from) => { }); // eslint-disable-line no-unused-vars

export default router;
