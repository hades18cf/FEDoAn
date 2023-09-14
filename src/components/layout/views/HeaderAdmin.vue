<template>
  <div>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item d-none d-sm-inline-block">
          <a href="../home-admin" class="nav-link" style="font-weight: bold"
            >Home</a
          >
        </li>
      </ul>

      <!-- Right navbar links -->
      <div class="navbar-nav ml-auto">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <el-avatar
              :size="40"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <router-link :to="{ name: 'Profile' }">
                <el-dropdown-item class="clearfix"> Profile </el-dropdown-item>
              </router-link>

              <el-dropdown-item class="clearfix">
                <router-link :to="{ name: 'ChangePassword' }">
                  Đổi mật khẩu
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item class="clearfix">
                <ButtonField
                  nameButton="Logout"
                  typeButton="primary"
                  @click="actionLogout()"
                />
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </nav>
  </div>
</template>

<script>
import { LOADING } from "@/utils/constant";
import { mapMutations } from "vuex";
import ButtonField from "@/components/common/ButtonField";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HeaderAdmin",
  components: {
    ButtonField,
  },
  methods: {
    ...mapMutations({
      showLoading: LOADING,
    }),
    async actionLogout() {
      this.showLoading(true);
      await this.$store.dispatch("storeAuthen/logoutAccount", {
        vue: this,
      });
      if (!this.message) {
        window.localStorage.removeItem("x-Project-token");
        window.localStorage.removeItem("authLogin");
        this.$router.push({ path: "/" });
      } else {
        this.$toast.error(this.message);
      }
      this.$store.commit("storeDataParam/MESSAGE", null);
      return this.showLoading(false);
    },
  },
};
</script>
<style></style>
