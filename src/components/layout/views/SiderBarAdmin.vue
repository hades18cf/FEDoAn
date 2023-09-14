<template>
  <div>
    <aside class="main-sidebar sidebar-dark-primary elevation-4 sidenav-fixed">
      <a href="../../index3.html" class="brand-link">
        <img
          src="../../../assets/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="../../../assets/dist/img/user2-160x160.jpg"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <router-link :to="{ name: 'Profile' }"> {{ informationUser.name }} </router-link>
          </div>
        </div>

        <el-menu
          active-text-color="#ffd04b"
          background-color="#343a40"
          class="el-menu-vertical-demo"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <span>Danh mục sản phẩm</span>
            </template>
            <router-link :to="{ name: 'Widgets' }">
              <el-menu-item index="1-1"> Tivi </el-menu-item>
            </router-link>

            <el-menu-item index="1-2">Dien Thoai</el-menu-item>
          </el-sub-menu>
          <router-link :to="{ name: 'User' }">
            <el-menu-item index="2"> Quản lý khách hàng </el-menu-item>
          </router-link>
        </el-menu>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "SiderBarAdmin",
  data() {
    return {
      informationUser: JSON.parse(window.localStorage.getItem("authLogin")),
    };
  },
};
</script>

<style>
.sidenav-fixed {
  position: fixed !important;
}
</style>
