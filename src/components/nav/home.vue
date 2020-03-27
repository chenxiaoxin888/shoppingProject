<template>
  <div class="HomeBox">
    <div class="from">
      <form action="/">
        <van-search
          class="inp"
          v-model="value"
          left-icon
          right-icon="search"
          placeholder="请输入搜索关键词"
        />
      </form>
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../../assets/images/images/banner_02_02.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/images/images/banner_02_02.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/images/images/banner_02_02.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="goods">
      <div class="goodsList" v-for="item in goods" :key="item.name">
        <h2 class="goodsTitle">
          <van-icon name="fire-o" class="fire" />{{item.name}}
        </h2>
        <ul class="listBox">
          <li class="listInfo" v-for="info in item.list" :key="info.id" @click = 'toDetail(info.id)' >
            <div class="goodsPic">
                <img :src="info.thumbnail" alt />
              </div>
              <p class="goodsmany">
                <span class="manyOne">￥{{info.original_price}}</span>
                <span class="manytTwo">￥{{info.reduct_price}}</span>
              </p>
              <p class="goodsItem">{{info.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper轮播图
import Swiper from "swiper";
import "../../../node_modules/swiper/css/swiper.min.css";
import "../../../node_modules/swiper/js/swiper.min.js";
import api from '../../common/api'

export default {
  data() {
    return {
      value: "",
      goods : []
    };
  },
  mounted() {
    this.initSwiper();
    this.getHonme()
  },
  methods: {
    initSwiper() {
      var swiper = new Swiper(".swiper-container", {
        slidesPerView: 2,
        spaceBetween: 10
      });
    },
    getHonme(){
      api.getList()
      .then(res => {
        if(res.data.success){
          this.goods = res.data.data
        }
      })
      .catch(err =>{
        console.log(err)
      })
    },
    toDetail(id){
      // this.$router.push({
      //   path:'/detail',
      //   query:{
      //     id
      //   }
      // })
      this.$router.push({
        path:`/detail/${id}`,
      })
    }
  },
  components : {

  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/index.styl';
.HomeBox
  padding-bottom 1rem /* 100/100 */
.swiper-slide {
  width: 300px; /* 设为固定值 */
  width: auto; /* 根据内容调整宽度 */
}


@import '../../stylus/index.styl';

.from {
  padding: 0.2rem /* 20/100 */ 1.08rem; /* 108/100 */
  background: $seabackg;
}

.van-search__content {
  border-radius: 0.2rem; /* 20/100 */
  background: $ccc;
}

.van-icon-search {
  font-size: 0.48rem /* 48/100 */ !important;
}

.van-search {
  padding: 0;
  border-radius: 0.2rem; /* 20/100 */
}



.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

img {
  width: 100%;
  height: 100%;
}

.goods {
  padding: 0.2rem; /* 20/100 */
}

.fire {
  color: $money;
  padding: 0px 8px;
  font-size: 0.4rem; /* 40/100 */
}

.goodsTitle {
  padding-top: 0.17rem; /* 17/100 */
  padding-bottom: 0.17rem; /* 17/100 */
  font-size: 0.36rem; /* 36/100 */
  font-weight: normal;
}
.goodsList{
    overflow hidden
  overflow-x auto
}

.goodList {
  // margin .2rem /* 20/100 */
  padding: 0.3rem; /* 30/100 */
  background: #ffffff;
  border: 1px solid #eeeeee;
}

.goodsmany {
  padding: 0.24rem /* 24/100 */ 0rem; /* 0/100 */
  display: flex;
  justify-content: space-between;
}

.goodsmany span {
  display: block;
}

.manyOne {
  color: #e60012;
  font-size: 0.44rem; /* 44/100 */
}

.manytTwo {
  color: $color;
  text-decoration: line-through;
}

.goodsItem {
  font-size: 0.4rem; /* 40/100 */
  color: $color;
}


.listBox
  display flex
  overflow hidden
  overflow-x auto
  height 5.6rem /* 560/100 */
  justify-content space-between
  
.listInfo
  width 3.6rem
  height 100%
  background #fff
  float left 
  margin 0 5px
  padding  0 10px
</style>