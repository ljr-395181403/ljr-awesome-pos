<template>
  <div>
    <h3 style="color:red;">要想进入路由卫士，必须改变登录为1，相当于登录</h3>
    <h3>vuex的登录状态</h3>
    <h3>当状态为1时可以进入路由卫士页面</h3>
    <h3>当前登录状态为：{{$store.state.loginState}}</h3>
    <p><el-button type="success" @click="$store.commit('changeLoginState')">改变登录状态</el-button></p>
  </div>
</template>

<script>
import store from "@/vuex/store";
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  },
  store
};
</script>