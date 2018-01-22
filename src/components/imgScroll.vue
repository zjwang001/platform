<template>
    <div class="img-scroll">
        <ul class="clearfix" >
            <li v-for="item in doImgData" @touchstart.stop="start" @touchmove.stop="move" @touchend.stop="end">
                <a :href="item.imgUrl">
                    <img :src="item.img">
                </a>
            </li>
        </ul>
        <div class="img-nav"></div>
    </div>
</template>
<script>
    require('../css/imgScroll.scss');
    export default {
        data:function(){
            return {
                img :{},
                scroll:{
                    sTime:null,
                    width:document.body.clientWidth,
                    w:0,
                    startX:0,
                    endX:0,
                    actIndex:0,
                    oUl:null,
                    oLi:null,
                    changeX:0,
                    imgL:0,
                    isMoving:false
                }
            }
        },
        updated:function () {
            let vm = this,
            d = vm.scroll;
            d.oUl = document.querySelector('.img-scroll ul');
            d.oLi = d.oUl.querySelectorAll('li');
            vm.scroll.imgL = d.oLi.length;
            d.oUl.style.width = vm.scroll.imgL*100+"%";
            this.myScroll();
        },
        props:{
            imgData:{
                type:Array
            }
        },
        computed:{
            doImgData:function(){
                this.imgData
            }
        },
        methods:{
            myScroll:function(){
                let vm = this;
            },
            circulate:function () {

            },
            end:function (e) {
                let vm = this,
                d = vm.scroll;
                d.endX = e.changedTouches[0].clientX;
                let c =  d.startX - e.changedTouches[0].clientX;
                if(Math.abs(c)<=d.width*0.35){
                    d.oUl.style.webkitTransform = 'translate3d(-'+ d.actIndex * d.width+'px,0,0)';
                    d.oUl.style.webkitTransition = 'all 0.3s';
                    d.isMoving = false;
                }
                if(c>=0){
                    if(Math.abs(c)>=d.width*0.4&&!d.isMoving){
                        d.isMoving = true;
                        this.next();
                    }
                }else{
                    if(Math.abs(c)>=d.width*0.4&&!d.isMoving){
                        d.isMoving = true;
                        this.prev();
                    }
                }
            },
            start:function (e) {
                let vm = this,
                d = vm.scroll;
                d.startX = e.changedTouches[0].clientX;
            },
            move:function (e) {
                let vm = this,
                d = vm.scroll;
                let c =  d.startX - e.changedTouches[0].clientX;
                d.changeX = d.actIndex * d.width + c;
                if(!d.isMoving){
                    d.oUl.style.webkitTransform = 'translate3d(-'+ d.changeX+'px,0,0)';
                    d.oUl.style.webkitTransition = 'all 0s';
                    let t =Math.abs(c)/150*-0.5+0.5;
                }
                if(c>=0){
                    if(Math.abs(c)>=d.width*0.35&&!d.isMoving){
                        d.isMoving = true;
                        this.next();
                    }
                }else{
                    if(Math.abs(c)>=d.width*0.35&&!d.isMoving){
                        d.isMoving = true;
                        this.prev();
                    }
                }
            },
            next:function () {
                let vm = this,
                d = vm.scroll;
                if(d.actIndex<d.imgL-1){
                   d.actIndex ++;
                }
                d.changeX =  d.actIndex * d.width;
                //d.oUl.style.webkitTransitionTimingFunction = 'cubic-bezier(0,1,0,1)';
                d.oUl.style.webkitTransform = 'translate3d(-'+d.changeX+'px,0,0)';
                d.oUl.style.webkitTransition = 'all 0.3s';
                setTimeout(function () {
                    d.isMoving = false;
                },300)
            },
            prev:function () {
                let vm = this,
                d = vm.scroll;
                if(d.actIndex>0){
                    d.actIndex --;
                }
                d.changeX =  d.actIndex * d.width;
                d.oUl.style.webkitTransform = 'translate3d(-'+d.changeX+'px,0,0)';
                d.oUl.style.webkitTransition = 'all 0.3s';
                setTimeout(function () {
                    d.isMoving = false;
                },300)
            },
            handleM:function (t) {
                let vm = this,
                d = vm.scroll;
                clearInterval(d.sTime);
                if(t==1&&d.w==d.oLi.length-1){
                    return false
                }else if(t==-1&&d.w==0){
                    return false
                }
                d.w = t+d.w;
                d.oUl.style.right = d.w*100+'%';
                d.isMove = true;
                setTimeout(function () {
                    d.isMove = false;
                    d.sTime =  setInterval(function(){
                        vm.circulate()
                    },3000)
                },600);
                return false
            }
        }
    }
</script>