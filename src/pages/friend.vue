<template>
    <div>
        <div>
            <com-infiniteScroll></com-infiniteScroll>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import infiniteScroll from '../components/common/infiniteScroll.vue';
    let data = {

    }
    export default{
        data:function(){
            return data
        },
        computed:{

        },
        components:{
            comInfiniteScroll:infiniteScroll,
        },
        methods:{

        }
    }
</script>