<template>
  <div>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="母音专区" />
      <van-sidebar-item title="美妆护肤" />
      <van-sidebar-item title="家居生活" />
      <van-sidebar-item title="食品营养" />
      <van-sidebar-item title="全国直邮" />
    </van-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  mounted() {}
};
</script>

<style lang="" scoped>
</style>