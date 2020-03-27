import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 一级路由
const Index = () => import('../components/index.vue')
const Detail = () => import('../components/page/detail.vue')
const Login = () => import('../components/page/login.vue')
const Registration = () => import('../components/page/registration.vue')

// 二级路由
const Home = () => import('@/components/nav/home.vue')
const Admin = () => import('../components/nav/admin.vue')
const Classify = () => import('../components/nav/classify.vue')
const ShoppingCar = () => import('../components/nav/shoppingCar.vue')

// // 商品详情二级路由
// const Evaluate = () => import('../components/detailNav/evaluate.vue')
// const GoodsDetal = () => import('../components/detailNav/goodsDetail.vue')



export default new Router({
  routes: [
    {
      path: '/index',
      component : Index,
      children : [
        {
          path : '/home',
          component : Home
        },
        {
          path : '/admin',
          component : Admin
        },
        {
          path : '/classify',
          component : Classify
        },
        {
          path : '/shoppingcar',
          component : ShoppingCar
        },
        {
          path : '',
          directives : '/home'
        }
      ]
    },
    {
      path : '/detail/:id',
      component : Detail,
    },
    {
      path : '/login',
      component : Login
    },
    {
      path : '/registration',
      component : Registration
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
