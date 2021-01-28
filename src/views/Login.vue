<template>
    <div class="loginBackground">
        <el-form class="login-container" :model="loginForm">
            <h3 class="login-title">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text"
                          placeholder="请输入账号"
                          v-model="loginForm.username"/>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password"
                          placeholder="请输入密码"
                          v-model="loginForm.password"/>
            </el-form-item>
            <el-form-item>
                <el-button class="login-button"
                           type="primary"
                           v-on:click="login">登录
                </el-button>
            </el-form-item>
        </el-form>
        <a href="https://beian.miit.gov.cn/" style="color: white;text-decoration: none">粤ICP备2021006604号-1</a>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                responseResult: []
            }
        },
        methods: {
            // 登录认证
            login() {
                if (this.loginForm.username == null || this.loginForm.username === '') {
                    this.$message({message: "账号不能为空", type: "error", center: true,});
                    return;
                }
                if (this.loginForm.password == null || this.loginForm.password === '') {
                    this.$message({message: "密码不能为空", type: "error", center: true,});
                    return;
                }
                this.$axios
                    .post('/login', {
                        username: this.loginForm.username,
                        password: this.loginForm.password
                    })
                    .then(resp => {
                        if (resp.data.code === 200) {
                            this.$store.commit('login', resp.data.data);
                            const path = this.$route.query.redirect;
                            this.$router.replace({path: path === '/' || path === undefined ? '/index' : path});
                            this.$message({message: resp.data.msg, type: "success", center: true,});
                        }
                        if (resp.data.code === 500) {
                            this.$message({message: resp.data.msg, type: "error", center: true,});
                        }
                    })
                    .catch(e => {
                        this.$message({message: e, type: "error", center: true,});
                    })
            }
        }
    }
</script>

<style scoped>
    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 13% auto;
        width: 300px;
        padding: 35px 35px 15px 35px;
        background: #ffffff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .login-title {
        margin: 0 auto 40px auto;
        text-align: center;
        color: #505458;
    }

    .login-button {
        width: 100%;
        background: #252121;
        border: 5px
    }

    .loginBackground {
        background: url("../assets/login.jpg") no-repeat center;
        background-size: cover;
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
    }
</style>