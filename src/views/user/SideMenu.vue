<template>
    <el-menu router
             class="menu"
             mode="horizontal"
             text-color="white"
             active-text-color="red"
             :default-active="this.$route.path">
        <el-menu-item v-for="(item,i) in list"
                      style="width: 164px;border-bottom: none;"
                      :key="i"
                      :index="item.name">
            <i class="el-icon-star-on"/>
            {{item.item}}
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "SideMenu",
        data() {
            return {
                list: [
                    {name: '/userInfo', item: '个人信息'}
                ]
            }
        },
    }
</script>

<style scoped>
    .menu {
        width: 164px;
        height: 100%;
        border: white 1px;
        font-weight: bold;
        background-color: black;
        border-right-style: solid;
    }
</style>