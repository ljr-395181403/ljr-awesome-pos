<template>
  <div class="pos">
    <el-row>
      <!-- 左边订单栏 -->
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="goodsName" label="商品"></el-table-column>
              <el-table-column prop="count" label="量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="delOneOrder(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <p>
                <small>数量：</small>{{totalCount}}&nbsp;&nbsp;&nbsp;&nbsp;
                <small>金额：</small>{{totalMoney}}
            </p>
            <div style="margin-top:10px;">
              <el-button type="warning" @click="addOrder()">加入订单</el-button>
              <el-button type="danger" @click="delAllOrder()">清空</el-button>
              <el-button type="success" @click="checkout()">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="订单">订单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <!-- 右边产品栏 -->
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="of in oftenGoods" @click="addOrderList(of)" style="cursor: pointer;">
                <span>{{of.goodsName}}</span>
                <span class="o-price">￥{{of.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <ul class="cookList">
                <li v-for="tg in type0Goods" @click="addOrderList(tg)">
                  <span class="foodImg">
                    <img :src="tg.goodsImg" width="100px" height="100px">
                  </span>
                  <span class="foodName">{{tg.goodsName}}</span>
                  <span class="foodPrice">￥{{tg.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class="cookList">
                <li v-for="tg in type1Goods" @click="addOrderList(tg)">
                  <span class="foodImg">
                    <img :src="tg.goodsImg" width="100px" height="100px">
                  </span>
                  <span class="foodName">{{tg.goodsName}}</span>
                  <span class="foodPrice">￥{{tg.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class="cookList">
                <li v-for="tg in type2Goods" @click="addOrderList(tg)">
                  <span class="foodImg">
                    <img :src="tg.goodsImg" width="100px" height="100px">
                  </span>
                  <span class="foodName">{{tg.goodsName}}</span>
                  <span class="foodPrice">￥{{tg.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class="cookList">
                <li v-for="tg in type3Goods" @click="addOrderList(tg)">
                  <span class="foodImg">
                    <img :src="tg.goodsImg" width="100px" height="100px">
                  </span>
                  <span class="foodName">{{tg.goodsName}}</span>
                  <span class="foodPrice">￥{{tg.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "pos",
  data() {
    return {
      // 表格数据
      tableData: [],
      // 常用商品数据
      oftenGoods: [],
      // 分类商品数据
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalCount: 0,
      totalMoney: 0
    };
  },
  // 创建页面的生命周期
  created() {
    axios
      .get("http://47.107.227.87:8081/getOtherGoods")
      .then(response => {
        // console.log(response.data);
        this.oftenGoods = response.data;
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
    //读取分类商品列表
    axios
      .get("http://47.107.227.87:8081/getClassificationGoods")
      .then(response => {
        //  console.log(response);
        //this.oftenGoods=response.data;
        this.type0Goods = response.data[0];
        this.type1Goods = response.data[1];
        this.type2Goods = response.data[2];
        this.type3Goods = response.data[3];
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  // 完成页面的生命周期
  mounted: function() {
    var orderHeight = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderHeight + "px";
  },
  methods: {
    //添加订单列表的方法
    addOrderList(goods) {
      this.totalCount = 0; //汇总数量清0
      this.totalMoney = 0;
      let isHave = false;
      //判断是否这个商品已经存在于订单列表
      for (let i = 0; i < this.tableData.length; i++) {
        // console.log(this.tableData[i].goodsId);
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true; //存在
        }
      }
      //根据isHave的值判断订单列表中是否已经有此商品
      if (isHave) {
        //存在就进行数量添加
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++;
        //console.log(arr);
      } else {
        //不存在就推入数组
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }
      //进行数量和价格的汇总计算
      this.tableData.forEach(element => {
        this.totalCount += element.count;
        this.totalMoney = this.totalMoney + element.price * element.count;
      });
    },
    // 删除单个订单
    delOneOrder(goods) {
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
      this.getAllMoney();
    },
    // 删除全部订单
    delAllOrder() {
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    //汇总数量和金额
    getAllMoney() {
      this.totalCount = 0;
      this.totalMoney = 0;
      if (this.tableData) {
        this.tableData.forEach(element => {
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney + element.price * element.count;
        });
      }
    },
    // 加入订单方法
    addOrder() {
      this.$message({
        message: "暂无加入订单方法!",
        type: "error"
      });
    },
    // 结账方法
    checkout() {
      if (this.totalCount != 0) {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message({
          message: "结账成功，欢迎下次光临!",
          type: "success"
        });
      } else {
        this.$message.error("不能为空，请选择商品！");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
}
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
}
.o-price {
  color: #58b7ff;
}
.goods-type {
  clear: both;
}
.cookList li {
  list-style: none;
  width: 200px;
  border: 1px solid #e5e9f2;
  height: 100px;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 10px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 100px;
  height: 100px
}
.foodName {
  font-size: 18px;
  color: brown;
  text-align: left;
  width: 100px;
}
.foodPrice {
  font-size: 16px;
  text-align: left;
  padding-top: 10px;
  width: 100px;
}
</style>
