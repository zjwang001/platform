/**
 * Created by zjw 2018/01/21
 */
//文章内容
import * as types from '../mutation';
import api from '../../api/api';
const state = {
    reply:{
        isComment: false,  //是否显示评论框,
        cId:'',
        name:'',
        type:'comment',    //reply or comment
        content:null
    },
    article:{
        comment:{}
    }
};
//Action 通过store.dispatch方法触发
const actions = {
    //获取文章详情
    articleGetContent({commit},id){
        api.articleGetContent(id,function(res){
            commit(types.ARTICLE_GET_CONTENT,res)
        })
    },
    commonStatus({commit},s){
        commit(types.ARTICLE_REPLY_STATUS,s)
    },
    //设置提交评论的信息
    setReply({commit},settings){
        commit(types.ARTICLE_SET_REPLY,settings)
    },
    //提交评论的信息
    submitCommon({commit}){
        let r = state.reply;
        commit(types.COMM_LOADING_STATUS,true);
        api.articleSubmit(r.content,'123',r.name,state.article.articleId,r.commentId,function(res){
            commit(types.COMM_LOADING_STATUS,false);
            commit(types.ARTICLE_SUBMIT_COMMENT,res);
        })
    }
};
//mutations 通过store.commit方法触发
const mutations = {
    [types.ARTICLE_GET_CONTENT](state,res){
        state.article = res
    },
    [types.ARTICLE_REPLY_STATUS](state,s){
        state.reply.isComment = s
    },
    [types.ARTICLE_SET_REPLY](state,settings){
        state.reply = Object.assign(state.reply,settings)
    },
    [types.ARTICLE_SUBMIT_COMMENT](state,res){
        state.article = Object.assign(state.article,res)
    }
};
const getters = {
    articleContent:state => state.article,
    isComment:state => state.reply.isComment,
    getReply:state => state.reply
};
export default {
    state,
    actions,
    mutations,
    getters
}