<template>
  <el-row>
    <el-row>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>查看商品</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-select v-model="searchValue" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-button @click="search(searchValue)" type="primary" icon="el-icon-search">搜索</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="class" label="商品分类"></el-table-column>
      <el-table-column prop="description" label="商品描述" min-width="180"></el-table-column>
      <el-table-column label="操作">
        <el-row class="center">
          <el-button type="primary" @click="dialogFormVisible = true" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
      </el-table-column>
    </el-table>
    <!-- 模态框 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <!-- <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>-->
        <ShelfShop></ShelfShop>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

  <script>
import ShelfShop from "./ShelfShop";
export default {
  name: "View",
  components: {
    ShelfShop
  },
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "120px",
      //搜索数据
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      searchValue: "",
      //初始化表单
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      // 表单数据
      tableData: [
        {
          name: "2016-05-02",
          class: "王小虎",
          description: "上海市普陀区金沙江路 1518 弄"
        },
        {
          name: "2016-05-04",
          class: "王小虎",
          description: "上海市普陀区金沙江路 1517 弄"
        },
        {
          name: "2016-05-01",
          class: "王小虎",
          description: "上海市普陀区金沙江路 1519 弄"
        },
        {
          name: "2016-05-03",
          class: "王小虎",
          description: "上海市普陀区金沙江路 1516 弄"
        },
        {
          name: "2016-05-02",
          class: "王小虎",
          description: "上海市普陀区金沙江路 1518 弄"
        },
        {
          name: "2016-05-04",
          class: "王小虎",
          description: "上海市普陀区金沙江路 1517 弄"
        },
        {
          name: "2016-05-01",
          class: "王小虎",
          description: "上海市普陀区金沙江路 1519 弄"
        },
        {
          name: "2016-05-03",
          class: "王小虎",
          description: "上海市普陀区金沙江路 1516 弄"
        },
        {
          name: "2016-05-02",
          class: "王小虎",
          description: "上海市普陀区金沙江路 1518 弄"
        },
        {
          name: "2016-05-04",
          class: "王小虎",
          description: "上海市普陀区金沙江路 1517 弄"
        },
        {
          name: "2016-05-01",
          class: "王小虎",
          description: "上海市普陀区金沙江路 1519 弄"
        },
        {
          name: "2016-05-03",
          class: "王小虎",
          description: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    search(searchValue) {
      console.log("您点击搜索了", searchValue);
    }
  }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.center {
  text-align: center;
}
</style>
