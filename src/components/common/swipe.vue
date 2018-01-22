<template>
    <div style="height: 200px;">
        <mt-swipe :auto="3000" :defaultIndex="2">
            <mt-swipe-item v-for="item in doImgData">
                <a :href="item.imgUrl">
                    <img :src="item.img" style="height:200px;width:100%;">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {Swipe,SwipeItem} from 'mint-ui';
    Vue.component(Swipe.name,Swipe);
    Vue.component(SwipeItem.name,SwipeItem);
    export default {
        data:function(){
            return {

            }
        },
        updated:function () {

        },
        props:{
            imgData:Array
        },
        computed:{
            doImgData:function(){
                return this.imgData
            }
        },
        methods:{

        }
    }
</script>
