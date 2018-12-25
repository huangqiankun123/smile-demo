<template>
    <div>
        <van-nav-bar
                title="用户注册"
                left-text="返回"
                left-arrow
                @click-left="goBack"
        />
        <div class="register-panel">

            <van-field
                    v-model="username"
                    label="用户名"
                    icon="clear"
                    placeholder="请输入用户名"
                    required
                    @click-icon="username=''"/>

            <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    icon="clear"
                    placeholder="请输入密码"
                    required
                    @click-icon="password=''"/>

            <div class="register-btn">
                <van-button type="primary" size="large" @click="registerUser">马上注册</van-button>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import serviceApi from '../common/serviceApi'
    export default {
        name: 'Register',
        components: {},
        data() {
            return {
                username:'',
                password:''
            }
        },
        mounted() {

        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            registerUser(){
                axios({
                    url:serviceApi.url.registerUser,
                    methods: 'post',
                    data:{
                        username:this.username,
                        password:this.password
                    }
                }).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .register-panel
        width :96%
        border-radius 5px
        margin 20px auto
        padding-bottom 50px
        .register-btn
            padding-top :10px
</style>
