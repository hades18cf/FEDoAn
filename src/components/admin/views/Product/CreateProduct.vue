<template>
  <div class="content-wrapper">
    <el-form
      ref="dataCreateProduct"
      :model="dataCreateProduct"
      status-icon
      :rules="rules"
      :label-position="labelPosition"
      label-width="200px"
      style="max-width: 460px"
    >
      <el-form-item label="Name" prop="name">
        <el-input v-model="dataCreateProduct.name" type="text" />
      </el-form-item>
      <el-form-item label="Price" prop="price">
        <el-input v-model="dataCreateProduct.price" type="text" />
      </el-form-item>
      <el-form-item label="Like" prop="like">
        <el-input v-model="dataCreateProduct.like" type="text" />
      </el-form-item>
      <el-form-item label="Image" prop="image">
        <el-input v-model="dataCreateProduct.image" type="text" />
      </el-form-item>
    </el-form>
    <el-button
      class="textCreate"
      type="primary"
      @click="createDataProducts('dataCreateProduct')"
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
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CreateProduct",
  data() {
    return {
      rules: {
        name: [
          {
            required: true,
            message: "Please input name product",
          },
        ],
        price: [
          {
            required: true,
            message: "Please input price product",
          },
          // {
          //   type: "number",
          //   message: "Product must be a number",
          // },
        ],
      },
      dataCreateProduct: {},
    };
  },
  methods: {
    ...mapMutations({
      showLoading: LOADING,
    }),
    async createDataProducts(dataCreateProduct) {
      this.showLoading(true);
      await this.$refs[dataCreateProduct].validate((valid) => {
        if (valid) {
          this.$store.dispatch("storeProduct/createDataProducts", {
            vue: this,
            dataCreateProducts: this.dataCreateProduct,
          });
        }
        return false;
      });
      this.showLoading(false);
      this.$router.push({ name: "Widgets" });
    },
  },
};
</script>
<style></style>
