<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item>{{ message.first }}</el-breadcrumb-item>
    <el-breadcrumb-item>{{ message.second }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>


<script>
export default {
  name: "BreadCrumbs",
  components: {},
  // 子组件接收值
  props: {
    message: {
      type: Object, //类型也可以是多样 比如：String||Number
      required: true,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      first: "",
      second: ""
    };
  },
  methods: {}
};
</script>
