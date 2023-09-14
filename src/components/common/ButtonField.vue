<template>
  <div>
    <el-button :class="classButton" :type="typeButton" :disabled="disabledButton">{{
      nameButton
    }}</el-button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ButtonField",
  props: {
    classButton: {
      type: String,
      default: "",
    },
    nameButton: {
      type: String,
      default: "",
    },
    typeButton: {
      type: String,
      default: "",
    },
    disabledButton: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.button__sign-up {
  width: 115px !important;
  height: 50px !important;
  border-radius: 15px;
}
</style>
