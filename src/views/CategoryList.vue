<template>
    <div>
        <div>
            <van-nav-bar title="商品列表"/>
        </div>

        <div>
            <van-row>
                <van-col span="6">
                    <div id="nav-left">
                        <ul>
                            <li v-for="(item,index) in category"
                                :key="index"
                                @click="clickCategory(index)"
                                :class="{categoryActive:categoryIndex===index}">
                                {{item.MALL_CATEGORY_NAME}}
                            </li>
                        </ul>
                    </div>
                </van-col>
                <van-col span="18">右侧列表</van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import serviceApi from '../common/serviceApi'
    import {Toast} from "vant";

    export default {
        name: "CategoryList",
        data() {
            return {
                category: [],
                categoryIndex: 0,
            }
        },
        created() {
            this.getCategoryList()
        },
        mounted() {
            let winHeight = document.documentElement.clientHeight;
            document.getElementById('nav-left').style.height = winHeight - 46 + 'px'
        },
        methods: {
            getCategoryList() {
                axios({
                    url: serviceApi.url.getCategoryList,
                    method: 'get'
                }).then(res => {
                    if (res.data.code === 200 && res.data.message) {
                        this.category = res.data.message;
                        console.log(res.data.message)
                    }
                }).catch(error => {
                    Toast(error)
                })
            },
            clickCategory(index) {
                this.categoryIndex = index
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #nav-left
        background-color aliceblue

    #nav-left > ul > li
        line-height 2rem
        border-bottom 1px solid #E4E7ED
        padding 3px
        font-size 0.8rem
        text-align center

    .categoryActive
        background-color #fff
</style>