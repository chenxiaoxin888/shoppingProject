<template>
    <div class="box">
        <div v-for="info in item.shopDes" class="pic" :key='info'>
            <img :src="info" alt="" >
        </div>
    </div>
</template>

<script>
export default {
    props:['item'],
    mounted() {
    },
}
</script>


<style lang="stylus" scoped>
.box 
    background #fff
    padding .1rem /* 10/100 */.4rem /* 40/100 */1rem /* 100/100 */
.pic
    display block
    width 100%
img
    width 100%
</style>