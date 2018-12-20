<template>
    <div>
        <div class="search-bar">
            <van-row>
                <van-col span="3">
                    <img :src="locationIcon" width="80%" class="location-icon"/>
                </van-col>
                <van-col span="16">
                    <input class="search-input"/>
                </van-col>
                <van-col span="5">
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>
        <!--swipwer area-->
        <div class="swipe-area">
            <van-swipe :autoplay="1000">
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <img v-lazy="banner.image" width="100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!--type bar-->
        <div class="type-bar">
            <div v-for="(cate,index) in category" :key="index">
                <img v-lazy="cate.image" width="90%"/>
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>
        <!--advertes area-->
        <div>
            <img v-lazy="advertesPicture" width="100%"/>
        </div>

        <!--recommend area-->
        <div class="recommend-area">
            <div class="recommend-title">商品推荐</div>
            <div class="recommend-body">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
                        <div class="recommend-item">
                            <img :src="item.image" width="80%"/>
                            <div>{{item.goodsName}}</div>
                            <div>￥{{item.price}}(￥{{item.mallPrice}})</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <!--floor area-->
        <div class="floor">
            <div class="floor-anomaly">
                <div class="floor-one">
                    <img :src="floor1_0.image" width="100%"/>
                </div>
                <div>
                    <div class="floor-two">
                        <img :src="floor1_1.image" width="100%"/>
                    </div>
                    <div>
                        <img :src="floor1_2.image" width="100%"/>
                    </div>
                </div>
            </div>
            <div class="floor-rule">
                <div v-for="(item,index) in floor1.slice(3)" :key="index">
                    <img :src="item.image" width="100%"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: 'home',
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                locationIcon: require('../common/images/icon_location.png'),
                bannerPicArray: [],
                category: [],
                advertesPicture: '',
                recommendGoods: [],
                swiperOption: {
                    slidesPerView: 3
                },
                floor1: [],
                floor1_0: {},
                floor1_1: {},
                floor1_2: {},
            }
        },
        created() {
            axios.get('https://www.easy-mock.com/mock/5c1b050848952b7bd65142a4/SmileVue/home')
                .then((res) => {
                    if (res.status == 200) {
                        this.bannerPicArray = res.data.data.slides;
                        this.category = res.data.data.category;
                        this.advertesPicture = res.data.data.advertesPicture.PICTURE_ADDRESS;
                        this.recommendGoods = res.data.data.recommend;
                        this.floor1 = res.data.data.floor1;
                        this.floor1_0 = this.floor1[0];
                        this.floor1_1 = this.floor1[1];
                        this.floor1_2 = this.floor1[2];
                    }

                    console.log(res)
                }).catch((error) => {
                console.log(error)
            })
        }

    }
</script>

<style lang="stylus" scoped>
    .search-bar
        height: 2.2rem
        background-color: #e5017d
        line-height: 2.2rem
        overflow: hidden

        .location-icon
            padding-left: 0.3rem
            padding-top: 0.2rem

        .search-input
            width: 100%
            height: 1.3rem
            border-top: 0
            border-left: 0
            border-right: 0
            border-bottom: 1px solid #fff !important
            background-color: #e5017d
            color: white

    .swipe-area
        width: 20rem
        clear: both

    .type-bar
        background-color: #fff
        margin: 0 .3rem .3rem .3rem
        border-radius: .3rem
        font-size: 14px
        display: flex
        flex-direction: row
        flex-flow nowrap

    .type-bar div {
        padding: .3rem
        font-size: 12px
        text-align: center
    }

    .recommend-area
        background-color: #fff
        margin-top: .3rem

        .recommend-title
            margin-left: .2rem
            border-bottom: 1px solid #eee
            font-size: 14px
            padding: .2rem
            color: #e5017d

        .recommend-body
            border-bottom: 1px solid #eee

            .recommend-item
                width: 99%
                border-right: 1px solid #eee
                font-size: 12px
                text-align: center

    .floor-anomaly
        display: flex
        flex-direction: row
        background-color: #fff
        border-bottom: 1px solid #ddd

        .floor-one
            border-right: 1px solid #ddd

        .floor-two
            border-bottom: 1px solid #ddd

    .floor-rule
        display: flex
        flex-direction: row
        flex-flow: wrap
        background-color: #fff

        > div
            -webkit-box-sizing: border-box
            box-sizing: border-box
            width: 10rem
            border-bottom: 1px solid #ddd

        > div:nth-child(odd)
            border-right: 1px solid #ddd
</style>
