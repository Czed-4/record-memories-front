<template>
    <el-dialog :visible.sync="dialogFormVisible"
               :modal-append-to-body="false"
               title="编辑记忆"
               top="20vh"
               width="600px"
               center
               @close="clear">
        <span style="height: 282px;width: 38%;float: left">
            <img class="img" :src="form.url" alt="图片丢失了" @click="dialogVisible = true"/>
            <el-dialog :visible.sync="dialogVisible"
                       :modal="false"
                       size="tiny">
                <img width="100%" :src="form.url.substring(0,form.url.length-4)+'-max'+form.url.substring(form.url.length-4,form.url.length)" alt="图片丢失了">
            </el-dialog>
        </span>
        <span style="height: 282px;width: 62%;float: right">
                <el-form v-model="form" style="text-align: left">
                    <el-form-item prop="title"
                                  label="标题"
                                  label-width="40px">
                        <el-input v-model="form.title" maxlength="8"/>
                    </el-form-item>
                    <el-form-item prop="place"
                                  label="地点"
                                  label-width="40px">
                        <el-input v-model="form.place"/>
                    </el-form-item>
                    <el-form-item prop="type"
                                  label="分类">
                        <el-select v-model="form.type" style="width: 110px">
                            <el-option label="个人成长" value="1"/>
                            <el-option label="情感记忆" value="2"/>
                            <el-option label="地点记忆" value="3"/>
                            <el-option label="其他记忆" value="4"/>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="detail"
                                  label="详情"
                                  label-width="40px">
                        <el-input v-model="form.detail" type="textarea" rows="3"/>
                    </el-form-item>
                </el-form>
            </span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
    export default {
        name: "UpdateMemory",
        data() {
            return {
                dialogFormVisible: false,
                dialogVisible: false,
                form: {
                    id: '',
                    userId: '',
                    url: '',
                    title: '',
                    type: '',
                    place: '',
                    detail: ''
                }
            }
        },
        methods: {
            clear() {
                this.form = {
                    id: '',
                    userId: '',
                    url: '',
                    title: '',
                    type: '',
                    place: '',
                    detail: ''
                }
            },
            submit() {
                this.$axios.post('/memory/update', {
                    id: this.form.id,
                    userId: this.form.userId,
                    title: this.form.title,
                    type: this.form.type,
                    place: this.form.place,
                    detail: this.form.detail
                }).then(resp => {
                    if (resp && resp.data.code === 200) {
                        this.dialogFormVisible = false;
                        this.$emit('flush');
                    }
                }).catch(e => {
                    this.$message({message: e, type: "error", center: true,})
                })
            }
        }
    }
</script>

<style scoped>
    .img {
        width: 200px;
        height: 262px;
    }
</style>