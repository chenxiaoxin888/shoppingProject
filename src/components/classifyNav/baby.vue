<template>
    <div class="box">
        <div class="info">
            <ul class="list">
                <li class="listItem" v-for="item in sonId[index].list" :key = 'item.id'>
                    <img class="pic" :src="item.thumbnail" alt="">
                    <p class="title">{{item.name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props : ["sonId",'index'],
    
    data() {
        return {
        }
    },
    
    mounted() {
        this.idx = this.index
    },
}
</script>

<style lang="stylus" scoped>
.box
    margin-left 1.7rem /* 170/100 */
    margin-top 1.08rem /* 108/100 */
    height: calc(100vh);
    background #fff
    box-sizing border-box
.list
    display flex
    justify-content space-between
    align-items: center;
    padding 0px .3rem /* 30/100 */
    flex-wrap wrap
    
.listItem
    width 2.4rem /* 240/100 */
    height 2.38rem /* 238/100 */
    background #fff
    border 1px solid #1d84a7
    border-radius 5px
    margin-top .2rem /* 20/100 */

.pic
    width 1.66rem /* 166/100 */
    height 1.66rem /* 166/100 */
    display block
    margin 10px auto 3px
.title
    width 100%
    height .46rem /* 46/100 */
    text-align center
    line-height .46rem /* 46/100 */
    background #1d84a7
    color #fff
</style>