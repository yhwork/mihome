const express = require('express');
const pool = require('../pool');
const router = express.Router();

//商品列表

//判断是否登录了
router.get('/islogin', (req, res) => {
    console.log(req.session);
    if (req.session.user == undefined) {
        res.send(JSON.stringify({ code: 0, msg: 'err' }));
        return;
    } else {
        var id = req.session.user;
        console.log(id);
        pool.query('select *from users where id=?', [id], (err, data) => {
            if (err) throw err;
            res.send(JSON.stringify({ code: 1, meg: 'ok' }))
        })
    }
})


//用户登录验证
router.post('/login', (req, res) => {
        var phone = req.body.phone;
        var upwd = req.body.upwd;
        console.log(phone, upwd)
        if (phone == '') {
            res.send(JSON.stringify({ code: 0, msg: '用户名为空' }));
            return;
        }
        if (upwd == '') {
            res.send(JSON.stringify({ code: 0, msg: '密码为空' }));
            return;
        }
        var sql = 'select * from users where phone=? and upwd=?'
        pool.query(sql, [phone, upwd], (err, data) => {
            if (err) console.log(err)
            if (data.length > 0) {
                //加入session
                req.session.user = data[0].uid
                    // console.log(111);
                console.log(data[0].uid);
                res.send(JSON.stringify(data[0]));
            } else {
                res.send(JSON.stringify({ code: 0, msg: '密码错误' }))
            }
        })
    })
    //用户注册
router.post('/regist', (req, res) => {
    var phone = req.body.phone;
    var upwd = req.body.upwd;
    if (phone == '') {
        res.send(JSON.stringify({ code: 0, msg: '用户名为空' }));
        return;
    }
    if (upwd == '') {
        res.send(JSON.stringify({ code: 0, msg: '密码为空' }));
        return;
    }
    var sql = 'INSERT INTO users(upwd,phone) VALUES(?,?)';
    pool.query(sql, [upwd, phone], (err, data) => {
        if (err) console.log(err);
        // console.log(data)
        if (data.affectedRows == 1) {
            res.send(JSON.stringify({ ok: 1 }));
        }
    })
})
router.get('/defas', (req, res) => {
    var id = req.query.id;
    // console.log(id);
    var obj = [{
            id: 1,
            url: 'http://127.0.0.1:8000/img/6c9d4031099deb5fc28ec57ac730df96!360x360.jpg',
            title: '小米8青春版',
            txt: '潮流镜面渐变色，自拍旗舰',
            newprice: '￥1399起',
            oldprice: '0',
            Type: 1,
            detail: {
                tdetail: '全球首款双拼GPS/晓龙845处理器/晓龙6.6处理器高性能/红外人脸识别/AI变焦双摄/sanxing1AMOLED屏',
                pclass: {
                    pname: '6.21英寸',
                    ppx: '双1200万像素',
                    pmAh: '3400mAh',
                    yun: '6GB',
                    wang: '4G全网通',
                    ping: '2248x1080',
                    CPU: '八核',
                    liang: '128G',
                    hou: '7.6mm',
                    mushi: '双卡双待',
                },
                productinfo: {
                    juan: '限量小米8 6GB+1',
                    select: '小米8 6GB+128GB 白色x1',
                    zheng: ['小米自营', '小米发货', '7天无理由退货', '运费说明', '售后服务政策']
                }
            },
        },
        {
            id: 2,
            url: 'http://127.0.0.1:8000/img/9f617ce8f3dd92709370421385717a38!360x360.jpg',
            title: '小米8屏幕指纹版',
            txt: '压感屏幕木指纹，潮流外观',
            newprice: '￥3199起',
            oldprice: '0',
            Type: 1,
            detail: {
                tdetail: '全球首款双拼GPS/晓龙875处理器/晓龙8.0处理器高性能/红外人脸识别/AI变焦双摄/sanxing1AMOLED屏',
                pclass: {
                    pname: '6.21英寸',
                    ppx: '双1200万像素',
                    pmAh: '3400mAh',
                    yun: '6GB',
                    wang: '4G全网通',
                    ping: '2248x1080',
                    CPU: '八核',
                    liang: '128G',
                    hou: '7.6mm',
                    mushi: '双卡双待',
                },
                productinfo: {
                    juan: '小米8P屏幕指纹版 6GB+1',
                    select: '小米8 6GB+128GB 蓝色x1',
                    zheng: ['小米自营', '小米发货', '7天无理由退货', '运费说明', '售后服务政策']
                }
            },
        },
        {
            id: 3,
            url: 'http://127.0.0.1:8000/img/fb3fc5df8e762c4a96f0cdd59670070c!360x360.jpg',
            title: '红米6A',
            txt: '好看好用不贵',
            newprice: '￥549起',
            oldprice: '￥599',
            Type: 1,
            detail: {
                tdetail: '小屏高性能双摄手机/后置1200万 AI双摄/红外人脸识别/AI变焦双摄/12nm 八核处理器',
                pclass: {
                    pname: '5.45英寸',
                    ppx: '双1200万像素',
                    pmAh: '3000mAh',
                    yun: '6GB',
                    wang: '4G全网通',
                    ping: '2248x1080',
                    CPU: '八核',
                    liang: '128G',
                    hou: '7.6mm',
                    mushi: '双卡双待',
                },
                productinfo: {
                    juan: '限量小米8 6GB+1',
                    select: '小米8 6GB+128GB 白色x1',
                    zheng: ['小米自营', '小米发货', '7天无理由退货', '运费说明', '售后服务政策']
                }
            },
        },
        {
            id: 4,
            url: 'http://127.0.0.1:8000/img/cf8df89713342d51d01bff5ed1bced57!360x360.jpg',
            title: '小米6X',
            txt: '青碧外观的拍照手机',
            newprice: '￥1299起',
            oldprice: '￥1599',
            Type: 1,
            detail: {
                tdetail: '轻薄美观的拍照手机/标配晓龙660处理器/晓龙8.0处理器高性能/红外人脸识别/AI变焦双摄/sanxing1AMOLED屏',
                pclass: {
                    pname: '5.99英寸',
                    ppx: '双1200万像素',
                    pmAh: '3400mAh',
                    yun: '6GB',
                    wang: '4G全网通',
                    ping: '2248x1080',
                    CPU: '八核',
                    liang: '128G',
                    hou: '7.6mm',
                    mushi: '双卡双待',
                },
                productinfo: {
                    juan: '小米6x 4GB+64GB',
                    select: '小米6x 6GB+128GB 蓝色x1',
                    zheng: ['小米自营', '小米发货', '7天无理由退货', '运费说明', '售后服务政策']
                }
            },
        },
        {
            id: 5,
            url: 'http://127.0.0.1:8000/img/9f617ce8f3dd92709370421385717a38!360x360.jpg',
            title: '小米8 SE',
            txt: '三星 AMOLED 全面屏',
            newprice: '￥1699起',
            oldprice: '￥1799',
            Type: 1,
            detail: {
                tdetail: '三星AMOLED 全面屏/晓龙710处理器/AI 超感光摄/红外人脸识别/AI变焦双摄',
                pclass: {
                    pname: '5.88英寸',
                    ppx: '双1200万像素',
                    pmAh: '3400mAh',
                    yun: '6GB',
                    wang: '4G全网通',
                    ping: '2248x1080',
                    CPU: '八核',
                    liang: '128G',
                    hou: '7.6mm',
                    mushi: '双卡双待',
                },
                productinfo: {
                    juan: '小米8 SE 6GB+1',
                    select: '小米8 SE 6GB+64GB 蓝色x1',
                    zheng: ['小米自营', '小米发货', '7天无理由退货', '运费说明', '售后服务政策']
                }
            },
        },
        {
            id: 6,
            url: 'http://127.0.0.1:8000/img/101.webp',
            title: '小米平板4',
            txt: '追剧神器，支持刷脸解锁',
            newprice: '￥1099起',
            oldprice: '0',
            Type: 1,
            detail: {
                tdetail: '全球首款双拼GPS/晓龙875处理器/晓龙8.0处理器高性能/红外人脸识别/AI变焦双摄/sanxing1AMOLED屏',
                pclass: {
                    pname: '6.21英寸',
                    ppx: '双1200万像素',
                    pmAh: '3400mAh',
                    yun: '6GB',
                    wang: '4G全网通',
                    ping: '2248x1080',
                    CPU: '八核',
                    liang: '128G',
                    hou: '7.6mm',
                    mushi: '双卡双待',
                },
                productinfo: {
                    juan: '小米8P屏幕指纹版 6GB+1',
                    select: '小米8 6GB+128GB 蓝色x1',
                    zheng: ['小米自营', '小米发货', '7天无理由退货', '运费说明', '售后服务政策']
                }
            },
        },
        {
            id: 7,
            url: 'http://127.0.0.1:8000/img/98b3aaf7fd30a6b7164de67e837ab619!360x360.jpg',
            title: '红米6A',
            txt: '双冷夜，更能打',
            newprice: '￥3199起',
            oldprice: '0',
            Type: 1,
            detail: {
                tdetail: '全球首款双拼GPS/晓龙875处理器/晓龙8.0处理器高性能/红外人脸识别/AI变焦双摄/sanxing1AMOLED屏',
                pclass: {
                    pname: '6.21英寸',
                    ppx: '双1200万像素',
                    pmAh: '3400mAh',
                    yun: '6GB',
                    wang: '4G全网通',
                    ping: '2248x1080',
                    CPU: '八核',
                    liang: '128G',
                    hou: '7.6mm',
                    mushi: '双卡双待',
                },
                productinfo: {
                    juan: '小米8P屏幕指纹版 6GB+1',
                    select: '小米8 6GB+128GB 蓝色x1',
                    zheng: ['小米自营', '小米发货', '7天无理由退货', '运费说明', '售后服务政策']
                }
            },
        },
        {
            id: 8,

            url: 'http://127.0.0.1:8000/img/f7e8ee2cb8cc37ff7e1e87c58342afb8!360x360.jpg',
            title: '黑鲨游戏手机',
            txt: '双冷夜，更能打',
            newprice: '￥3199起',
            oldprice: '0',
            Type: 1,
            detail: {
                tdetail: '全球首款双拼GPS/晓龙875处理器/晓龙8.0处理器高性能/红外人脸识别/AI变焦双摄/sanxing1AMOLED屏',
                pclass: {
                    pname: '6.21英寸',
                    ppx: '双1200万像素',
                    pmAh: '3400mAh',
                    yun: '6GB',
                    wang: '4G全网通',
                    ping: '2248x1080',
                    CPU: '八核',
                    liang: '128G',
                    hou: '7.6mm',
                    mushi: '双卡双待',
                },
                productinfo: {
                    juan: '小米8P屏幕指纹版 6GB+1',
                    select: '小米8 6GB+128GB 蓝色x1',
                    zheng: ['小米自营', '小米发货', '7天无理由退货', '运费说明', '售后服务政策']
                }
            },
        },
        // 电视
        {
            id: 9,
            url: 'http://127.0.0.1:8000/img/7d4d94788f8591e5557a4c23c3ba4307!360x360.jpg',
            title: '小米电视4X 43',
            txt: 'FHD 全高清屏，人工智能语音',
            newprice: '￥2499起',
            oldprice: '￥2999',
            Type: 2,
            detail: {
                tdetail: '全球首款双拼GPS/晓龙875处理器/晓龙8.0处理器高性能/红外人脸识别/AI变焦双摄/sanxing1AMOLED屏',
                pclass: {
                    pname: '6.21英寸',
                    ppx: '双1200万像素',
                    pmAh: '3400mAh',
                    yun: '6GB',
                    wang: '4G全网通',
                    ping: '2248x1080',
                    CPU: '八核',
                    liang: '128G',
                    hou: '7.6mm',
                    mushi: '双卡双待',
                },
                productinfo: {
                    juan: '小米8P屏幕指纹版 6GB+1',
                    select: '小米8 6GB+128GB 蓝色x1',
                    zheng: ['小米自营', '小米发货', '7天无理由退货', '运费说明', '售后服务政策']
                }
            },
        },
        {
            id: 10,
            url: 'http://127.0.0.1:8000/img/320ff4db8a1712f26f394170a6600eca!360x360.jpg',
            title: '小米电视4A 55英寸',
            txt: '4k HDR，人工智能语音系统',
            newprice: '￥2299起',
            oldprice: '￥2799',
            Type: 2,
            detail: {
                tdetail: '全球首款双拼GPS/晓龙875处理器/晓龙8.0处理器高性能/红外人脸识别/AI变焦双摄/sanxing1AMOLED屏',
                pclass: {
                    pname: '6.21英寸',
                    ppx: '双1200万像素',
                    pmAh: '3400mAh',
                    yun: '6GB',
                    wang: '4G全网通',
                    ping: '2248x1080',
                    CPU: '八核',
                    liang: '128G',
                    hou: '7.6mm',
                    mushi: '双卡双待',
                },
                productinfo: {
                    juan: '小米电视4A 6GB+1',
                    select: '小米8 6GB+128GB 蓝色x1',
                    zheng: ['小米自营', '小米发货', '7天无理由退货', '运费说明', '售后服务政策']
                }
            },
        },
        {
            id: 11,
            url: 'http://127.0.0.1:8000/img/bf14656f58885e25b2d7170a933189d2!360x360.jpg',
            title: '小米电视4A 32英寸',
            txt: '人工智能语音系统，高清液晶屏',
            newprice: '￥3199起',
            oldprice: '0',
            Type: 2,
            detail: {
                tdetail: '全球首款双拼GPS/晓龙875处理器/晓龙8.0处理器高性能/红外人脸识别/AI变焦双摄/sanxing1AMOLED屏',
                pclass: {
                    pname: '6.21英寸',
                    ppx: '双1200万像素',
                    pmAh: '3400mAh',
                    yun: '6GB',
                    wang: '4G全网通',
                    ping: '2248x1080',
                    CPU: '八核',
                    liang: '128G',
                    hou: '7.6mm',
                    mushi: '双卡双待',
                },
                productinfo: {
                    juan: '小米电视4A 6GB+1',
                    select: '小米8 6GB+128GB 蓝色x1',
                    zheng: ['小米自营', '小米发货', '7天无理由退货', '运费说明', '售后服务政策']
                }
            },
        },
        {
            id: 12,
            url: 'http://127.0.0.1:8000/img/93d51641361775dbf929204b258f4cef!360x360.jpg',
            title: '小米电视4x 55英寸',
            txt: '4k HDR，人工智能语音系统',
            newprice: '￥3199起',
            oldprice: '￥3299',
            detail: {
                tdetail: '全球首款双拼GPS/晓龙875处理器/晓龙8.0处理器高性能/红外人脸识别/AI变焦双摄/sanxing1AMOLED屏',
                pclass: {
                    pname: '6.21英寸',
                    ppx: '双1200万像素',
                    pmAh: '3400mAh',
                    yun: '6GB',
                    wang: '4G全网通',
                    ping: '2248x1080',
                    CPU: '八核',
                    liang: '128G',
                    hou: '7.6mm',
                    mushi: '双卡双待',
                },
                productinfo: {
                    juan: '小米电视4x 6GB+1',
                    select: '小米8 6GB+128GB 蓝色x1',
                    zheng: ['小米自营', '小米发货', '7天无理由退货', '运费说明', '售后服务政策']
                }
            },


            Type: 2,
        },
        // {
        //     id: 13,
        //     url: 'http://127.0.0.1:8000/img/7d4d94788f8591e5557a4c23c3ba4307!360x360.jpg',
        //     title: '小米电视4x 43英寸',
        //     txt: '人工智能语音系统，高清液晶屏',
        //     newprice: '￥1299起',
        //     oldprice: '￥1599',
        //     Type: 1,
        //     detail: {
        //         tdetail: '全球首款双拼GPS/晓龙875处理器/晓龙8.0处理器高性能/红外人脸识别/AI变焦双摄/sanxing1AMOLED屏',
        //         pclass: {
        //             pname: '41英寸',
        //             ppx: '双1200万像素',
        //             pmAh: '3400mAh',
        //             yun: '6GB',
        //             wang: '4G全网通',
        //             ping: '2248x1080',
        //             CPU: '八核',
        //             liang: '128G',
        //             hou: '7.6mm',
        //             mushi: '双卡双待',
        //         },
        //         productinfo: {
        //             juan: '小米电视4x 6GB+1',
        //             select: '小米8 6GB+128GB 蓝色x1',
        //             zheng: ['小米自营', '小米发货', '7天无理由退货', '运费说明', '售后服务政策']
        //         }
        //     },
        // },
        // {
        //     id: 14,
        //     url: 'http://127.0.0.1:8000/img/7d4d94788f8591e5557a4c23c3ba4307!360x360.jpg',
        //     title: '黑鲨游戏手机',
        //     txt: '双冷夜，更能打',
        //     newprice: '￥3199起',
        //     oldprice: '0',

        //     Type: 1,
        //     detail: {
        //         tdetail: '全球首款双拼GPS/晓龙875处理器/晓龙8.0处理器高性能/红外人脸识别/AI变焦双摄/sanxing1AMOLED屏',
        //         pclass: {
        //             pname: '6.21英寸',
        //             ppx: '双1200万像素',
        //             pmAh: '3400mAh',
        //             yun: '6GB',
        //             wang: '4G全网通',
        //             ping: '2248x1080',
        //             CPU: '八核',
        //             liang: '128G',
        //             hou: '7.6mm',
        //             mushi: '双卡双待',
        //         },
        //         productinfo: {
        //             juan: '黑鲨游戏手机 6GB+1',
        //             select: '小米8 6GB+128GB 蓝色x1',
        //             zheng: ['小米自营', '小米发货', '7天无理由退货', '运费说明', '售后服务政策']
        //         }
        //     },
        // },
        // 智能家居


    ];
    var img = [{
            id: 1,
            src1: 'http://127.0.0.1:8000/img/02ae8e94-0832-03a8-b476-dceead2355c0.webp',
            src2: 'http://127.0.0.1:8000/img/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp',
            src3: 'http://127.0.0.1:8000/img/1536b35d-2a41-9343-8a53-b8f5a679eede.webp',
            src4: 'http://127.0.0.1:8000/img/5d30814e-27d0-6bd5-8515-f05afefffae8.webp',
        },
        {
            id: 2,
            src1: 'http://127.0.0.1:8000/img/02ae8e94-0832-03a8-b476-dceead2355c0.webp',
            src2: 'http://127.0.0.1:8000/img/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp',
            src3: 'http://127.0.0.1:8000/img/1536b35d-2a41-9343-8a53-b8f5a679eede.webp',
            src4: 'http://127.0.0.1:8000/img/5d30814e-27d0-6bd5-8515-f05afefffae8.webp',
        },
        {
            id: 3,
            src1: 'http://127.0.0.1:8000/img/02ae8e94-0832-03a8-b476-dceead2355c0.webp',
            src2: 'http://127.0.0.1:8000/img/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp',
            src3: 'http://127.0.0.1:8000/img/1536b35d-2a41-9343-8a53-b8f5a679eede.webp',
            src4: 'http://127.0.0.1:8000/img/5d30814e-27d0-6bd5-8515-f05afefffae8.webp',
        },
        {
            id: 4,
            src1: 'http://127.0.0.1:8000/img/02ae8e94-0832-03a8-b476-dceead2355c0.webp',
            src2: 'http://127.0.0.1:8000/img/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp',
            src3: 'http://127.0.0.1:8000/img/1536b35d-2a41-9343-8a53-b8f5a679eede.webp',
            src4: 'http://127.0.0.1:8000/img/5d30814e-27d0-6bd5-8515-f05afefffae8.webp',
        },
        {
            id: 5,
            src1: 'http://127.0.0.1:8000/img/02ae8e94-0832-03a8-b476-dceead2355c0.webp',
            src2: 'http://127.0.0.1:8000/img/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp',
            src3: 'http://127.0.0.1:8000/img/1536b35d-2a41-9343-8a53-b8f5a679eede.webp',
            src4: 'http://127.0.0.1:8000/img/5d30814e-27d0-6bd5-8515-f05afefffae8.webp',
        },
        {
            id: 6,
            src1: 'http://127.0.0.1:8000/img/02ae8e94-0832-03a8-b476-dceead2355c0.webp',
            src2: 'http://127.0.0.1:8000/img/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp',
            src3: 'http://127.0.0.1:8000/img/1536b35d-2a41-9343-8a53-b8f5a679eede.webp',
            src4: 'http://127.0.0.1:8000/img/5d30814e-27d0-6bd5-8515-f05afefffae8.webp',
        },
        {
            id: 7,
            src1: 'http://127.0.0.1:8000/img/02ae8e94-0832-03a8-b476-dceead2355c0.webp',
            src2: 'http://127.0.0.1:8000/img/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp',
            src3: 'http://127.0.0.1:8000/img/1536b35d-2a41-9343-8a53-b8f5a679eede.webp',
            src4: 'http://127.0.0.1:8000/img/5d30814e-27d0-6bd5-8515-f05afefffae8.webp',
        },
        {
            id: 8,
            src1: 'http://127.0.0.1:8000/img/02ae8e94-0832-03a8-b476-dceead2355c0.webp',
            src2: 'http://127.0.0.1:8000/img/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp',
            src3: 'http://127.0.0.1:8000/img/1536b35d-2a41-9343-8a53-b8f5a679eede.webp',
            src4: 'http://127.0.0.1:8000/img/5d30814e-27d0-6bd5-8515-f05afefffae8.webp',
        },
        {
            id: 9,
            src1: 'http://127.0.0.1:8000/img/02ae8e94-0832-03a8-b476-dceead2355c0.webp',
            src2: 'http://127.0.0.1:8000/img/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp',
            src3: 'http://127.0.0.1:8000/img/1536b35d-2a41-9343-8a53-b8f5a679eede.webp',
            src4: 'http://127.0.0.1:8000/img/5d30814e-27d0-6bd5-8515-f05afefffae8.webp',
        },
        {
            id: 10,
            src1: 'http://127.0.0.1:8000/img/02ae8e94-0832-03a8-b476-dceead2355c0.webp',
            src2: 'http://127.0.0.1:8000/img/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp',
            src3: 'http://127.0.0.1:8000/img/1536b35d-2a41-9343-8a53-b8f5a679eede.webp',
            src4: 'http://127.0.0.1:8000/img/5d30814e-27d0-6bd5-8515-f05afefffae8.webp',
        },
        {
            id: 11,
            src1: 'http://127.0.0.1:8000/img/02ae8e94-0832-03a8-b476-dceead2355c0.webp',
            src2: 'http://127.0.0.1:8000/img/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp',
            src3: 'http://127.0.0.1:8000/img/1536b35d-2a41-9343-8a53-b8f5a679eede.webp',
            src4: 'http://127.0.0.1:8000/img/5d30814e-27d0-6bd5-8515-f05afefffae8.webp',
        },
        {
            id: 12,
            src1: 'http://127.0.0.1:8000/img/02ae8e94-0832-03a8-b476-dceead2355c0.webp',
            src2: 'http://127.0.0.1:8000/img/f9cea6ca-2711-a7da-dd94-4468f0d591ec.webp',
            src3: 'http://127.0.0.1:8000/img/1536b35d-2a41-9343-8a53-b8f5a679eede.webp',
            src4: 'http://127.0.0.1:8000/img/5d30814e-27d0-6bd5-8515-f05afefffae8.webp',
        },
    ];
    var arr = [];
    if (id != undefined && id != '') {
        for (var i of obj) {
            if (id == i.id) {
                arr.push(i);
                for (var j of img) {
                    if (id == j.id) {
                        console.log(i);
                        console.log(j);
                        arr.push(j);
                        res.send(arr);
                    }
                }
                console.log(i);
                // res.send(obj);
            }
        }
    } else {
        // console.log(id);
        res.send(obj);
    }

})
router.get('/defapt', (req, res) => {
    var obj1 = [
        { id: 1, src: 'http://127.0.0.1:8000/img/m17.jpg', title: '米家空气净化器', txt: '适用于大面积，长效寿命，曹勇先进静音技术', price: '￥1999' },
        { id: 2, src: 'http://127.0.0.1:8000/img/m18.jpg', title: '米家电水壶', txt: '1.5L大容量，满足多人同时饮水', price: '￥99' },
        { id: 3, src: 'http://127.0.0.1:8000/img/m19.webp', title: '九号平衡车', txt: '年轻人的库玩具，骑行遥控两种玩法', price: '￥1999' },

    ];
    res.send(obj1);
})


router.get('/shopcars', (req, res) => {

    var pid = req.query.id;
    console.log(pid)
    if (pid == '' || pid == undefined || pid == Object) {
        res.send({ code: 0, msg: '为空' })
    } else {
        var sql = 'select * from product where pid=? '
        pool.query(sql, [pid], (err, data) => {
            if (err) console.log(err)
            console.log(data);
            if (data.length != 0) {
                res.send({ code: 1, msg: data });
            }
        })
    }

})


router.get('/tju', (req, res) => {
    var obj = [
        { name: '韩信', value: 188, s: 100 },
        { name: '张良', value: 108, s: 200 },
        { name: '孙策', value: 128, s: 300 },
        { name: '候贼', value: 500, s: 250 }
    ];
    res.writeHead(200, {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*"
    });

    res.write(JSON.stringify(obj));
    res.end();
})

//
router.get('/sales', (req, res) => {
    // res.writeHead(200,{
    //     "Content-Type":"application/json;charset=utf-8",
    //     "Access-Control-Allow-Origin":"*"
    // });
    var sql = 'select y.name,sum(s.sales) as s';
    sql += ' from xz_yaopin y,xz_sales s ';
    sql += ' where y.id = s.yid ';
    sql += ' and s.year = 2018';
    sql += ' group by y.name ';
    pool.query(sql, (err, result) => {
        if (err) console.log(err);
        res.send(result)
    })
})


//获取图片资源
router.get('getimglist', (req, res) => {
    var imgs = [
        { id: 1, name: 'logo', src: 'http://127.0.0.1:8000/img/xm.png' },
        { id: 2, src: 'http://127.0.0.1:8000/img/' }
    ];
    res.send(imgs);
})

// //测试
// router.get('/login', (req, res) => {
//     var a = req.query.id;
//     var msg = '你好';
//     res.send(msg)
// })

module.exports = router;