<template>
  <div class="container-login center-div-ui">
    <div class="row signin-content-login">
      <div class="col-6">
        <figure class="text-center">
          <input
            type="image"
            src="https://i.imgur.com/bYFwtX7.jpg"
            alt="description of image"
          />
        </figure>
        <router-link :to="{ path: '/register' }">
          <p class="text-center">Create an account</p>
        </router-link>
      </div>
      <div class="col-6" style="padding: 0 100px">
        <h2 class="mb-5">Sign up</h2>
        <el-form
          ref="dataAccountLogin"
          :model="dataAccountLogin"
          :rules="rules"
        >
          <InputField
            propInput="email"
            typeInput="text"
            v-model="dataAccountLogin.email"
            placeholderInput="Your name"
          />
          <InputField
            propInput="password"
            typeInput="password"
            openVisibility="true"
            v-model="dataAccountLogin.password"
            placeholderInput="Password"
          />
        </el-form>

        <div class="form-check mb-5">
          <input class="form-check-input" type="checkbox" />
          <label>Remember me</label>
        </div>

        <ButtonField
          classButton="btn btn-primary button__sign-up"
          nameButton="Login"
          typeButton="primary"
          :disabledButton="
            submitLogin || !dataAccountLogin.email || !dataAccountLogin.password
          "
          @click="actionLogin('dataAccountLogin')"
        />
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
  name: "Login",
  components: {
    InputField,
    ButtonField,
  },
  data() {
    return {
      rules: {
        email: [{ validator: this.checkEmail }],
        password: [{ validator: this.checkPassword }],
      },
      dataAccountLogin: {
        email: "",
        password: "",
      },
      submitLogin: false,
    };
  },
  methods: {
    ...mapMutations({
      showLoading: LOADING,
    }),
    async actionLogin(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.showLoading(true);
          this.submitLogin = true;
          await this.$store.dispatch("storeAuthen/loginAccount", {
            vue: this,
            payload: this.dataAccountLogin,
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
