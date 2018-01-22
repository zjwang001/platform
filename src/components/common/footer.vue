<template>
    <div class="footer" >
        <div>
            <router-link to="/index">
                <span class="icon-shouye iconfont"></span>
                <p>首页</p>
            </router-link>
            <router-link to="/friend">
                <span class="icon-xitongcaidan iconfont"></span>
                <p>我要圆梦</p>
            </router-link>
            <router-link to="/home">
                <span class="icon-myline iconfont"></span>
                <p>我</p>
            </router-link>
        </div>
    </div>
</template>
<script>
    require('../../css/common/footer.scss');
    export default{
         data:function(){
            return{

            }
        }
    }
</script>