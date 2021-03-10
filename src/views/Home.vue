<template>
    <div class="homeBackground">
        <nav-menu/>
        <router-view/>
    </div>
</template>

<script>
    import NavMenu from "../components/commons/NavMenu";

    export default {
        name: "Home",
        components: {NavMenu}
    }
</script>

<style scoped>
    .homeBackground {
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        position: fixed;
        background: no-repeat url("../assets/home.jpg");
        background-size: cover;
    }
</style>