<template>
    <el-menu :default-active="this.$route.path"
             router
             class="menu"
             mode="horizontal"
             text-color="white"
             active-text-color="red">
        <el-menu-item v-for="(item,i) in list"
                      :key="i"
                      :index="item.name"
                      style="width: 164px;border-bottom: none;">
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
        background-color: black;
        font-weight: bold;
        border: white 1px;
        border-right-style: solid;
        height: 100%;
        width: 164px;
    }
</style>