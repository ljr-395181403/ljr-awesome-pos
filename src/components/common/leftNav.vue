<template>
  <div class="left-nav">
    <ul>
      <router-link to="/">
        <li>
          <i class="icon iconfont icon-shouyintai"></i>
          <div>收银</div>
        </li>
      </router-link>
      <router-link to="/dianpu">
      <li>
        <i class="icon iconfont icon-dianpu"></i>
        <div>店铺</div>
      </li>
      </router-link>
      <router-link to="/huiyuan">
      <li>
        <i class="icon iconfont icon-huiyuan"></i>
        <div>会员</div>
      </li>
      </router-link>
      <router-link to="/tongji">
      <li>
        <i class="icon iconfont icon-tongji"></i>
        <div>统计</div>
      </li>
      </router-link>
      <router-link to="/shezhi">
      <li>
        <i class="icon iconfont icon-shezhi"></i>
        <div>设置</div>
      </li>
      </router-link>
      <router-link to="/vuex">
      <li>
        <i class="icon iconfont icon-tongji"></i>
        <div>vuex</div>
      </li>
      </router-link>
      <router-link to="/weishi">
      <li>
        <i class="icon iconfont icon-tongji"></i>
        <div>路由卫士</div>
      </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "leftNav",
  data() {
    return {
      msg: "leftNav"
    };
  }
};
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
    color: white;
    text-decoration: none;
}
.left-nav {
  color: #fff;
  font-size: 10px;
  height: 100%;
  background-color: #1d8ce0;
  float: left;
  width: 5%;
}
.iconfont {
  font-size: 24px;
}
.left-nav ul {
  padding: 0px;
  margin: 0px;
}
.left-nav li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
}
</style>
