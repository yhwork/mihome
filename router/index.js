import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '../components/home/index'
import search from '../components/home/search'
import login from '../components/my/login'
import detail from '../components/home/detail'
import reginst from '../components/my/regist'
import shopcar from '../components/shopcar/shopingcar'
import user from '../components/my/myuser'
import soft from '../components/soft/soft'
Vue.use(Router)


export default new Router({
    routes: [

        { path: '/index', component: index },
        { path: '/user', component: user },
        { path: '/', redirect: '/index' },
        { path: '/login', component: login },
        { path: '/regist', component: reginst },
        { path: '/index/search', component: search },
        { path: '/index/detail', component: detail },
        { path: '/shopcar', component: shopcar },
        { path: '/soft', component: soft },
    ]
})