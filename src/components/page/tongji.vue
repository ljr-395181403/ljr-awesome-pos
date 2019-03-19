<template>
<div>
  <p>評分</p>
<el-rate
    v-model="value3"
    show-text>
  </el-rate>
  <br/><br/><br/>
  <p>顏色選取器</p>
  <div class="block">
  <p class="demonstration">有默认值</p>
  <el-color-picker v-model="color1"></el-color-picker>
</div>
<div class="block">
  <p class="demonstration">无默认值</p>
  <el-color-picker v-model="color2"></el-color-picker>
</div>
</div>
  
</template>



<script>
  export default {
    data() {
      return {
        value3: null,
        color1: '#409EFF',
        color2: null
      }
    }
  }
</script>



