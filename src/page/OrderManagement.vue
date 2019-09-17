<template>
  <el-row>
    <el-row>
      <el-radio-group v-model="radio1">
        <el-radio-button class="bt-bl" label="当日" @click="SwitchBtn(1)"></el-radio-button>
        <el-radio-button label="昨日" @click="SwitchBtn(2)"></el-radio-button>
        <el-radio-button label="当月" @click="SwitchBtn(3)"></el-radio-button>
        <el-radio-button class="bt-br" label="上月" @click="SwitchBtn(4)"></el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row class="main">
      <el-row>
        <el-col :span="24" class="collectData">
          <el-col :span="4">
            <div class="title">订货单</div>
            <div class="nums">
              <font>1</font>
              <span>笔</span>
            </div>
          </el-col>
          <el-col :span="4" class="br">
            <div class="title">退货单</div>
            <div class="nums">
              <font>0</font>
              <span>笔</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="title">订货金额</div>
            <div class="nums">
              <span>￥</span>
              <font>100.0</font>
            </div>
          </el-col>
          <el-col :span="4" class="br">
            <div class="title">退货金额</div>
            <div class="nums">
              <span>￥</span>
              <font>0</font>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="title">金额合计</div>
            <div class="nums">
              <span>￥</span>
              <font>100.0</font>
            </div>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
        <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
      </el-row>
    </el-row>
  </el-row>
</template>


<script>
export default {
  name: "OrderManagement",
  components: {},
  data() {
    return {
      radio1: "当日",
      // year: "",
      // month: "",
      // lastMonth: "",
      // today: "",
      // yesterday: "",
      dayLike: "",
      lastdayLike: "",
      monthLike: "",
      lastmonthLike: ""
    };
  },
  mounted() {
    this.drawLine(); //加载echarts
    this.getDay(); //获取日期
    this.getOrder(); //获取初始当日订单
  },
  methods: {
    SwitchBtn(v) {},
    //echart
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "订单柱状图" },
        tooltip: {},
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {},
        series: [
          {
            name: "订单",
            type: "line",
            data: [10, 20, 10, 2, 5, 11, 15],
            smooth: true //折线图为曲线
          }
        ]
      });
    },
    //获取时间
    getDay() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const lastMonth = date.getMonth();
      const today = date.getDate();
      const yesterday = date.getDate() - 1;
      this.dayLike = year + "-" + month + "-" + today;
      this.lastdayLike = year + "-" + month + "-" + yesterday;
      this.monthLike = year + "-" + month;
      this.lastmonthLike = year + "-" + lastMonth;
    },
    getOrder() {
      this.$axios
        .get("/api/userorder?Sql_flag=count&like=" + this.dayLike + "%")
        .then(res => {
          console.log(res.data);
        });
    }
  }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.main {
  border: 1px solid #efeff1;
}
.collectData {
  background-color: #f8f9fd;
}
.collectData .el-col-4,
.el-col-8 {
  height: 108px;
  text-align: center;
}
.collectData .title {
  line-height: 28px;
  margin-top: 30px;
  color: #96a6b6;
  font-size: 13px;
}
.collectData .nums font {
  color: #415161;
  font-size: 22px;
}
.collectData .nums span {
  color: #7b8aa1;
}
.collectData .br {
  border-right: 1px solid #eee;
}
/* 左右圆角按钮 */
.bt-bl {
  border-radius: 19px 0 0 19px;
}
.bt-br {
  border-radius: 0 19px 19px 0;
}
/* 按钮样式 */
.active {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.el-radio-button:nth-child(1) .el-radio-button__inner {
  border-radius: 19px 0 0 19px;
}
.el-radio-button:nth-child(4) .el-radio-button__inner {
  border-radius: 0 19px 19px 0;
}
</style>
