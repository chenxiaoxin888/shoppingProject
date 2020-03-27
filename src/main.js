// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入vuex
import store from './store'

// 引入rem.js
import './assets/js/rem.js'

// 引入css 清除默认样式
import "./assets/css/reset.css"

// 引入 Vant库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 引入全局过滤器
import comfilters from './filter/index'
for(let i in comfilters){
  console.log(i)
  Vue.filter( "i" , comfilters[i])
}

router.beforeEach((to,from,next) => {

  let token = sessionStorage.getItem('token')
  if(to.path === '/login'){
    next()
    return
  }else if(to.path ==='/registration'){
    next()
    return
  }else if(token){
    next()
    return
  }else{
    next('/login')
    return
  }


})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
