<template>
    <el-container style="height: calc(100vh - 40px);position: relative">
        <el-aside>
            <side-menu ref="sideMenu" @load="loadMemoryByType"/>
        </el-aside>
        <el-container>
            <el-header>
                <search-memory ref="searchMemory" @load="loadMemoryByType" @search="searchMemory"/>
            </el-header>
            <el-main>
                <memory ref="memory" @load="loadMemoryByType" @initPageParam="initPageParam"/>
            </el-main>
            <el-footer>
                <el-pagination background
                               class="pagination"
                               v-show="this.total > 0"
                               layout="sizes,prev,pager,next,total"
                               @size-change="handleSizeChange"
                               @current-change="handleCurrentChange"
                               :total="this.total"
                               :page-size="this.size"
                               :page-sizes="[10, 20, 50]"
                               :current-page="this.current">
                </el-pagination>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
    const SideMenu = () => import("./SideMenu")
    const SearchMemory = () => import("./SearchMemory")
    const Memory = () => import("./Memory")
    export default {
        name: "Memories",
        components: {SideMenu, SearchMemory, Memory},
        data() {
            return {
                current: 1,
                size: 10,
                total: 0
            }
        },
        methods: {
            loadMemoryByType() {
                let userId = JSON.parse(window.localStorage.getItem('user' || '[]')).id;
                let type = this.$refs.sideMenu.index === '0' ? '' : this.$refs.sideMenu.index;
                this.$refs.memory.list = [];
                this.$axios.post('/memory/queryAll', {
                    entity: {
                        userId: userId,
                        type: type
                    },
                    current: this.current,
                    size: this.size
                }).then(resp => {
                    if (resp.data.code === 200) {
                        this.$refs.memory.list = resp.data.data.list;
                        this.current = resp.data.data.pageNum;
                        this.size = resp.data.data.pageSize;
                        this.total = resp.data.data.total;
                    }
                    if (resp.data.code === 500) {
                        this.$message({message: resp.data.msg, type: "error", center: true,});
                    }
                }).catch(e => {
                    this.$message({message: e, type: "error", center: true,});
                })
            },
            searchMemory() {
                let userId = JSON.parse(window.localStorage.getItem('user' || '[]')).id;
                let type = this.$refs.sideMenu.index === '0' ? '' : this.$refs.sideMenu.index;
                let keyword = this.$refs.searchMemory.keyword;
                this.$refs.memory.list = [];
                this.$axios.post('/memory/queryAll', {
                    entity: {
                        userId: userId,
                        type: type
                    },
                    current: this.current,
                    size: this.size,
                    exParameter: {keyword: keyword}
                }).then(resp => {
                    if (resp.data.code === 200) {
                        this.$refs.memory.list = resp.data.data.list;
                        this.current = resp.data.data.pageNum;
                        this.size = resp.data.data.pageSize;
                        this.total = resp.data.data.total;
                    }
                    if (resp.data.code === 500) {
                        this.$message({message: resp.data.msg, type: "error", center: true,})
                    }
                }).catch(e => {
                    this.$message({message: e, type: "error", center: true,})
                })
            },
            handleCurrentChange(current) {
                this.current = current;
                this.loadMemoryByType();
            },
            handleSizeChange(size) {
                this.size = size;
                this.loadMemoryByType();
            },
            initPageParam(args) {
                this.current = args[0];
                this.size = args[1];
                this.total = args[2];
            }
        }
    }
</script>

<style scoped>
    .pagination {
        padding-top: 5px;
    }
</style>

<style>
    .pagination > span {
        color: white !important;
        font-size: 16px !important;
    }
</style>