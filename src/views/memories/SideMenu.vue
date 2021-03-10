<template>
    <el-menu class="menu"
             @select="handleSelect"
             default-active="0"
             text-color="white"
             active-text-color="red">
        <el-menu-item index="0">
            <i class="el-icon-check"/>
            <span slot="title">全部记忆</span>
        </el-menu-item>
        <el-menu-item index="1">
            <i class="el-icon-sunrise"/>
            <span slot="title">个人记忆</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-camera"/>
            <span slot="title">情感记忆</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-location-outline"/>
            <span slot="title">地点记忆</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-more"/>
            <span slot="title"/>其他记忆</span>
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
        width: 164px;
        height: 100%;
        border: white 1px;
        font-weight: bold;
        background-color: black;
        border-right-style: solid;
    }
</style>