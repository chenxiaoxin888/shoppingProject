<template>
  <div class="box">
    <div class="carHeader">
      <p>购物车</p>
    </div>
    <div class="carBody"  v-if="!isShow" >
      <div class="carbox">
        <p>
          <van-icon class="ico" name="cart-o" />
        </p>
        <p class="text">购物车还是空的</p>
        <p class="text">快去逛逛吧</p>
      </div>
    </div>
    <div class="carGoods" v-if="isShow">
      <div class="carItem" v-for="(item,i) in goodsList" :key="item.id">
        <div class="goodsTitle">
          <van-icon class="icon" name="shop-o" />
          <p class="shopName">{{item.store}}</p>
        </div>
        <div class="goodsCard">
          <van-checkbox v-model="item.checked" class="checkBox"></van-checkbox>
          <van-swipe-cell class="cardBox">
            <van-card
              :price="(item.price*item.num).toFixed(2)"
              :desc="item.info"
              :title="item.name"
              :thumb="item.img"
            >
              <div slot="tags">
                <van-tag plain type="danger">{{item.tag}}</van-tag>
              </div>
              <div slot="footer">
                <van-stepper v-model="item.num" />
              </div>
            </van-card>

            <van-button
              slot="right"
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="del(i)"
            />
          </van-swipe-cell>
        </div>
      </div>
    </div>
    <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" @change="allChecked">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </span>
    </van-submit-bar>
  </div>
</template>

<script>
import api from "../../common/api";
export default {
  data() {
    return {
      value: 1,
      checked: true,
      isShow: true,
      sub: "",
      goodsList: [
        // {
        //   id: 1,
        //   store:'天天水果店',
        //   name: "苹果",
        //   info: '不好吃不好吃',
        //   tag : '9.8包邮',
        //   price: 18888,
        //   num: 1,
        //   img:require('../../assets/images/1.jpg'),
        //   checked: true
        // },
        // {
        //   id: 2,
        //   store:'哈哈水果店',
        //   name: "梨子",
        //   info: '好吃好吃',
        //   tag : '8.8包邮',
        //   price: 5999.87,
        //   num: 1,
        //   img:require('../../assets/images/2.jpg'),
        //   checked: true
        // }
      ]
    };
  },
  mounted() {
    console.log(this.$route.query.id);
    this.getDetail();
    this.getGoods();
    console.log(this.goodsList.length);
    if (this.goodsList.length != 0) {
        this.isShow = true
      }else{
        this.isShow = false
      }
  },
  methods: {
    getGoods() {
      let obj ={}
      if(sessionStorage.getItem("name")){
        obj.name = sessionStorage.getItem("name");
        obj.tag = (Number(sessionStorage.getItem("allowance")) * 10).toFixed(2) + "折";
        obj.price = sessionStorage.getItem("price");
        obj.info = sessionStorage.getItem("describe");
        obj.img = sessionStorage.getItem("img");
        obj.checked = true;
        this.goodsList.push(obj);
      }else{
        return
      }
      
    },
    onSubmit() {},
    del(i) {
      this.goodsList.splice(i, 1);
    },
    allChecked() {
      this.goodsList.map(i => {
        i.checked = this.checked;
      });
    },
    getDetail() {
      api
        .getDetail(this.$route.query.id)
        .then(res => {
          if (res.data.success) {
            // this.info = res.data.data
            console.log(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    goodsList: {
      deep: true,
      handler() {
        this.checked = this.goodsList.every(a => {
          return a.checked;
        });
      }
    }
  },
  computed: {
    total() {
      let num = this.goodsList.reduce((prv, b) => {
        if (b.checked) {
          return (prv += b.price * b.num * 100);
        } else {
          return prv;
        }
      }, 0);
      return num;
    }
  }
};
</script>


<style lang="stylus" scoped>
@import '../../stylus/index.styl';

.carHeader {
  width: 100%;
  height: 1.08rem; /* 108/100 */
  background: $money;
  text-align: center;
  line-height: 1.08rem; /* 108/100 */
  color: #fff;
  font-size: 20px;
}

.carBody {
  width: 100%;
  position: absolute;
  top: 0.92rem; /* 92/100 */
  left: 0;
  bottom: 0;
  background-color: pink;
}

.carbox {
  width: 4rem; /* 400/100 */
  height: 3rem; /* 300/100 */
  text-align: center;
  position: absolute;
  left: 0px;
  top: -100px;
  right: 0px;
  bottom: 0px;
  margin: auto;
}

.ico {
  font-size: 1.6rem; /* 60/100 */
}

.text {
  font-size: 0.44rem; /* 44/100 */
  line-height: 0.5rem; /* 50/100 */
}

.carGoods {
  margin: 0.1rem /* 10/100 */ 0.2rem; /* 20/100 */
  margin-top: 0.3rem; /* 30/100 */
}

.carItem {
  padding: 0.1rem /* 10/100 */ 0.2rem; /* 20/100 */
  border: 1px solid skyblue;
  border-radius: 0.15rem; /* 15/100 */
  margin-top: 0.3rem; /* 30/100 */
}

.goodsTitle {
  height: 0.5rem; /* 50/100 */
  position: relative;
}

.icon {
  position: absolute;
  font-size: 0.46rem; /* 46/100 */
}

.shopName {
  margin-left: 0.5rem; /* 50/100 */
  line-height: 0.5rem; /* 50/100 */
}

.goods-card {
  margin: 0;
  background-color: @white;
}

.delete-button {
  height: 100%;
}

.goodsCard {
  position: relative;
  border-top: 1px solid #f2d3d3;
}

.cardBox {
  margin-left: 0.6rem; /* 60/100 */
}

.checkBox {
  position: absolute;
  top: 0.7rem; /* 70/100 */
  left: 0;
  z-index: 2;
}

.checkBox img {
  height: 100%;
}

.van-card__bottom {
  position: absolute;
  top: 25px;
  right: 0;
}

.van-card__footer {
  position: absolute;
  bottom: 8px;
  right: 31%;
}

.van-card {
  padding: 8px 16px 8px 0px;
}

.van-submit-bar {
  bottom: 50px;
}
</style>