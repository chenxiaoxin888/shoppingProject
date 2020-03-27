<template>
  <div class="box">
    <div class="eva">
      <ul class="evaBox">
        <li class="evaUnit">全部评价</li>
        <li class="evaUnit">好评</li>
        <li class="evaUnit">差评</li>
        <li class="evaUnit">晒单</li>
      </ul>
    </div>
    <div class="content" v-for="aa in item.buyerReviews.all" :key='aa'>
      <div class="conTop">
        <div class="conHeader">
          <span class="conId">{{aa.buyerName}}</span>
          <span class="conTime">{{aa.createTime | toTime}}</span>
        </div>
        <div class="conPic">
          <div class="conPicBox" v-for="pic in aa.postImg" :key='pic'>
            <img :src="pic" alt />
          </div>
        </div>
        <div class="conItem">
          <p>{{aa.postDescribe}}</p>
        </div>
      </div>
      <div class="conDown">
        <p>{{aa.adminReviews}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  mounted() {
    console.log(this.item.buyerReviews.all[0].createTime);
  }
};
</script>


<style lang="stylus" scoped>
.box {
  background: #fff;
  padding: 0.1rem /* 10/100 */ 0.4rem /* 40/100 */ 1rem; /* 100/100 */
}

.eva {
  height: 0.7rem; /* 70/100 */
  width: 100%;
  position: relative;
  border-bottom: 1px solid #ddd;
}

.evaBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.evaUnit {
  width: 1.38rem; /* 138/100 */
  height: 0.5rem; /* 50/100 */
  background: #999999;
  border-radius: 30px;
  font-size: 0.28rem; /* 28/100 */
  line-height: 0.5rem; /* 50/100 */
  text-align: center;
  color: #fff;
}

.content {
  height: 3.5rem; /* 350/100 */
  border-bottom: 1px solid #ddd;
}

.conTop {
  padding: 0.1rem /* 10/100 */ 0;
  font-size: 0.28rem; /* 28/100 */
}

.conHeader {
  display: flex;
  justify-content: space-between;
}

.conHeader span {
  display: block;
}

.conId {
  color: #ff9900;
}

.conTime {
  font-size: 0.24rem; /* 24/100 */
  color: #a0a0a0;
}

.conPic {
  padding-top: 0.2rem; /* 20/100 */
}

.conPicBox {
  width: 1.5rem; /* 150/100 */
  height: 1.5rem; /* 150/100 */
  display inline-block
}

.conPicBox img {
  width: 100%;
  height: 100%;
}

.conItem {
  padding-top: 0.06rem; /* 6/100 */
  color: #999;
}

.conDown {
  background: #dddddd;
  height: auto;
  border-radius: 0.15rem; /* 115/100 */
  font-size: 0.24rem; /* 24/100 */
  color: #898989;
}

.conDown p {
  padding: 0.15rem; /* 15/100 */
}
</style>