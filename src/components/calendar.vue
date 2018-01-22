<template>
    <div class="com-calendar"  >
        <div class="dp-container">
            <div class="dp-header">
                <div class="dp-item dp-left" @click = "hiddenCalendar">取消</div>
                <div class="dp-item dp-right" @click = "choiceDate">确定</div>
            </div>
            <div class="dp-content">
                <div class="dp-content">
                    <div class="dp-item" >
                        <com-date-scroll :select="status" :startTime="startTime" :dType="'year'" :endTime ="endTime"></com-date-scroll>
                    </div>
                    <div class="dp-item" >
                        <com-date-scroll :select="status" :dType="'month'"></com-date-scroll>
                    </div>
                    <div class="dp-item" >
                        <com-date-scroll :select="status" :dType="'day'"></com-date-scroll>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
   import dateScroll from './dateScroll.vue';
   require('../css/calendar');
    export default {
        data:function(){
            return{
                startTime:2000,
                endTime:2030,
                year:'',
                month:'',
                day:''
            }
        },
        components:{
            comDateScroll:dateScroll
        },
        computed:{
            status:function(){
                return this.$store.getters.getCalendarOk;
            }
        },
        methods:{
            choiceDate:function(){
               this.$store.dispatch('calendarOk',true)
            },
            hiddenCalendar:function(){
                this.$store.dispatch('calendarStatus',false);
            }
        }
    }
</script>