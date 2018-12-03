// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// import Vue from 'vuex' //引入vuex
//设置根请求路径
import VueResource from 'vue-resource'

//引入自定义样式  全局
import './lib/css/base.css'
import './lib/css/main.css'

//引入mint-ui组件
import "mint-ui/lib/style.css" //必须引入该文件  否则mint组建将没有样式    坑

import Mint from 'mint-ui'; // 全局引入
Vue.use(Mint);

//懒加载
import { Lazyload } from 'mint-ui';
import VueLazyload from 'vue-lazyload' //引入这个懒加载插件
Vue.use(VueLazyload)
    //
Vue.use(Lazyload);


Vue.use(VueResource);
// const router = new VueRouter({
//   mode: 'history',
//   routes
// })




//引入mui 组建--本地文件

//引入本地文件  可以省略from   name
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
// import './lib/mui/js/mui.js'

//5: 设置请求的根路径 
Vue.http.options.root = "http://127.0.0.1:8000";

//6:全局设置post 时候表示的数据组织格式为 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

Vue.config.productionTip = false //浏览器可以看到
    //生产模式需要在main.js中关闭 ：Vue.config.productionTip = false ，作用是阻止 vue 在启动时生成生产提示。


//过滤器函数
// Vue.filter('过滤器名',function(val)){return }
Vue.filter('setname', (val) => {
        if (store.state.islogin) {
            // console.log(val);
            var arr = val.split('');
            // console.log(arr);
            arr.splice(3, 5, '*', '*', '*');
            var b = arr.join('')
                // console.log(b);
            return b;
        }
    })
    /* eslint-disable no-new */

//创建 vuex 实例  对象
//1下载安装Vuex   npm i vuex  -D
//引入Vuex
import Vuex from 'vuex'
//注册  Vuex实例
Vue.use(Vuex);
//创建Vuex  实例对象
var store = new Vuex.Store({
        //保存共享数据
        state: { //状态
            //购物车商品的数量
            islogin: sessionStorage['islogin'] ? sessionStorage['islogin'] : false,
            counts: 0,
            // unames: sessionStorage['unames'] ? JSON.parse(sessionStorage['unames']) : [],
            // goodlist: [],
            goodlist: localStorage["goodlist"] ? JSON.parse(localStorage["goodlist"]) : [],
            // 用户登录后状态
            users: sessionStorage['users'] ? JSON.parse(sessionStorage['users']) : [],
        },
        //   操作共享数据
        mutations: { //存的是方法   用于改变状态
            //清空
            clearstore() {
                // console.log(store.state.islogin)
                sessionStorage.clear('islogin');
                window.history.go(0);
                console.log(store.state.islogin)
                    // state.islogin = true;

            },
            addusermsg(state, data) {
                console.log(data);
                //判断传值是否是对象
                if (data instanceof Array && state.users.length !== 0) {
                    console.log(state.users)
                    for (var item of state.users) {
                        console.log(2)
                        for (var j of data) {
                            console.log(3)
                            var s = j.phone;
                            if (item.uid == j.uid) {
                                console.log('有一样的')
                                return;
                            } else {
                                console.log('没有哦,保存成功')
                                    // state.users.push(data[0]);
                                state.users = data;

                                sessionStorage.setItem('users', JSON.stringify(state.users))
                                state.islogin = true;
                                // state.s.push(data[0]);
                                localStorage.setItem(s, JSON.stringify(state.s));
                            }
                        }
                    }
                } else {
                    console.log('第一次注册')
                        // state.users.push(data[0]);
                    state.users = data;
                    state.islogin = true;
                    sessionStorage.setItem('islogin', state.islogin);
                    sessionStorage.setItem('users', JSON.stringify(state.users));
                }
            },
            addsum(state) {
                // state.counts++;
                state.goodlist.length;
            },
            goodlists(state, data) {
                console.log(data);
                if (data.pid == 0) {
                    data.selects = true;
                }
                if (data.pid == 1) {
                    data.selects = false;
                }
                if (state.goodlist.length !== 0) {
                    for (var item of state.goodlist) {
                        if (item.pid === data.pid) {
                            item.num++;
                            // console.log(item.num)
                            return;
                            // localStorage.setItem("goodlist", JSON.stringify(state.goodlist));
                            // console.log(item);
                            // console.log(state.goodlist);
                        } else {
                            state.goodlist.push(data);
                            localStorage.setItem("goodlist", JSON.stringify(state.goodlist));
                            console.log(state.goodlist);
                        }
                    }
                } else {
                    if (data.pid == 0) {
                        data.selects = true;
                    }
                    if (data.pid == 1) {
                        data.selects = false;
                    }
                    state.goodlist.push(data);
                    localStorage.setItem("goodlist", JSON.stringify(state.goodlist));
                }

            },

            // 增加的函数
            increment(state, i) { //修改共享数据第二个方法
                state.counts += parseInt(i);
            },
            //减少的函数
            substract(state, i) { //参数共享数据
                // state.count -= i;
            },
            //删除函数
            deletegooslist(state, index) {
                //获取index后通过splice（index,1）;
                state.goodlist.splice(index, 1);
                localStorage.setItem("goodlist", JSON.stringify(state.goodlist));
            },
            updatelist(state, data) {
                //index为操作第几个元素，key为 要改变的 key .value 为新的值
                const { index, key, value } = data;
                state.goodlist[index][key] = value;
                localStorage.setItem("goodlist", JSON.stringify(state.goodlist));
                console.log(state.goodlist);

            },

        },
        //获取共享数据
        getters: { //状态的计算属性
            optcount: (state) => {
                return state.goodlist.length; //返回共享数据
            }
        }
    })
    //注册  Vuex实例对象
    // new Vue({
    //   router,
    //   render: h => h(App),
    //   store
    // }).$mount('#app')   
    //   //调用   {{$Store.getters.方法返回}}


new Vue({
    el: '#app',
    router, //设置路由
    store, //vuex
    components: { App },
    template: '<App/>'
});