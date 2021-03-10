<template>
    <div>
        <div style="margin: 10px 0 0 40px;float: left">
            <!--<el-button @click=""
                       type="primary"
                       icon="el-icon-edit">修改
            </el-button>-->
        </div>
        <div style="text-align: left;clear: both">
            <el-form v-model="form" :inline="true" class="form">
                <el-form-item label="姓名"
                              size="small"
                              prop="realName"
                              label-width="40px">
                    <el-input class="form-item"
                              value="form.realName"
                              v-model="form.realName"
                              :disabled="true"/>
                </el-form-item>
                <el-form-item label="账号"
                              size="small"
                              prop="username"
                              label-width="40px">
                    <el-input class="form-item"
                              value="form.username"
                              v-model="form.username"
                              :disabled="true"/>
                </el-form-item>
                <el-form-item label="电话"
                              size="small"
                              prop="phone"
                              label-width="40px">
                    <el-input class="form-item"
                              value="form.phone"
                              v-model="form.phone"
                              :disabled="true"/>
                </el-form-item>
                <el-form-item label="邮箱"
                              size="small"
                              prop="email"
                              label-width="40px">
                    <el-input class="form-item"
                              value="form.email"
                              v-model="form.email"
                              :disabled="true"/>
                </el-form-item>
                <el-form-item label="状态"
                              size="small"
                              prop="status"
                              label-width="40px">
                    <el-select class="form-item"
                               value="form.status"
                               v-model="form.status"
                               :disabled="true">
                        <el-option label="启用" value="Y"></el-option>
                        <el-option label="禁用" value="N"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="sex"
                              label="性别"
                              size="small"
                              label-width="40px">
                    <el-select class="form-item"
                               value="form.sex"
                               v-model="form.sex"
                               :disabled="true">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="0"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            return {
                form: {
                    username: '',
                    phone: '',
                    email: '',
                    realName: '',
                    status: '',
                    sex: ''
                }
            }
        },
        created() {
            this.form = JSON.parse(window.localStorage.getItem('user' || '[]'));
        },
        methods: {}
    }
</script>

<style>
    .form {
        margin-top: 60px;
        font-weight: bold;
    }

    .form-item {
        width: 340px;
        margin-right: 100px;
    }
</style>