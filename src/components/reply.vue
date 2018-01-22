<template>
    <div class="b-reply">
        <input class="r-input" type="text" :placeholder="reply">
        <span @click="submit">回复</span>
    </div>
</template>
<script type="text/ecmascript-6">
    import {Toast} from 'mint-ui';
    require('../css/reply.scss');
    export default{
        data:function(){
            return {

            };
        },
        props:{
            aid:{
                type:Number
            }
        },
        updated:function(){
            document.querySelector('.r-input').value = '';
        },
        computed:{
            reply:function(){
                if(this.$store.state.article.reply.name!=''){
                    return '回复 '+this.$store.state.article.reply.name
                }else{
                    return '评论'
                }
            }
        },
        methods: {
            //提交回复或评论
            submit(e){
                let vm = this;
                let val = e.target.parentNode.querySelector('input').value;
                if(val){
                    vm.$store.dispatch('setReply',{
                        content:val
                    }).then(function(){
                        vm.$store.dispatch('submitCommon');
                    })
                }else{
                    vm.$store.commit('COMM_MARK_STATUS',true);
                    let instance=Toast({
                        message: '请输入内容！',
                        //iconClass: 'icon-radiobutton2 iconfont icon',
                        //duration: 3000
                    });
                    setTimeout(()=>{
                        instance.close();
                        vm.$store.commit('COMM_MARK_STATUS',false);
                    },2000);
                }
            }
        }
    }
</script>
