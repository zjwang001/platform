<template>
     <div class="index">
        <!--<com-img-scroll :img-data="indexImgData"></com-img-scroll>-->
        <com-swipe :img-data="indexImgData"></com-swipe>
        <div class="center">
            <router-link to="index" class="list">
                <span class="icon-sheshixiaomao iconfont icon"></span>
                <p>猫</p>
            </router-link>
            <router-link to="page1" class="list">
                <span class="icon-sheshixiaogou iconfont icon"></span>
                <p>狗</p>
            </router-link>
            <router-link to="home" class="list">
                <span class="icon-yangyouchongwu iconfont icon"></span>
                <p>其他</p>
            </router-link>
        </div>
        <com-list v-bind:list-data="indexListData"></com-list>
    </div>
</template>
<script>
    import imgScroll from '../components/imgScroll.vue';
    import swipe from '../components/common/swipe.vue';
    import list from '../components/list.vue';
    import {mapGetters,mapActions} from 'vuex';
    require('../css/index.scss');
    export default{
        data:function(){
            return{
                data:'index',
                num:1,
                imgData:{},
            }
        },
        created(){
            //组件创建完后获取数据
            var vm = this;
            vm.$store.commit('COMM_CONF',{   //分发
                isFooter:true,
                isSearch:true,
                isBack:false,
                isShare:false,
                title:''
            });
            //commit=>mutations,用来触发同步操作的方法; dispatch=>actions,用来触发异步操作的方法。
            if(vm.$store.state.index.index.img.length==0){
                vm.$store.dispatch('indexGetList').then(function(){
                    vm.$store.dispatch('indexGetImg');
                });
            }
        },
        components:{
          comImgScroll:imgScroll,
          comSwipe:swipe,
          comList:list
        },
        computed:mapGetters({
            //mapGetters 辅助函数仅仅是将store中的getter映射到局部计算属性
            //将getter混入computed对象中
            indexListData: 'indexListData',
            indexImgData: 'indexImgData',
        }),
    }
</script>