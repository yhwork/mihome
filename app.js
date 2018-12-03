//加载模块
const express = require('express');
const pool = require('./pool');
//加载跨域  cors  模块
const cors = require('cors');
//post请求
const bodyparser = require('body-parser');

//session
const cookieParser = require('cookie-parser');
const session = require('express-session');

//导入路由器
const index = require('./routers/index');
const wx = require('./routers/wx');


//创建express对象
const app = express();

//配置cookie
app.use(cookieParser());
app.use(session({
        secret: '12345', //
        // name:'',
        cookie: { maxAge: 60000 }, //默认{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }
        resave: false,
        saveUninitialized: true
    }))
    //使用第三方模块
app.use(bodyparser.urlencoded({
    extended: false
}));
//服务器  node.js  允许跨域访问配置项-------------------------------
//配置允许哪个程序，哪个程序哪个端口
app.use(cors({
    //origin:[  所允许访问的域名地址   ]
    origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
    //是否允许
    credentials: true,
}))


//使用路由模块
app.use('/', index);
app.use('/wx', wx);


//指定静态目录
app.use(express.static(__dirname + '/public'));
//绑定监听端口
app.listen(8000, () => {
    console.log(8000)
});