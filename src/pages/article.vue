<template>
    <div>
        <div class="com-article">
           <div class="a-box">
                <div class="user">
                    <img :src="resData.userIcon" alt=""/>
                    <div class="name">
                        <p>{{resData.name}}</p>
                        <div class="tag">
                            <span v-for="item in resData.tag">{{item}}</span>
                        </div>
                        <time>{{resData.time}}</time>
                    </div>
                </div>
                <div class="imgbox">
                    <img :src="resData.imgGrounp">
                </div>
                <div class="art-detail">
                    <p>{{resData.detail}}</p>
                </div>
                <com-comment :replyData="resData.comment"></com-comment>
           </div>
        </div>
        <com-reply :aid="resData.articleId" v-show="isComment"></com-reply>
    </div>
</template>
<script>
    import Comment from '../components/comment.vue';
    import imgScroll from '../components/imgScroll.vue';
    import {mapGetters} from 'vuex';
    import Reply from '../components/reply';
    require('../css/article.scss');
    export default {
        data:function(){
           return {
                content:null,
                //resData:{}
            }
        },
        created:function (){
            let vm = this;
            //vm.$store.dispatch('commConf',{
            vm.$store.commit('COMM_CONF',{
                isFooter:false,
                isSearch:false,
                isBack:true,
                isShare:true,
                title:'详情页'
            });
            //vm.$store.dispatch('commonStatus',true);
            //vm.$store.commit('ARTICLE_REPLY_STATUS',true);

            let id = this.$route.params.id;
            log(this.$route.params);
            //获取文章信息
            vm.$store.dispatch('articleGetContent',id);
        },
        computed:{
            resData(){
                //console.log(this.$store.getters.articleContent);
                let temp=this.$store.getters.articleContent;
                return temp
            },
            isComment(){
                return this.$store.getters.isComment
            }
        },
        components:{
            comComment:Comment,
            comReply:Reply
        },
        methods:{
            handleSubmit:function (val) {
                this.content = val;
            }
        }
    }
</script>