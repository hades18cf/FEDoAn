<template>
  <div class="content-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">DANH MUC SAN PHAM</h3>
            </div>

            <div class="card-body">
              <div
                id="example2_wrapper"
                class="dataTables_wrapper dt-bootstrap4"
              >
                <div class="row">
                  <div class="col-sm-12 col-md-6"></div>
                  <div class="col-sm-12 col-md-6"></div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <el-table :data="tableData" style="width: 100%">
                      <el-table-column prop="name" label="Name" width="180" />
                      <el-table-column prop="price" label="Price" />
                      <el-table-column prop="like" label="Like" />
                      <el-table-column prop="image" label="Image">
                        <template #default="data">
                          <img
                            :src="data.row.image"
                            style="width: 150px; height: 100px"
                          />
                        </template>
                      </el-table-column>
                      <el-table-column label="Task">
                        <template #default="data">
                          <router-link :to="{ name: 'CreateProduct' }">
                            <button type="submit" class="btn btn-success">
                              <span class="material-icons-round">add</span>
                            </button></router-link
                          >
                          <router-link
                            :to="{
                              name: 'EditProduct',
                              params: { id: data.row.id },
                            }"
                          >
                            <button
                              type="submit"
                              class="btn btn-default btn-flat"
                            >
                              <span class="material-icons-round">edit</span>
                            </button>
                          </router-link>
                          <button
                            type="submit"
                            class="btn btn-danger"
                            @click="
                              handleIdDelete(data.row.id);
                              dialogVisible = true;
                            "
                          >
                            <span class="material-icons-round">delete</span>
                          </button>
                        </template>
                      </el-table-column>
                    </el-table>

                    <el-dialog v-model="dialogVisible" title="Tips" width="30%">
                      <span>Bạn có chắc chắn muốn xoá?</span>
                      <template #footer>
                        <span class="dialog-footer">
                          <el-button @click="dialogVisible = false"
                            >Cancel</el-button
                          >
                          <el-button
                            type="primary"
                            @click="
                              deleteDataProduct(idDelete);
                              dialogVisible = false;
                            "
                          >
                            Confirm
                          </el-button>
                        </span>
                      </template>
                    </el-dialog>
                  </div>
                </div>
                <el-pagination
                  :page-size="20"
                  :pager-count="11"
                  layout="prev, pager, next"
                  :total="1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LOADING } from "@/utils/constant";
import { mapState, mapMutations } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Widgets",
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      idDelete: null,
    };
  },
  methods: {
    ...mapMutations({
      showLoading: LOADING,
    }),
    async handlegetDataProducts() {
      this.showLoading(true);
      await this.$store.dispatch("storeProduct/getDataProducts", {
        vue: this,
      });
      this.tableData = this.listProduct;
      this.showLoading(false);
    },
    async deleteDataProduct(id) {
      this.showLoading(true);
      await this.$store.dispatch("storeProduct/deleteDataProducts", {
        vue: this,
        id: id,
      });
      this.handlegetDataProducts();
      this.showLoading(false);
    },
    handleIdDelete(id) {
      return (this.idDelete = id);
    },
  },
  created() {
    this.handlegetDataProducts();
  },
  computed: {
    ...mapState({
      listProduct: (state) => state.storeProduct.getAllDataProducts,
    }),
  },
};
</script>

<style>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
