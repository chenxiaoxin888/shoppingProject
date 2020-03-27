<template>
    <div>
        <Nav class="nav"></Nav>
        <router-view></router-view>
    </div>
</template>


<script>
import Nav from './nav/nav'
import Search from './common/search'
export default {
    components : {
        Nav,
        Search
    }
}
</script>

<style lang="stylus" scoped>
    .nav
        position fixed
        bottom 0
        left 0
        z-index 999

</style>