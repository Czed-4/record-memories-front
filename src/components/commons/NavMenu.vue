<template>
    <el-menu :default-active="this.$route.path"
             router
             class="menu"
             mode="horizontal"
             text-color="white"
             active-text-color="red">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            {{ item.navItem }}
        </el-menu-item>
        <span>Welcome to your memories palace</span>
    </el-menu>
</template>

<script>
    export default {
        name: "NavMenu",
        data() {
            return {
                navList: [
                    {name: '/index', navItem: '首页'},
                    {name: '/memories', navItem: '我的记忆'},
                    {name: '/user', navItem: '个人中心'}
                ]
            }
        }
    }
</script>

<style scoped>
    .menu {
        background: black;
        color: white;
        font-weight: bold;
        min-width: 1300px;
        position: relative;
    }

    span {
        pointer-events: none;
        position: absolute;
        top: 15px;
        right: 35%;
        font-size: 25px;
        font-weight: bold
    }
</style>