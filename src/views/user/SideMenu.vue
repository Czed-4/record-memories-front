<template>
    <el-menu class="menu"
             @select="handleSelect"
             default-active="0"
             text-color="white"
             active-text-color="red">
        <el-menu-item index="0">
            <i class="el-icon-check"></i>
            <span slot="title">修改信息</span>
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
        background-color: black;
        font-weight: bold;
        border: white 1px;
        border-right-style: solid;
        height: 100%;
        width: 164px;
    }
</style>