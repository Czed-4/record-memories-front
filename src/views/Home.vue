<template>
    <div class="homeBackground">
        <nav-menu/>
        <router-view/>
    </div>
</template>

<script>
    // 菜单栏
    const NavMenu = () => import("../components/commons/NavMenu")
    export default {
        name: "Home",
        components: {NavMenu}
    }
</script>

<style scoped>
    .homeBackground {
        background: url("../assets/home.jpg") no-repeat center;
        background-size: cover;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: fixed;
        z-index: -1;
    }
</style>