const express = require('express');
const pool = require('../pool');
const router = express.Router();

router.get('/users', (req, res) => {
    var a = req.body;
    console.log(a);
    res.send({ code: 1, msg: '登录成功' })
})

// 发送图片轮播
router.get('/swipes', (req, res) => {
    var imglist = [
        { id: 1, src: 'http://127.0.0.1:8000/wximg/foot142.jpg' },
        { id: 2, src: 'http://127.0.0.1:8000/wximg/foot139.jpg' },
        { id: 3, src: 'http://127.0.0.1:8000/wximg/foot143.jpg' },
        { id: 4, src: 'http://127.0.0.1:8000/wximg/foot144.jpg' },
        { id: 4, src: 'http://127.0.0.1:8000/wximg/foot147.jpg' },

    ];
    res.send(JSON.stringify(imglist));
})

//导出路由
module.exports = router;