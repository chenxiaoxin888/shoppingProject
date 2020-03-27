<template>
  <div>
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
</template>

<script>
export default {};
</script>


<style lang="stylus" scoped>
@import '../../stylus/index.styl';

.from {
  padding: 0.2rem /* 20/100 */ 1.08rem; /* 108/100 */
  // background: $seabackg;
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
</style>