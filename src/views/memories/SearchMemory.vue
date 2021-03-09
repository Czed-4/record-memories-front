<template>
    <div class="search">
        <add-memory ref="addMemory" @flush="AddFlush"/>
        <el-button @click="AddMemory"
                   type="primary"
                   icon="el-icon-plus"
                   style="margin-top: 10px">新增
        </el-button>
        <el-input @keyup.enter.native="searchClick"
                  placeholder="请输入关键信息"
                  v-model="keyword"
                  prefix-icon="el-icon-search"
                  style="width: 330px;margin: 10px 10px 0 260px">
        </el-input>
        <el-button @click="searchClick"
                   type="primary"
                   icon="el-icon-search"
                   style="margin-top: 10px">搜索
        </el-button>
    </div>
</template>

<script>
    const AddMemory = () => import("./AddMemory")
    export default {
        name: "SearchMemory",
        components: {AddMemory},
        data() {
            return {
                keyword: ''
            }
        },
        methods: {
            searchClick() {
                this.$emit('search')
            },
            AddMemory() {
                this.$refs.addMemory.dialogFormVisible = true
            },
            AddFlush() {
                this.$emit('load')
            }
        }
    }
</script>

<style scoped>
    .search {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
    }
</style>