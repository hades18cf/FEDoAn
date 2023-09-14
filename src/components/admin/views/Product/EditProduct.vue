<template>
  <div class="content-wrapper">
    <el-form
      ref="dataEditProduct"
      :model="dataEditProduct"
      status-icon
      :rules="rules"
      :label-position="labelPosition"
      label-width="200px"
      style="max-width: 460px"
    >
      <el-form-item label="Name" prop="name">
        <el-input v-model="dataEditProduct.name" type="text" />
      </el-form-item>
      <el-form-item label="Price" prop="price">
        <el-input v-model="dataEditProduct.price" type="text" />
      </el-form-item>
      <el-form-item label="Like" prop="like">
        <el-input v-model="dataEditProduct.like" type="text" />
      </el-form-item>
      <el-form-item label="Image" prop="image">
        <el-input v-model="dataEditProduct.image" type="text" />
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      @click="editDataProducts('dataEditProduct')"
      style="margin-left: 200px; margin-bottom: 30px"
    >
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
  name: "EditProduct",
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
      dataEditProduct: {},
    };
  },
  created() {
    this.detailDataProducts();
  },
  methods: {
    ...mapMutations({
      showLoading: LOADING,
    }),
    async editDataProducts(dataEditProduct) {
      this.showLoading(true);
      this.$refs[dataEditProduct].validate((valid) => {
        if (valid) {
          this.$store.dispatch("storeProduct/editDataProducts", {
            vue: this,
            dataEditProducts: this.dataEditProduct,
            id: this.$route.params.id,
          });
        }
        return false;
      });
      this.$router.push({ name: "Widgets" });
      this.showLoading(false);
    },
    async detailDataProducts() {
      this.showLoading(true);
      await this.$store.dispatch("storeProduct/detailDataProducts", {
        vue: this,
        id: this.$route.params.id,
      });
      this.dataEditProduct = this.detailProductData;
      this.showLoading(false);
    },
  },
  computed: {
    ...mapState({
      detailProductData: (state) => state.storeProduct.detailDataProducts,
    }),
  },
};
</script>
<style></style>
