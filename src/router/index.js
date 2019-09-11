import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/page/Login';
import index from '@/page/index';
import Classification from '@/page/shop/Classification'; // 设置分类
import ShelfShop from '@/page/shop/ShelfShop'; // 上架商品
import ViewShop from '@/page/shop/ViewShop'; // 查看商品
import CustomerManagement from '@/page/CustomerManagement'; // 客户管理
import OrderManagement from '@/page/OrderManagement'; // 订单管理

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      redirect: '/Login' // 默认为登陆页面
    },
    {
      path: '/Login',
      component: Login,
      name: '登录'
    },
    {
      path: '/index',
      component: index,
      name: '主页',
      children: [{
          path: '/',
          component: OrderManagement,
          name: '订单管理'
        },
        {
          path: '/Classification',
          component: Classification,
          name: '设置分类'
        },
        {
          path: '/ShelfShop',
          component: ShelfShop,
          name: '上架商品'
        },
        {
          path: '/ViewShop',
          component: ViewShop,
          name: '查看商品'
        },
        {
          path: '/CustomerManagement',
          component: CustomerManagement,
          name: '客户管理'
        },
        {
          path: '/OrderManagement',
          component: OrderManagement,
          name: '订单管理'
        }
      ]
    }
  ]
});
