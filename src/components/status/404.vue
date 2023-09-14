<template>
  <el-result>
    <template #icon>
      <el-image
        src="https://webbachthang.com/wp-content/uploads/2017/07/loi-404-la-gi.jpg"
      />
    </template>
    <template #extra>
      <router-link :to="{ path: '/' }">
        <el-button type="primary">Back</el-button>
      </router-link>
    </template>
  </el-result>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "404",
};
</script>

<style></style>
