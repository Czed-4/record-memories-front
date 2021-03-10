<template>
    <el-row style="margin-top: -20px">
        <update-memory ref="updateMemory" @flush="updateFlush"/>
        <el-tooltip effect="dark"
                    placement="right"
                    v-for="item in list"
                    :key="item.id">
            <p slot="content">时间: {{item.createTime | timeFormat}}</p>
            <p slot="content">地点: {{item.place | omit}}</p>
            <p slot="content">简述: {{item.detail | omit}}</p>
            <p slot="content" class="el-icon-edit" @click="updateMemory(item)"
               style="color: #8383f8;margin-right: 22px">编辑</p>
            <p slot="content" class="el-icon-delete" @click="deleteMemory(item.id)"
               style="color: #e13f3f">删除</p>
            <el-card class="memory" bodyStyle="padding:3px">
                <span style="font-weight: bold;color: white">{{item.title}}</span>
                <img :src="item.url" alt="图片丢失了"/>
            </el-card>
        </el-tooltip>
    </el-row>
</template>

<script>
    const SideMenu = () => import("./SideMenu")
    const UpdateMemory = () => import("./UpdateMemory")
    export default {
        name: "Memory",
        components: {UpdateMemory, SideMenu},
        props: {
            current: Number,
            size: Number,
            total: Number
        },
        filters: {
            omit(value) {
                if (value != null && value.length > 8) {
                    return value.slice(0, 8) + '...';
                }
                return value;
            },
            timeFormat(value) {
                if (value != null && value.length > 10) {
                    return value.substring(0, 4) + '/' + value.substring(5, 7) + '/' + value.substring(8, 10);
                }
                return value
            }
        },
        data() {
            return {
                list: [
                    {
                        id: '',
                        // 用户id
                        userId: '',
                        // 记忆类型
                        type: '',
                        // 图片地址
                        url: '',
                        // 记忆名称
                        title: '',
                        // 地点
                        place: '',
                        // 详情
                        detail: '',
                        // 是否逻辑删除
                        isDelete: '',
                        // 时间
                        createTime: ''
                    }
                ]
            }
        },
        created() {
            this.loadMemory();
        },
        methods: {
            loadMemory() {
                let userId = JSON.parse(window.localStorage.getItem('user' || '[]')).id;
                this.$axios.post('/memory/queryAll', {
                    entity: {
                        userId: userId
                    },
                    current: 1,
                    size: 10
                })
                    .then(resp => {
                        if (resp.data.code === 200) {
                            this.list = resp.data.data.list
                            let current = resp.data.data.current === 0 ? 1 : resp.data.data.current;
                            let size = resp.data.data.size < 10 ? 10 : resp.data.data.size;
                            this.$emit("initPageParam", [current, size, resp.data.data.total])
                        }
                        if (resp.data.code === 500) {
                            this.$message({message: resp.data.msg, type: "error", center: true,})
                        }
                    }).catch(e => {
                    this.$message({message: e, type: "error", center: true,})
                })
            },
            deleteMemory(id) {
                this.$confirm('此操作将永久删除该记忆', '您确定吗', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                        this.$axios.get('/memory/delete?id=' + id)
                            .then(resp => {
                                if (resp.data.code === 200) {
                                    this.$emit('load')
                                    this.$message({message: resp.data.msg, type: "success", center: true,})
                                }
                                if (resp.data.code === 500) {
                                    this.$emit('load')
                                    this.$message({message: resp.data.msg, type: "error", center: true,})
                                }
                            }).catch(e => {
                            this.$message({message: e, type: "error", center: true,})
                        })
                    }
                )
            },
            updateMemory(item) {
                this.$refs.updateMemory.dialogFormVisible = true
                this.$refs.updateMemory.form = {
                    id: item.id,
                    userId: item.userId,
                    url: item.url,
                    title: item.title,
                    type: item.type,
                    place: item.place,
                    detail: item.detail
                }
            },
            updateFlush() {
                this.$emit('load')
            }
        }
    }
</script>

<style scoped>
    img {
        width: 190px;
        height: 247px;
    }

    .memory {
        float: left;
        width: 200px;
        height: 275px;
        position: relative;
        margin-right: 10px;
        margin-bottom: 10px;
        background: #000000;
    }
</style>