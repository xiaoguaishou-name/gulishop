<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { reqCategoryList } from "@/api";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.getCategoryList();
  },
  methods: {
    getCategoryList() {
      this.$store.dispatch("getCategoryList");
    },
  // mounted() {
  //   reqCategoryList();
  // },
  }
}
</script>

<style lang="less" scoped></style>
