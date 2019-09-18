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
    <el-table
      :data="tableData"
      v-loading="shopLoading"
      element-loading-text="稍等马上就好哦！"
      border
      height="380px"
      style="width: 100%"
    >
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="price" label="商品价格"></el-table-column>
      <el-table-column prop="type" label="商品分类"></el-table-column>
      <el-table-column prop="description" label="商品描述" min-width="100"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-row class="center">
            <el-button type="primary" @click="editShop(scope.row.id)" icon="el-icon-edit" circle></el-button>
            <el-button
              v-if="scope.row.sales===1"
              @click="shelfShop(scope.row.id,'sell')"
              type="success"
              icon="el-icon-top"
              circle
            ></el-button>
            <el-button
              v-if="scope.row.sales===0"
              @click="downShop(scope.row.id,'nosell')"
              type="warning"
              icon="el-icon-bottom"
              circle
            ></el-button>
            <el-button type="danger" @click="delet(scope.row.id)" icon="el-icon-delete" circle></el-button>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <!-- 模态框 -->
    <el-dialog title="收货地址" :visible.sync="editShopDialog">
      <Shelf ref="ShelfChild"></Shelf>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelEdit()">取 消</el-button>
        <el-button type="primary" @click="confirmEdit()">确 定</el-button>
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
      shopLoading: false,
      HierarchicalMenu: { first: "商品管理", second: "查看商品" }, //父组件的数据
      editShopDialog: false,
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
    this.getShop(); //获取商品信息
    this.getType(); //获取商品分类
  },
  methods: {
    search(searchValue) {
      console.log("您点击搜索了", searchValue);
    },
    //删除函数
    delet(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log("确认删除商品", id);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          console.log("取消删除商品", id);
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //获取商品
    getShop() {
      this.shopLoading = true;
      this.$axios.get("/api/goodslist?Sql_falg=select").then(res => {
        console.log("获取商品", res);
        if (res.status === 200) {
          this.tableData = res.data.data;
          console.log("获取商品成功", this.tableData);
        } else {
          this.$message.error("获取商品信息失败");
        }
        this.shopLoading = false;
      });
    },
    // 获取分类
    getType() {
      this.$axios.get("/api/goodstype?Sql_flag=select").then(res => {
        console.log("获取分类", res.data.data);
        if (res.status === 200) {
          this.options = res.data.data;
          console.log("获取分类成功", res.data.data);
        } else {
          this.$message.error("获取分类信息失败");
        }
      });
    },
    // 修改商品
    editShop(id) {
      this.editShopDialog = true;
      console.log("您取打开了", id, "商品编辑框");
    },
    //确认修改
    confirmEdit() {
      let flag = this.$refs["ShelfChild"].validateForm(); //调用子组件的验证表单方法
      if (flag) {
        this.editShopDialog = false;
        const form = this.$refs["ShelfChild"].form; //子组件的表单数据
        console.log("校验成功");
      } else {
        console.log("表单不完整");
      }
    },
    //取消修改
    cancelEdit() {
      this.editShopDialog = false;
      console.log("您取消了编辑");
    },
    //上下架商品
    shelfShop(id, operating) {
      this.$axios
        .get("/api/goodslist?Sql_flag=" + operating + "&goodsId=" + id)
        .then(res => {
          console.log("上下架商品", res);
          if (res.status === 200) {
            this.getShop(); //获取表格信息
            this.$message("操作成功");
            console.log("操作成功", res.data.data);
          } else {
            this.$message.error("操作失败");
          }
        });
    },
    //下架商品
    downShop(id, operating) {
      this.$confirm("确认下架商品吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log("确认下架商品", id);
          this.shelfShop(id, operating);
        })
        .catch(() => {
          console.log("取消下架商品", id);
          this.$message({
            type: "info",
            message: "已取消下架商品。"
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
