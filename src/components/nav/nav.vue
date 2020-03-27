<template>
  <div>
    <van-tabbar v-model="active" active-color="#ff9900" inactive-color="#000" >
      <van-tabbar-item icon="home-o"  replace to="/home">
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="apps-o"  replace to="/classify">
        分类
      </van-tabbar-item>
      <van-tabbar-item icon="cart-o"  replace to="/shoppingcar">
        购物车
      </van-tabbar-item>
      <van-tabbar-item icon="contact"  replace to="/admin">
        个人中心
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {},
  mounted() {
    const tabbar = window.location.hash.split('/')[1]
    console.log(window.location.hash.split('/')[1])
    if(tabbar == 'home'){
      this.active = 0
    }else if (tabbar == 'classify') {
      this.active = 1
    }else if (tabbar == 'shoppingcar') {
      this.active = 2
    }else{
      this.active = 3
    }
  },
  methods: {
    
  },
};
</script>


<style lang="stylus" scoped>
@import '../../stylus/index.styl'
  .text
    color $money
    width 100%
    height 100%
</style>