/**
 * Created by zjw 2018/01/21
 */
import axios from 'axios';
export default {
    //获取首页列表信息
    indexGetList:function(cb){
        axios.get('/index/getList').then(function(res){
            if(res.data.data.code==1000){
                setTimeout(function(){
                    cb(res.data.data.data);
                },300)
            }
        });
    },
    //获取首页图片
    indexGetImg:function (cb) {
        axios.get('/index/getImgList').then(function(res){
            if(res.data.data.code ==1000){
                setTimeout(function () {
                    cb(res.data.data.data);
                },300)
            }
        });
    },
    //获取文章详情 id 文章id
    articleGetContent:function(id,cb){
        axios.get('/article/getData',{
            "articleId":id
        }).then(function(res){
            if(res.data.data.code==1000){
                setTimeout(function(){
                    cb(res.data.data.data[0]);
                },300)
            }
        });
    },
    //提交评论 id 文章id
    articleSubmit:function(val,uid,rname,aid,commentId,cb){
        axios.get('/article/submit',{val:val,uid:uid,rid:rname,aid:aid,commentId:commentId}).then(function(res){
            if(res.data.data.code ==1000){
                setTimeout(function(){
                    cb(res.data.data.data[0]);
                },5)
            }});
    },
    //获取用户信息
    getHomeIndex:function(uid=123,cb){
        axios.get('/home/index',{uid:uid}).then(function(res){
            if(res.data.data.code ==1000){
                setTimeout(function(){
                    cb(res.data.data.data[0]);
                },800);
            }})
    }
};


