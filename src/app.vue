<template>
    <div class="com-app-box">
        <comHeader :commData="commConf"></comHeader>
        <div class="com-app">
             <transition :name="transitionName">
                 <router-view class="child-view"></router-view>
             </transition>
        </div>
        <com-footer v-show="commConf.isFooter"></com-footer>
        <com-calendar v-bind:style="calendarState"></com-calendar>
        <com-loading v-if="loading"></com-loading>
        <div v-show="mark" class="mark" @touchmove.stop.prevent="" @touchstart.stop.prevent="" @touchend.stop.prevent=""></div>
    </div>
</template>
<script>
    import Header from './components/common/header';
    import Footer from './components/common/footer';
    import Index from './pages/index';
    import calendar from './components/calendar.vue';
    import loading from './components/common/loading.vue';
    require('./css/app.scss');
    require('./css/style.scss');
    require('./css/lib/mint.css');
    export default{
        data:function(){
                return {
                transitionName: 'slide-left'
            }
        },
        created:function(){
            this.$store.commit('COMM_CONF',{isFooter:true});
        },
        watch:{
            //监听路由的路径，可以通过不同的路径去选择不同的切换效果
            '$route'(to,from){
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        computed:{
            commConf:function () {
                log(this.$store.getters.commConf);
                return this.$store.getters.commConf
            },
            mark:function () {
                return this.$store.getters.markStatus
            },
            calendarState(){
                return this.$store.getters.getCalendarStatus?{display:'block'}:{display:'none'};
            },
            loading:function () {
                return this.$store.getters.loading
            }
        },
        components:{
            comHeader:Header,
            comFooter:Footer,
            comCalendar:calendar,
            comLoading:loading,
            comIndex:Index
        }
    }
</script>
<style>
    body{
        background-color:#fff;
    }
</style>