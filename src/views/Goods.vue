<template>
    <div>
        商品详情
    </div>
</template>

<script>
    import axios from 'axios'
    import serviceApi from '../common/serviceApi'
    import {Toast} from "vant";

    export default {
        name: 'Goods',
        components: {},
        data() {
            return {
                goodsId: ''
            }
        },
        created(){
            this.goodsId =this.$route.query.goodsId;
            console.log(this.goodsId)
            this.getInfo()
        },
        mounted() {

        },
        methods: {
            getInfo() {
                axios({
                    url: serviceApi.url.getDetailGoodsInfo,
                    method: 'post',
                    data: {
                        goodsId: this.goodsId
                    }
                }).then((res) => {
                    console.log(res.data.message.NAME)
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
