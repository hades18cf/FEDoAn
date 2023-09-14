<template>
  <div>
    <el-form-item :prop="propInput">
      <el-input
        v-model="valueInput"
        :type="
          !openVisibility ? TypetypeInput : showPassword ? 'password' : 'text'
        "
        :class="classInput"
        :placeholder="placeholderInput"
      />
      <span v-if="openVisibility" @click="handleShowPassword">
        <span v-if="showPassword" class="icon-visibility material-icons-round"
          >visibility</span
        >
        <span v-else class="icon-visibility material-icons-round"
          >visibility_off</span
        >
      </span>
    </el-form-item>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "InputField",
  props: {
    modelValue: {
      type: String,
      required: true,
      default: "",
    },
    propInput: {
      type: String,
      default: "",
    },
    typeInput: {
      type: String,
      default: "",
    },
    classInput: {
      type: String,
      default: "",
    },
    placeholderInput: {
      type: String,
      default: "",
    },
    openVisibility: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      showPassword: true,
      valueInput: this.modelValue,
    };
  },
  watch: {
    valueInput(newVal) {
      this.$emit("update:modelValue", newVal);
    },
  },
  methods: {
    resetValueInput() {
      this.valueInput = "";
      this.showPassword = true;
    },
    handleShowPassword() {
      return (this.showPassword = !this.showPassword);
    },
  },
};
</script>

<style>
.icon-visibility {
  top: 5px;
  right: 10px;
  cursor: pointer;
  position: absolute;
}
</style>
