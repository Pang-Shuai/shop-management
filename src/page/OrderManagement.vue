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
    <!-- <el-row>
      <el-button-group>
        <el-button class="bt-bl" v-bind:class="{ active: isActive1 }" @click="SwitchBtn(1)">当日</el-button>
        <el-button v-bind:class="{ active: isActive2 }" @click="SwitchBtn(2)">昨日</el-button>
        <el-button v-bind:class="{ active: isActive3 }" @click="SwitchBtn(3)">当月</el-button>
        <el-button v-bind:class="{ active: isActive4 }" class="bt-br" @click="SwitchBtn(4)">上月</el-button>
      </el-button-group>
    </el-row>-->
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
            <div class="title">订货单</div>
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
  mounted() {
    this.drawLine();
  },
  data() {
    return {
      radio1: "当日"
    };
  },
  methods: {
    SwitchBtn(v) {},
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
