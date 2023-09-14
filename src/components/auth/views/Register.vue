<template>
  <div class="container-login center-div-ui">
    <div class="row signin-content-login">
      <div class="col-6" style="padding: 0 100px">
        <h2 class="mb-5">Sign up</h2>
        <el-form
          ref="dataAccountRegister"
          :model="dataAccountRegister"
          :rules="rules"
        >
          <InputField
            propInput="name"
            typeInput="text"
            v-model="dataAccountRegister.name"
            placeholderInput="Your Name"
          />
          <InputField
            propInput="email"
            typeInput="text"
            v-model="dataAccountRegister.email"
            placeholderInput="Your Email"
          />
          <InputField
            propInput="password"
            typeInput="password"
            openVisibility="true"
            v-model="dataAccountRegister.password"
            placeholderInput="Password"
          />
          <InputField
            propInput="repeatPassword"
            typeInput="password"
            openVisibility="true"
            v-model="dataAccountRegister.repeatPassword"
            placeholderInput="Repeat your password"
          />
        </el-form>

        <div class="form-check mb-5">
          <input class="form-check-input" type="checkbox" />
            <label> I agree all statements in Terms of service </label>
        </div>

        <ButtonField
          classButton="btn btn-primary button__sign-up"
            nameButton="Register"
          typeButton="primary"
          :disabledButton="
            submitLogin || !dataAccountRegister.email || !dataAccountRegister.password
          "
          @click="actionRegister('dataAccountRegister')"
        />
      </div>
      <div class="col-6">
        <figure class="text-center">
          <input
            type="image"
            src="https://i.imgur.com/Go3mwjw.jpg"
            alt="description of image"
          />
        </figure>
        <router-link :to="{ path: '/login' }">
          <p class="text-center">I am already member</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { LOADING } from "@/utils/constant";
import { mapState, mapMutations } from "vuex";
import validateForm from "@/utils/validateForm";
import InputField from "@/components/common/InputField";
import ButtonField from "@/components/common/ButtonField";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  components: {
    InputField,
    ButtonField,
  },
  data() {
    const checkOldPasswordWithNewPassword = (rule, value, callback) => {
      if (value.length < 8) {
        callback(new Error("Độ dài tối thiểu của ô là 8"));
      } else if (!value.match(/[a-z]/)) {
        callback(new Error("Mật khẩu phải chứa một ký tự chữ thường"));
      } else if (!value.match(/[A-Z]/)) {
        callback(new Error("Mật khẩu phải chứa một ký tự viết hoa"));
      } else if (!value.match(/[0987654321]/)) {
        callback(new Error("Mật khẩu phải chứa một số"));
      } else if (!value.match(/[!@#$%^&"'*()\-_=+{};:,<.>]/)) {
        callback(new Error("Mật khẩu phải chứa một ký tự đặc biệt(!$%^&*-_=+;:,.><)"));
      } else {
        callback();
      }
    };
    const checkConfirmPassword = (rule, value, callback) => {
      if (value !== this.dataAccountRegister.password) {
        callback(new Error("Mật khẩu mới và mật khẩu xác nhận không khớp"));
      } else {
        callback();
      }
    };
    return {
      rules: {
        name: [{ validator: this.checkName }],
        email: [{ validator: this.checkEmail }],
        password: [{ validator: checkOldPasswordWithNewPassword }],
        repeatPassword: [{ validator: checkConfirmPassword }],
      },
      dataAccountRegister: {
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
      submitLogin: false,
    };
  },
  methods: {
    ...mapMutations({
      showLoading: LOADING,
    }),
    async actionRegister(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.showLoading(true);
          this.submitLogin = true;
          await this.$store.dispatch("storeAuthen/registerAccount", {
            vue: this,
            payload: this.dataAccountRegister,
          });
          if (!this.message) {
            window.localStorage.setItem(
              "x-Project-token",
              this.loginData.access_token
            );
            window.localStorage.setItem(
              "authLogin",
              JSON.stringify(this.loginData.user)
            );
            this.$router.push({ path: "/" });
          } else {
            this.$toast.error(this.message);
          }
          this.$store.commit("storeDataParam/MESSAGE", null);
          this.submitLogin = false;
          return this.showLoading(false);
        }
        return false;
      });
    },
  },
  mixins: [validateForm],
  computed: {
    ...mapState({
      loginData: (state) => state.storeAuthen.loginData,
    }),
  },
};
</script>

<style src="@/assets/css/auth.css"></style>
