<template>
  <div class="content-wrapper">
    <el-form
      ref="informationUser"
      :model="informationUser"
      status-icon
      :rules="rules"
      :label-position="labelPosition"
      label-width="200px"
      style="max-width: 460px"
    >
      <el-form-item label="Name" prop="name">
        <el-input v-model="informationUser.name" type="text" />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="informationUser.email" type="text" />
      </el-form-item>
      <el-form-item label="Phone Number" prop="phoneNumber">
        <el-input v-model="informationUser.phone_number" type="text" />
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      @click="editDataUsers('dataEditUser')"
      style="margin-left: 200px; margin-bottom: 30px"
    >
      Sửa
    </el-button>
    <br />
  </div>
</template>

<script>
import { LOADING } from "@/utils/constant";
import { mapMutations } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "EditUser",
  data() {
    return {
      informationUser: JSON.parse(window.localStorage.getItem("authLogin")),
    };
  },
  methods: {
    ...mapMutations({
      showLoading: LOADING,
    }),
    async editDataUsers() {
      this.showLoading(true);
      this.$store.dispatch("storeUser/editDataUsers", {
        vue: this,
        dataEditUsers: this.informationUser,
        id: this.informationUser.id,
      });
      this.showLoading(false);
      return window.localStorage.setItem('authLogin', JSON.stringify(this.informationUser));
    },
  },
};
</script>

<style></style>
