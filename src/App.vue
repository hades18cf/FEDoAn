<template>
  <div>
    <router-view />
    <div v-show="showLoading" class="loading">
      <Loading :progress="progress" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loading from "@/components/layout/views/Loading";


export default {
  name: "App",
  components: { Loading },
  computed: {
    ...mapState({
      progress: (state) => state.progress,
      showLoading: (state) => state.showLoading,
    }),
  },
};
</script>

<style src="./assets/css/adminlte.min.css"></style>
<style src="./assets/css/all.min.css"></style>
<style src="./assets/css/select2.min.css"></style>
<style src="./assets/dist/css/adminlte.css"></style>

