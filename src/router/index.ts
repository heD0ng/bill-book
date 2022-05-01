import {createRouter,createWebHashHistory} from 'vue-router';
import { RouteConfig } from './type';

const routes: RouteConfig[] = [
    {
        path: '/',
        name: '首页',
        component: ()=> import('@/views/Home/index.vue')
    },
    {
        path: '/personal',
        name: '个人中心',
        component: ()=> import('@/views/Personal/index.vue')
    }
]
const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router;