<template>
    <div>
        <div class="search-bar">
            <van-row>
                <van-col span="3">
                    <img :src="locationIcon" width="80%" class="location-icon"/>
                </van-col>
                <van-col span="16">
                    <input class="search-input" />
                </van-col>
                <van-col span="5">
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'home',
        data() {
            return {
                locationIcon:require('../common/images/icon_location.png')
            }
        }

    }
</script>

<style lang="stylus" scoped>
    .search-bar
        height: 2.2rem
        background-color: #e5017d
        line-height: 2.2rem
        .location-icon
            padding-left :0.3rem
            padding-top :0.2rem
        .search-input
            width :100%
            height :1.3rem
            border-top:0
            border-left :0
            border-right :0
            border-bottom :1px solid #fff !important
            background-color :#e5017d
            color :white
</style>
