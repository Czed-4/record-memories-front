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
        <i class="el-icon-switch-button" v-on:click="logout"/>
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
        },
        methods: {
            logout() {
                this.$axios
                    .get('/logout')
                    .then(resp => {
                        if (resp.data.code === 200) {
                            this.$store.commit('logout')
                            this.$router.replace('/login')
                        }
                    })
            }
        }
    }
</script>

<style scoped>
    span {
        pointer-events: none;
        position: absolute;
        top: 15px;
        right: 43%;
        font-size: 25px;
        font-weight: bold
    }

    .menu {
        background: black;
        color: white;
        font-weight: bold;
        min-width: 1300px;
        position: relative;
    }

    .el-icon-switch-button {
        cursor: pointer;
        outline: 0;
        font-size: 40px;
        color: white;
        padding: 10px;
        margin-left: 1000px;
    }
</style>