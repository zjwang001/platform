<template>
    <div class="page-infinite-wrapper" style="height: 586px;">
        <ul class="page-infinite-list"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="50">
            <li v-for="item in List" class="page-infinite-listitem">{{item}}</li>
        </ul>
        <p v-show="loading" class="page-infinite-loading" style="display: none;margin-bottom: 50px;">
            <span>
                <div class="mint-spinner-fading-circle circle-color-36" style="width:28px;height:28px;">
                    <div class="mint-spinner-fading-circle-circle is-circle2"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle3"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle4"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle5"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle6"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle7"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle8"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle9"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle10"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle11"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle12"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle13"></div>
                </div>
            </span>
            加载中...
        </p>
    </div>
</template>
<script>
    import Vue from 'vue'
    import { InfiniteScroll } from 'mint-ui';
    Vue.use(InfiniteScroll);
    require('../../css/lib/InfiniteScroll.css');
    export default {
        data:function (){
            return {
                loading:false,
                List:[]
            }
        },
        methods:{
            loadMore(){
                let self=this;
                self.loading = true;
                setTimeout(() => {
                    let last = self.List[self.List.length - 1]||0;
                    for (let i = 1;i <= 10; i++) {
                        self.List.push(last + i);
                    }
                    self.loading = false;
                }, 1000);
            }
        }
    }
</script>