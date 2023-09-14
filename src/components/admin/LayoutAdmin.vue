<template>
  <div>
    <HeaderAdmin />
    <SiderBarAdmin />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import HeaderAdmin from "@/components/layout/views/HeaderAdmin";
import SiderBarAdmin from "@/components/layout/views/SiderBarAdmin";
import Footer from "@/components/layout/views/Footer";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'LayoutAdmin',
  components: {
    HeaderAdmin,
    SiderBarAdmin,
    Footer,
  },
}
</script>

<style>
</style>
