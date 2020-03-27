<template>
  <div>
    <div class="fromBox">
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
    </div>
    <van-sidebar v-model="activeKey" class="nav">
      <van-sidebar-item v-for="(item,i) in cly" :key="item.name" :title= item.name  @click = 'change(item,i)' />
    </van-sidebar>
    <Baby :sonId = 'cly' :index = 'sonId'></Baby>
  </div>
</template>

<script>
import Baby from "../classifyNav/baby";
import api from '../../common/api'
export default {
  data() {
    return {
      num : -1,
      value: "",
      activeKey: 0,
      sonId : 0,
      cly : []
    };
  },
  components: {
    Baby
  },
  mounted() {
    this.init()
  },
  methods: {
      change(item,index){
        console.log(item,index)
         this.sonId = index
      },
      init(){
        api.getClassify()
        .then(res => {
          if(res.data.success){
            this.cly = res.data.data
          console.log(this.cly)
          }
        })
        .catch(err => {
          console.log(err)
        })
      }
  },
};
</script>


<style lang="stylus" scoped>
@import '../../stylus/index.styl';
.fromBox
    width 100%
    position: fixed;
    top: 0px;
    left: 0px;
.from {
  padding: 0.2rem /* 20/100 */ 1.08rem; /* 108/100 */
  background-color: #ff9900;
}

.van-search__content {
  border-radius: 0.2rem; /* 20/100 */
  background: #ffe1b5;
}

.van-icon-search {
  font-size: 0.48rem /* 48/100 */ !important;
}

.van-search {
  padding: 0;
  border-radius: 0.2rem; /* 20/100 */
}

.nav {
  position: fixed;
  top: 1.08rem /* 108/100 */;
  left: 0px;
}
</style>