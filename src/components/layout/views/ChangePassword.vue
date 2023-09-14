<template>
  <div class="content-wrapper">
    <el-form
      ref="dataEditUser"
      :model="dataEditUser"
      status-icon
      :rules="rules"
      :label-position="labelPosition"
      label-width="100px"
      style="max-width: 460px"
    >
      <el-form-item label="Mật khẩu cũ" prop="oldpassword">
        <el-input type="text" />
      </el-form-item>
      <el-form-item label="Mật khẩu mới" prop="password">
        <el-input v-model="dataEditUser.password" type="text" />
      </el-form-item>
      <el-form-item label="Xác nhận lại mật khẩu" prop="oldpassword">
        <el-input type="text" />
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="editDataUsers('dataEditUser')">
      Sửa
    </el-button>
    <br />
  </div>
</template>
<script>
import { LOADING } from "@/utils/constant";
import { mapState, mapMutations } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "EditUser",
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
          // {
          //   type: "number",
          //   message: "User must be a number",
          // },
        ],
      },
      dataEditUser: {},
    };
  },
  created() {
    this.detailDataUsers();
  },
  methods: {
    ...mapMutations({
      showLoading: LOADING,
    }),
    async editDataUsers(dataEditUser) {
      this.showLoading(true);
      this.$refs[dataEditUser].validate((valid) => {
        if (valid) {
          this.$store.dispatch("storeUser/editDataUsers", {
            vue: this,
            dataEditUsers: this.dataEditUser,
            id: this.$route.params.id,
          });
        }
        return false;
      });
      this.$router.push({ name: "User" });
      this.showLoading(false);
    },
    async detailDataUsers() {
      this.showLoading(true);
      await this.$store.dispatch("storeUser/detailDataUsers", {
        vue: this,
        id: this.$route.params.id,
      });
      this.dataEditUser = this.detailUserData;
      this.showLoading(false);
    },
  },
  computed: {
    ...mapState({
      detailUserData: (state) => state.storeUser.detailDataUsers,
    }),
  },
};
</script>
<style></style>
