import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../app';
import Index from '../pages/index';
import Friend from '../pages/friend';
import Home from '../pages/home';
import Article from '../pages/article';
import HomeUserInfo from '../pages/homeUserInfo';
import MyPet from '../pages/myPet';
import AddPet from '../pages/addPet/addPet';

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: App,
        children: [
            {
                path:'',
                redirect:'/index'
            },
            {
                path:'/index',
                name:'index',
                component:Index
            },
            {
                path:'/friend',
                name:'friend',
                component:Friend
            },
            {
                path:'/HomeUserInfo/:uid',
                name:'homeUserInfo1',
                component:HomeUserInfo
            },
            {
                path:'/article/:id/:uuid',
                name:'article',
                component:Article
            },

            {
                path:'/home',
                name:'home1',
                component:Home
            },
            {
                path:'/home/mypet',
                name:'myPet',
                component:MyPet
            },
            {
                path:'/home/mypet/addpet',
                name:'addPet',
                component:AddPet
            },

        ]
    }
];

const router = new VueRouter({
    routes:routes,
    mode:'hash',
    linkActiveClass:'active',
    strict:process.env.NODE_ENV!=='production',
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition
        }else{
            if(from.meta.keepAlive){
                from.meta.savedPosition = document.body.scrollTop;
            }
            return{x:0,y:to.meta.savedPosition||0}
        }
    }
});

export default router