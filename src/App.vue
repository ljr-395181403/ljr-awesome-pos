
<template>
  <div id="app">
    <leftNav></leftNav>
    <div id="routerView">
      <transition name="el-zoom-in-center">
      <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import leftNav from "@/components/common/leftNav";
export default {
  name: "app",
  components: {
    leftNav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#routerView {
  float: left;
  width: 95%;
}
</style>
