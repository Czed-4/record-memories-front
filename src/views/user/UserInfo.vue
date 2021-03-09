<template>
    <div>
        <div style="margin-top:10px;margin-left:40px;float:left">
            <el-button @click=""
                       type="primary"
                       icon="el-icon-edit">修改
            </el-button>
        </div>
        <div style="text-align:left;clear:both">
            <el-form v-model="form" :inline="true" class="form">
                <el-form-item prop="realName"
                              size="small"
                              label="姓名"
                              label-width="40px">
                    <el-input class="form-item" v-model="form.realName" value="form.realName"
                              :disabled="true"/>
                </el-form-item>
                <el-form-item prop="username"
                              size="small"
                              label="账号"
                              label-width="40px">
                    <el-input class="form-item" v-model="form.username" value="form.username"
                              :disabled="true"/>
                </el-form-item>
                <el-form-item prop="phone"
                              size="small"
                              label="电话"
                              label-width="40px">
                    <el-input class="form-item" v-model="form.phone" value="form.phone" :disabled="true"/>
                </el-form-item>
                <el-form-item prop="email"
                              size="small"
                              label="邮箱"
                              label-width="40px">
                    <el-input class="form-item" v-model="form.email" value="form.email" :disabled="true"/>
                </el-form-item>
                <el-form-item prop="status"
                              size="small"
                              label="状态"
                              label-width="40px">
                    <el-select class="form-item" v-model="form.status" value="form.status" :disabled="true">
                        <el-option label="启用" value="Y"></el-option>
                        <el-option label="禁用" value="N"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="sex"
                              size="small"
                              label="性别"
                              label-width="40px">
                    <el-select class="form-item" v-model="form.sex" value="form.sex" :disabled="true">
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
        font-weight: bold;
        margin-top: 60px;
    }

    .form-item {
        width: 340px;
        margin-right: 100px;
    }
</style>