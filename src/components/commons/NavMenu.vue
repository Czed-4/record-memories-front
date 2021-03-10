<template>
    <el-menu router
             class="menu"
             mode="horizontal"
             text-color="white"
             active-text-color="red"
             :default-active="this.$route.path">
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
        top: 15px;
        font-size: 25px;
        font-weight: bold;
        position: relative;
        pointer-events: none;
    }

    .menu {
        color: white;
        background: black;
        min-width: 1300px;
        font-weight: bold;
        position: relative;
    }

    .el-icon-switch-button {
        outline: 0;
        color: white;
        float: right;
        padding: 10px;
        font-size: 40px;
        cursor: pointer;
    }
</style>