//加载模块
const express = require('express');
const mysql = require('mysql');

//创建对象
var pool = mysql.createPool({
        host: '127.0.0.1', //主机
        port: '3306', //端口
        user: 'root', //
        password: '',
        database: 'mydb', //连接数据库名
        connectionLimit: 20 //最大连接数
    })
    //导出对象
module.exports = pool;