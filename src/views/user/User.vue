<template>
    <el-container style="height: calc(100vh - 40px);position: relative">
        <el-aside>
            <side-menu ref="sideMenu"/>
        </el-aside>
    </el-container>
</template>

<script>
    const SideMenu = () => import("./SideMenu")
    export default {
        name: "User",
        components: {SideMenu}
    }
</script>

<style scoped>

</style>