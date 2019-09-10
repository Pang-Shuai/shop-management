<template>
  <el-row>
    <el-row>
      <BreadCrumbs :message="HierarchicalMenu"></BreadCrumbs>
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
          <el-button type="danger" @click="delet()" icon="el-icon-delete" circle></el-button>
        </el-row>
      </el-table-column>
    </el-table>
    <!-- 模态框 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <Shelf ref="ShelfChild"></Shelf>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm()">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

  <script>
import BreadCrumbs from "../../components/BreadCrumbs"; //面包屑
import Shelf from "../../components/Shelf"; //组件

export default {
  name: "ViewShop",
  components: {
    BreadCrumbs,
    Shelf
  },
  data() {
    return {
      HierarchicalMenu: { first: "商品管理", second: "查看商品" }, //父组件的数据
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
    },
    //模态框确定按钮
    submitForm() {
      let flag = this.$refs["ShelfChild"].validateForm(); //调用子组件的验证表单方法
      if (flag) {
        this.dialogFormVisible = false;
      } else {
      }
    },
    //删除函数
    delet() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log("这是确认时调用的函数");
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
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
