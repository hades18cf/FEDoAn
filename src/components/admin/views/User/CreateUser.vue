<template>
  <div class="content-wrapper">
    <el-form
      ref="dataCreateUser"
      :model="dataCreateUser"
      status-icon
      :rules="rules"
      :label-position="labelPosition"
      label-width="200px"
      style="max-width: 460px"
    >
      <el-form-item label="Name" prop="name">
        <el-input v-model="dataCreateUser.name" type="text" />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="dataCreateUser.email" type="text" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="dataCreateUser.password" type="password  " />
      </el-form-item>
      <el-form-item label="PhoneNumber" prop="phoneNumber">
        <el-input v-model="dataCreateUser.phone_number" type="text  " />
      </el-form-item>
      <el-form-item label="Role">
        <el-radio-group v-model="roleUser">
          <el-radio label="admin">Admin</el-radio>
          <el-radio label="user">User</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-button
      class="textCreate"
      type="primary"
      @click="createDataUsers('dataCreateUser')"
      style="margin-left: 200px; margin-bottom: 30px"
    >
      Tạo
    </el-button>
    <br />
  </div>
</template>
<script>
import { LOADING } from "@/utils/constant";
import { mapMutations } from "vuex";

export default {
  name: "CreateUser",
  data() {
    return {
      rules: {
        name: [
          {
            required: true,
            message: "Please input name User",
          },
        ],
        email: [
          {
            required: true,
            message: "Please input email User",
          },
        ],
      },
      roleUser: "admin",
      dataCreateUser: {},
    };
  },
  methods: {
    ...mapMutations({
      showLoading: LOADING,
    }),
    async createDataUsers(dataCreateUser) {
      this.showLoading(true);
      await this.$refs[dataCreateUser].validate((valid) => {
        if (valid) {
          this.dataCreateUser.role = this.roleUser;
          this.$store.dispatch("storeUser/createDataUsers", {
            vue: this,
            dataCreateUsers: this.dataCreateUser,
          });
        }
        return false;
      });
      this.$router.push({ name: "User" });
      this.showLoading(false);
    },
  },
};
</script>
<style></style>
