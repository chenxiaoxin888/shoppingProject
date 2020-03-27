<template>
  <div class="box">
    <div class="icoBox back"></div>
    <div class="icoBox shopcar">
      <van-icon name="shopping-cart-o" />
    </div>
    <div class="icoBox omit">
      <van-icon name="ellipsis" />
    </div>
    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe class="my-swipe">
        <van-swipe-item v-for="item in info.swiperImgArr" :key="item">
          <img class="bannerPic" :src="item" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品详情标题 -->
    <div class="detail">
      <div class="detailTitle">
        <div class="titleText">{{info.name}}</div>
        <div class="titleCollect">
          <van-icon name="star-o" />
          <p>收藏</p>
        </div>
      </div>
      <div class="detailPrice">
        <div class="proceLeft">
          <div class="newPrice">￥{{info.reduct_price}}</div>
          <div class="aldPrice">￥{{info.original_price}}</div>
        </div>
        <div class="proceRight">
          <div class="rightTop">
            <span>6.5折</span>
            <span>包邮</span>
          </div>
          <ul class="rightbom">
            <li v-for="a in info.describe" :key="a">{{a}}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 详情页 评论 -->
    <div class="footer">
      <div class="footerBtn">
        <div :class="[isShow =='Detail'?'select':'detailBtn']" @click="change('Detail')">商品详情</div>
        <div :class="[isShow =='Evauate'?'select':'detailBtn']" @click="change('Evauate')">买家口碑</div>
      </div>
      <div :is="isShow" :item="info"></div>
    </div>

    <!-- 购买选项 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">

      <div class="itembox">
        <img class="itemPic" :src="info.swiperImgArr[0]" alt="">
      </div>
      <div class="upbox">

        <div class="sizeTitle">{{info.buySelect[0].name}}</div>

        <div>
          <span v-for="(size,i) in info.buySelect[0].list" @click="chg(i)" :key ='size' :class="[i === num ? 'active' : 'size' ]" >{{size}}</span>
        </div>

        <div class="sizeTitle">{{info.buySelect[1].name}}</div>

        <div>
          <span v-for="(size,i) in info.buySelect[1].list" @click="chgage(i)" :key ='size' :class="[i === age ? 'active' : 'size' ]" >{{size}}</span>
        </div>

      </div>


      <van-goods-action>
        <div class="allPrice">
          <span class="pri">总价：</span>
          <span class="money">￥0.00</span>
        </div>
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" @click="toCar($route.query.id)" text="立即购买" />
      </van-goods-action>
    </van-popup>

    <!-- 底部 -->
    <van-goods-action>
      <div class="allPrice">
        <span class="pri">总价：</span>
        <span class="money">￥0.00</span>
      </div>
      <van-goods-action-button type="warning" text="加入购物车" />
      <!-- <van-goods-action-button type="danger" @click="toCar($route.query.id)" text="立即购买"  /> -->
      <van-goods-action-button type="danger" @click="showPopup" text="立即购买" />
    </van-goods-action>
  </div>
</template>


<script>
import Evauate from "../detailNav/evaluate";
import Detail from "../detailNav/goodsDetail";
import $ from 'jquery'
import api from "../../common/api";
export default {
  data() {
    return {
      isShow: "Detail",
      isClass: true,
      show: false,
      info: [],
      num : 0,
      age : 0
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    this.getDetail();
  },
  methods: {
    chg(i){
      console.log(i)
      this.num = i
    },
    chgage(i){
      this.age = i

    },
    showPopup() {
      this.show = true;
    },
    change(n) {
      this.isShow = n;
    },
    getDetail() {
      api
        .getDetail(this.$route.params.id)
        .then(res => {
          console.log(res.data.data);
          if (res.data.success) {
            this.info = res.data.data;
            sessionStorage.setItem("price", res.data.data.reduct_price);
            sessionStorage.setItem("name", res.data.data.name);
            sessionStorage.setItem("describe", res.data.data.describe);
            sessionStorage.setItem("allowance", res.data.data.allowance);
            sessionStorage.setItem("img", res.data.data.swiperImgArr[0]);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    toCar(id) {
      this.$router.push({
        path: "/shoppingcar",
        query: {
          id
        }
      });
    }
  },
  components: {
    Evauate,
    Detail
  }
};
</script>


<style lang="stylus" scoped>
.active
  background #ff9900
  display inline-block
  height .6rem /* 60/100 */
  width  1.3rem /* 130/100 */
  text-align center
  line-height .6rem /* 60/100 */
  margin 0 .1rem /* 10/100 */
  color #fff
.upbox
  margin .3rem /* 30/100 */
.itembox
  height 2rem /* 200/100 */
  width 2rem /* 200/100 */
  border 1px solid #ccc
  margin .2rem /* 20/100 */ .3rem /* 30/100 */
.itemPic
  width 100%
  height 100%
.sizeTitle
  padding .1rem /* 10/100 */ 0
.size
  display inline-block
  height .6rem /* 60/100 */
  width  1.3rem /* 130/100 */
  text-align center
  line-height .6rem /* 60/100 */
  background #999
  margin 0 .1rem /* 10/100 */
  color #fff

.select {
  box-sizing: border-box;
  color: #ff9900;
  font-size: 0.32rem; /* 32/100 */
  border-bottom: 2px solid #ff9900;
  height: 100%;
  flex: 1;
  margin: 0 1rem; /* 100/100 */
}

.icoBox {
  height: 0.8rem; /* 80/100 */
  width: 0.8rem; /* 80/100 */
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  position: absolute;
  font-size: 0.5rem; /* 50/100 */
  color: #fff;
  text-align: center;
  line-height: 0.9rem; /* 90/100 */
  top: 0.2rem; /* 20/100 */
  z-index: 2;
}

.shopcar {
  right: 1.2rem; /* 120/100 */
}

.omit {
  right: 0.2rem; /* 20/100 */
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0.3rem /* 30/100 */ 0;
}

.my-swipe {
  height: 5.4rem; /* 540/100 */
}

.bannerPic {
  height: 100%;
}

.detail {
  border-top: 1px solid #dddddd;
  background: #fff;
}

.detailTitle {
  display: flex;
  1.1rem /* 110/100 */;
  padding: 0.18rem /* 18/100 */ 0.2rem; /* 20/100 */
  font-size: 0.34rem; /* 34/100 */
  box-sizing: border-box;
}

.titleText {
  flex: 1;
  padding-right: 0.25rem; /* 25/100 */
}

.titleCollect {
  height: 100%;
  width: 1rem; /* 100/100 */
  text-align: center;
  color: red;
  line-height: 0.25rem; /* 25/100 */
  border-left: 1px solid #dddddd;
}

.titleCollect .van-icon {
  font-size: 0.4rem; /* 40/100 */
}

.titleCollect p {
  font-size: 0.24rem; /* 24/100 */
}

.detailPrice {
  display: flex;
  padding: 0 0.2rem; /* 20/100 */
  height: 1rem; /* 100/100 */
}

.proceLeft {
  width: 1.8rem; /* 180/100 */
  display: flex;
  flex-direction: column;
}

.newPrice {
  flex: 1;
  font-size: 0.4rem; /* 40/100 */
  color: red;
  justify-content: center;
}

.aldPrice {
  flex: 1;
  justify-content: center;
  color: #ccc;
  text-decoration: line-through;
}

.proceRight {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.rightTop {
  flex: 1;
  display: flex;
  align-items: center;
}

.rightTop span {
  background: #ff9900;
  color: #fff;
  text-align: center;
  display: block;
  margin-right: 0.06rem; /* 6/100 */
  font-size: 0.22rem; /* 22/100 */
  width: 1rem; /* 100/100 */
  height: 0.4rem; /* 40/100 */
  line-height: 0.4rem; /* 40/100 */
}

.rightbom {
  flex: 1;
  display: flex;
  align-items: center;
}

.rightbom li {
  border: 1px solid #ff9900;
  background: #fff;
  color: #ff9900;
  text-align: center;
  display: block;
  margin-right: 0.06rem; /* 6/100 */
  font-size: 0.22rem; /* 22/100 */
  width: 1.2rem; /* 120/100 */
  height: 0.4rem; /* 40/100 */
  line-height: 0.4rem; /* 40/100 */
}

.footer {
  background: #fff;
  margin-top: 0.3rem; /* 30/100 */
}

.footerBtn {
  display: flex;
  height: 0.7rem; /* 70/100 */
  line-height: 0.7rem; /* 70/100 */
  text-align: center;
  box-sizing: border-box;
}

.detailBtn {
  height: 100%;
  color: #999;
  flex: 1;
  margin: 0 1rem; /* 100/100 */
}

.options {
  position: absolute;
  bottom: 1rem; /* 100/100 */
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.allPrice {
  width: 3rem; /* 300/100 */
  padding: 0 0.3rem; /* 30/100 */
  box-sizing: border-box;
}

.pri {
  fons: 0.36rem; /* 36/100 */
  color: #666666;
}

.money {
  font-size: 0.4rem; /* 40/100 */
  color: red;
  font-weight: bold;
}
</style>