<template>
  <div class="box">
    <div class="islogin" v-if = "isAdmin">
      <div class="aminBox">
        <div class="adminTitle">
          <div class="ico">
            <van-icon name="chat-o" class="adminIco" />
          </div>
          <div class="adminText">个人中心</div>
          <div class="ico">
            <van-icon name="comment-o" class="adminIco" info="99+" />
          </div>
        </div>
      </div>
      <!-- 头像 -->
      <div class="headPhoto">
        <div class="photoBox">
          <img src alt />
        </div>
        <p class="adminLogin">点击登录</p>
      </div>
      <!-- 收藏 -->
      <div class="collect">
        <div class="myCollect">
          <van-icon name="like-o" class="colIco" />
          <span class="colText">我的收藏</span>
          <span class="colNum">(5)</span>
        </div>
      </div>
      <!-- 订单信息 -->
      <div class="order">
        <div class="myOrder">
          <div class="orderText">我的订单</div>
          <div class="allOrder">查看全部订单</div>
        </div>
        <div class="orderBox">
          <van-tabbar class="orderItem" v-model="active">
            <van-tabbar-item icon="pending-payment" info="5">
              <span class="iText">待付款</span>
            </van-tabbar-item>
            <van-tabbar-item icon="tosend" info="5">
              <span class="iText">待发货</span>
            </van-tabbar-item>
            <van-tabbar-item icon="logistics" info="5">
              <span class="iText">待收货</span>
            </van-tabbar-item>
            <van-tabbar-item icon="records" info="20">
              <span class="iText">待评价</span>
            </van-tabbar-item>
            <van-tabbar-item icon="cash-back-record" info="20">
              <span class="iText">收货/退款</span>
            </van-tabbar-item>
          </van-tabbar>
        </div>
      </div>
      <!-- 地址 -->
      <div class="site">
        <div class="siteAdmi">
          <p>收货地址管理</p>
        </div>
      </div>
    </div>
    <div class="nologin" v-if = "!isAdmin">
      <div class="aminBox">
        <div class="adminTitle">
          <div class="ico">
            <van-icon name="chat-o" class="adminIco" />
          </div>
          <div class="adminText">个人中心</div>
          <div class="ico">
            <van-icon name="comment-o" class="adminIco" info="" />
          </div>
        </div>
      </div>
      <!-- 头像 -->
      <div class="headPhoto" @click = 'toLogin'>
        <div class="photoBox">
          <img src alt />
        </div>
        <p class="adminLogin">点击登录</p>
      </div>
      <!-- 收藏 -->
      <div class="collect">
        <div class="myCollect">
          <van-icon name="like-o" class="colIco" />
          <span class="colText">我的收藏</span>
          <span class="colNum"></span>
        </div>
      </div>
      <!-- 订单信息 -->
      <div class="order">
        <div class="myOrder">
          <div class="orderText">我的订单</div>
          <div class="allOrder">查看全部订单</div>
        </div>
        <div class="orderBox">
          <van-tabbar class="orderItem" v-model="active">
            <van-tabbar-item icon="pending-payment" info="">
              <span class="iText">待付款</span>
            </van-tabbar-item>
            <van-tabbar-item icon="tosend" info="">
              <span class="iText">待发货</span>
            </van-tabbar-item>
            <van-tabbar-item icon="logistics" info="">
              <span class="iText">待收货</span>
            </van-tabbar-item>
            <van-tabbar-item icon="records" info="">
              <span class="iText">待评价</span>
            </van-tabbar-item>
            <van-tabbar-item icon="cash-back-record" info="">
              <span class="iText">收货/退款</span>
            </van-tabbar-item>
          </van-tabbar>
        </div>
      </div>
      <!-- 地址 -->
      <div class="site">
        <div class="siteAdmi">
          <p>收货地址管理</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
      isAdmin : false
    };
  },
  mounted() {
    this.isShow()
  },
  methods: {
    toLogin(){
      this.$router.push('/login')
    },
    isShow(){
      if(sessionStorage.getItem('token') != ""){
        this.isAdmin = true
      }else{
        this.isAdmin = false
      }
    }
  },
};
</script>


<style lang="stylus" scoped>
@import '../../stylus/index.styl';

.box {
  height: calc(100vh);
  position: relative;
  background: #efeeee;
}

.aminBox {
  padding: 0 0.3rem; /* 30/100 */
  height: 3.4rem; /* 340/100 */
  background: $money;
}

.adminTitle {
  display: flex;
  justify-content: space-betwwen;
  height: 1.08rem; /* 108/100 */
  line-height: 1.08rem; /* 108/100 */
  text-align: center;
  color: #fff;
}

.ico {
  display: block;
  width: 0.9rem; /* 90/100 */
}

.adminIco {
  font-size: 0.6rem; /* 60/100 */
  line-height: 1.08rem; /* 108/100 */
}

.adminText {
  flex: 1;
  text-align: center;
  font-size: 0.44rem; /* 44/100 */
}

.van-info {
  top: 0.3rem; /* 30/100 */
}

.headPhoto {
  position: absolute;
  top: 1.8rem; /* 180/100 */
  left: 50%;
  transform: translate(-50%, 0);
}

.photoBox {
  width: 2.1rem; /* 210/100 */
  height: 2.1rem; /* 210/100 */
  background: #e6dfdf;
  border-radius: 50%;
  border: 0.15rem /* 15/100 */ solid #fff;
}

.photoBox img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}

.adminLogin {
  text-align: center;
  height: 0.74rem; /* 74/100 */
  font-size: 0.36rem; /* 36/100 */
  line-height: 0.74rem; /* 74/100 */
  color: #333;
}

.collect {
  padding: 1.75rem /* 175/100 */ 0.3rem /* 30/100 */ 0.45rem; /* 45/100 */
  background: #fff;
}

.myCollect {
  height: 0.4rem; /* 40/100 */
  font-size: 0.33rem; /* 33/100 */
  position: relative;
}

.colText {
  padding-left: 0.6rem; /* 60/100 */
  padding-right: 0.15rem; /* 15/100 */
  color: #333;
}

.colIco {
  position: absolute;
  top: -0.12rem; /* 12/100 */
  left: 0;
  font-size: 0.5rem; /* 50/100 */
  color: red;
}

.order {
  margin-top: 0.15rem; /* 15/100 */
  background: #fff;
  height: 2.74rem; /* 274/100 */
}

.myOrder {
  display: flex;
  justify-content: space-between;
  height: 1.2rem; /* 120/100 */
  border-bottom: 1px solid #b3b3b3;
  line-height: 1.2rem; /* 120/100 */
  padding: 0 0.3rem; /* 30/100 */
  color: #333;
}

.allOrder {
  color: #999;
}

.orderBox {
  position: relative;
}

.orderItem {
  position: unset;
  height: 1.5rem; /* 150/100 */
}

.site {
  height: 1.3rem; /* 130/100 */
  background: #fff;
  margin-top: 0.15rem; /* 15/100 */
  padding: 0 0.4rem; /* 40/100 */
  line-height: 1.3rem; /* 130/100 */
  color: #999;
}
</style>