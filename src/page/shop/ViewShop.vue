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
            :key="item.id"
            :label="item.classifyName"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-button @click="search(searchValue)" type="primary" icon="el-icon-search">搜索</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border height="380px" style="width: 100%">
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="price" label="商品价格"></el-table-column>
      <el-table-column prop="type" label="商品分类"></el-table-column>
      <el-table-column prop="description" label="商品描述" min-width="100"></el-table-column>
      <el-table-column label="操作">
        <el-row class="center">
          <el-button type="primary" @click="dialogFormVisible = true" icon="el-icon-edit" circle></el-button>
          <el-button type="success" icon="el-icon-top" circle></el-button>
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
      options: [],
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
      tableData: []
    };
  },
  mounted() {
    this.getShop(); //获取表格信息
    this.getType(); //获取商品分类
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
    },
    //获取商品
    getShop() {
      this.$axios.get("/api/goodslist?Sql_falg=select").then(res => {
        this.tableData = res.data.data;
      });
    },
    // 获取分类
    getType() {
      this.$axios.get("/api/goodstype?Sql_flag=select").then(res => {
        this.options = res.data.data;
        console.log(res.data.data);
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
