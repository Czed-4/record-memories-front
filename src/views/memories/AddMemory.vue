<template>
    <el-dialog :visible.sync="dialogFormVisible"
               :modal-append-to-body="false"
               append-to-body
               title="添加记忆"
               top="20vh"
               width="600px"
               center
               @close="clear">
        <span style="height: 282px;width: 38%;float: left">
            <el-upload action="http://localhost:8444/memory/upload"
                       :data="user"
                       :show-file-list="false"
                       :before-upload="beforeUpload"
                       :on-success="handleSuccess"
                       :on-error="handleError">
                <img v-if="form.url" :src="form.url" alt="图片丢失了">
                <img v-else :src="require('../../assets/upload.jpg')" alt="图片丢失了"
                   style="border-style: dashed;color: #cac6c6">
            </el-upload>
        </span>
        <span style="height: 282px;width: 62%;float: right">
            <el-form v-model="form" style="text-align: left">
                <el-form-item prop="title"
                              label="标题"
                              label-width="40px">
                    <el-input v-model="form.title" maxlength="8" value="form.title"/>
                </el-form-item>
                <el-form-item prop="place"
                              label="地点"
                              label-width="40px">
                    <el-input v-model="form.place"/>
                </el-form-item>
                <el-form-item prop="type"
                              label="分类">
                    <el-select v-model="form.type" placeholder="记忆分类" style="width: 110px">
                        <el-option label="个人成长" value="1"/>
                        <el-option label="情感记忆" value="2"/>
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
        name: "AddMemory",
        data() {
            return {
                user: {
                    userId: ''
                },
                form: {
                    id: '',
                    userId: '',
                    url: '',
                    title: '',
                    type: '',
                    place: '',
                    detail: ''
                },
                dialogFormVisible: false
            }
        },
        created() {
            this.user.userId = window.localStorage.getItem('user').substring(7, 39);
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
                if (this.form.title == null || this.form.title === '') {
                    this.$message({message: "标题不能为空", type: "error", center: true,});
                    return;
                }
                if (this.form.type == null || this.form.type === '') {
                    this.$message({message: "请选择分类", type: "error", center: true,});
                    return;
                }
                if (this.form.url == null || this.form.url === '') {
                    this.$message({message: "请上传图片", type: "error", center: true,});
                    return;
                }
                this.$axios.post('/memory/add', {
                    userId: window.localStorage.getItem('user').substring(7, 39),
                    url: this.form.url,
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
            },
            beforeUpload(file) {
                const jpg = 'image/jpeg';
                const png = 'image/png';
                const maxSize = 2 * 1024 * 1024;
                if (file.type !== jpg && file.type !== png) {
                    this.$message({message: '仅支持JPG/PNG格式的图片', type: "error", center: true,});
                }
                if (file.size > maxSize) {
                    this.$message({message: '上传图片大小不能超过2M', type: "error", center: true,});
                }
                return true;
            },
            handleSuccess(response) {
                this.form.url = response.data;
            },
            handleError(file) {
                const maxSize = 2 * 1024 * 1024;
                if (file.size > maxSize) {
                    this.$message({message: '上传图片大小不能超过2M', type: "error", center: true,});
                }
                this.$message({message: '上传失败,请重试', type: "error", center: true,});
            }
        }
    }
</script>

<style scoped>
    img {
        height: 260px;
        width: 190px;
    }
</style>