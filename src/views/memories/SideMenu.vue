<template>
    <el-menu class="menu"
             @select="handleSelect"
             default-active="0"
             text-color="white"
             active-text-color="red">
        <el-menu-item index="0" style="border-top-left-radius: 5px;border-top-right-radius: 5px">
            <i class="el-icon-check"></i>
            <span slot="title">全部内容</span>
        </el-menu-item>
        <el-menu-item index="1">
            <i class="el-icon-sunrise"></i>
            <span slot="title">个人成长</span>
        </el-menu-item>
        <el-menu-item index="2" style="border-bottom-left-radius: 5px;border-bottom-right-radius: 5px">
            <i class="el-icon-camera"></i>
            <span slot="title">情感记忆</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "SideMenu",
        data() {
            return {
                index: ''
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                this.index = key;
                this.$emit('load');
            }
        }
    }
</script>

<style scoped>
    .menu {
        background: black;
        font-weight: bold;
        border: white;
        top: 120px;
        width: 150px;
        margin-left: 9%;
        border-radius: 5px;
        position: fixed;
    }
</style>