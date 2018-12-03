<style scoped>
    div,h3,p,span{
        padding: 0;
        margin: 0;
    }
    div.details{
        width: 100%;
        /* border: 1px solid red; */
    }
    div.details-swipe{
        position: relative;
    }
    div.detail-top{
        position: absolute;
        top: 0.5rem;
        /* width: 2.5rem; */
        width: 100%;
        height: 3rem;
        /* border: 1px solid red; */
        display: flex;
        z-index: 1;
        justify-content: space-between
    }
    div.details div.back{
        width: 2rem;
        height: 2rem;
        margin: 5px 0 0 10px;
        border: 1px solid #656260;
        border-radius: 50%;
        background: #656260;
    }
    div.details div.back img{
        margin:8px 0 0 7px;
        width: 50%;
        height: 50%;
    }
    div.details div.share{
        margin: 5px 10px 0 0;
        width: 2rem;
        height: 2rem; 
        border: 1px solid #656260;
        border-radius: 50%;
        background:#656260;
    }
    div.details div.share img{
        margin:5px 0 0 6px;
        width: 60%;
        height: 60%;
    }
    div.details div.activety{   
        position: absolute;
        width: 3.6rem;
        height: 3.6rem;
        bottom:1rem;
        right: 1.2rem;
        border: 1px solid lightpink;
        border-radius: 50%;
        background:lightcoral;
        padding-top: 3px;
        z-index: 1;
    }
    div.details div.activety p{
        margin: 0;
        padding: 0;
        font-size: 0.7rem;
        display: flex;
        align-content: center;
        color: lavenderblush;
        flex-direction: column;
        align-items: center;
    }
    div.details div.bander{
        /* position: relative; */
        /* z-index: -1; */
    }
    /* 详情页 */

    div.product{
        width: 100%;
        margin-bottom: 4rem;
        background: white;
    }
    div.detail-title{
        padding:1.5rem 2rem 0.2rem 2rem;
    }
    div.detail-title h3{
        font-size: 1.6rem;
        font-weight: 400;
        color: #222;
    }
    div.tdetail{
        padding: 0.5rem 2rem;
          display: inline-flex;
        flex-wrap: wrap;
    }
    div.tdetail a{
        color: #8F8F94;
    }
    div.tdetail p{
      
        font-size: 0.9rem;
    }
    div.tdetail p span{
        color: #FF4A00;
        margin-right: 0.6rem;
        font-size: 0.8rem;
    }
    div.price{
        padding: 0 2rem 1rem 2rem;
        display: flex;
       
    }
    div.price div:first-child{
        font-size: 1.2rem;
        color: #FF6700;
    }
    div.oldprice{
        color: #999999;
        text-decoration: line-through
    }
    div.price div.oldprice{
        font-size: 0.8rem;
        margin-left: 0.6rem;
        line-height: 2rem;
    }
    div.pclass{
        overflow:scroll;
    }
    div.ping{
        display: flex;
        width: 600px;
    }
    div.pclassbox{
        /* border:1px solid red; */
        width: 6rem;
        border-right: 1px solid #999;
        text-align: center;
    }
    /* div.pclassbox::after{
        content: '1';
        display: block;
        height: auto;
        border-right: 1px solid rgba(0,0,0,.2)
    } */
    div.pclassbox p{
        font-size: 0.6rem;
    }
    div.pclassbox:last-child{
        border-right: none;
    }
    div.pclassbox img{
        width:1.5rem;
        height:1.5rem;
    }
    div.productinfo{
        padding: 0 2rem;
        /* border:1px solid red; */
    }
    div.productinfo ul{
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
    }
    div.productinfo ul li{
        height: 2.6rem;
        display: flex;
        align-items:center;
        justify-content: space-between;
        border: 1px solid lavender;
        border-radius: 10px;
        padding: 0 0.5rem;
        box-sizing: border-box;
    }
    div.productinfo ul li p{
        font-size: 0.8rem;
    }
    div.productinfo ul li.item1{
        margin: .8rem 0;
        background: #FAFAFA;
    }
    div.productinfo ul li.item2{
        background: #F6F6F6;
        margin-bottom: 0.6rem;
    }
    div.productinfo ul li.item3{
        background: #F6F6F6;
        margin-bottom: 0.6rem;
    }
    div.productinfo ul li>p:nth-child(1){
        flex: 1;
        color: #222;
    }
    div.productinfo ul li>p:nth-child(2){
        flex: 6;
    }
    div.productinfo ul li>p:nth-child(3){
        flex: 1;
        text-align: right;
    }
    div.productinfo ul li.item4>p:nth-child(1){
        flex: 8;
    }
    div.productinfo ul li.item4>p:nth-child(2){
        flex: 1;
    }
    li.item4 span{
        display: inline-block;
        font-size: 0.7rem;
        margin: 0 0.2rem;
        color: #737373;
    }
    li.item4 span b{
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        /* border: 1px solid red; */
        background: url(http://127.0.0.1:8000/img/icon/ico.png) no-repeat;
        background-size:100%;
    }
    div.product p.gengd{
        text-align: right;
        display: inline-block
    }
    div.product p.gengd span{
        display: inline-block;
        width: 1.2rem;
        height: 1.9rem;
        /* border: 1px  solid red; */
        background: url(http://127.0.0.1:8000/img/icon/right.png) no-repeat 100%;
    }
    div.product span.zping{
        font-size: 0.6rem;
        border: 1px solid #F56600;
        padding: 2px;
        color: #F56600;
        margin: 0 0.2rem 0 0;
    }
    div.product span.huo{
        font-size: 0.9rem;
        padding-left: 5px;
        color: lightsalmon;
    }
    div.saybox{
        /* border:1px solid red; */
        border-radius: 10px;
        margin: 1rem 2rem;
        display: flex;
        flex-direction: column;
        background: #FAFAFA;
    }
    div.saytop{
        box-sizing: border-box;
        padding: 0.5rem 0 0 0.5rem;
        display: flex;
        /* justify-content: space-between; */
    }
    div.saycnt{
        display: flex;
        padding:0 1rem;
    }
    div.saycnt p{
        font-size: 0.8rem;
    }
    div.sayimg{
        height: 5rem;
        overflow: hidden;
        margin: 1rem 0;
    }
    div.sayimglist1{
        margin: 0 0.3rem;
    }
    div.say-header{
        width: 2rem;
        height: 2rem;
        /* border:1px solid red; */
    }
    div.say-header img{
        width: 100%;
        height: auto;
    }
    div.sayname{
        margin-left: 1rem;
        
    }
    div.sayname p{
        font-size: 0.5rem;
    }
    div.sayimgh{
        display: flex;
        padding: 0 1rem;
    }
    div.sayimg img{
        width: 100%;
        height: auto;
    }
    div.sayzan{
        
    }
    div.saybottom{
        padding: 1rem 1rem;
        margin-bottom: 1rem;
    }
    div.saybottom p{
        font-size: 0.8rem;
    }
    div.addsay{
        height: 3rem;
        width: 100%;
        line-height: 3rem;

        text-align: center;
        font-size: 1.3rem;
        background: white;
        /* border: 1px solid red; */
    }
     div.addsay>span{
         display:block;
         width: 0;
         height: 0;
         border-top: 5px solid gray;
         border-left: 5px solid gray;
         border-bottom: 5px solid gray;
     }
     div.shopbar{
         border: 1px solid rgba(0,0,0,.1);
         border-radius: 20px;
         height:3.5rem;
         position: fixed;
         background: white;
         bottom: 0.5rem;
         left: 1.5rem;
         right: 1.5rem;
         z-index: 10;
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         box-shadow: 0 0 1px 1px rgba(0,0,0,.1);
     }
      div.shopbar img{
          width: 100%;
          height: auto;
      }
     div.shopbar div.backhome{
         width: 20%;
         /* border: 1px solid red; */
         height: 100%;
         display: flex;
         align-items: center;
         flex-direction: column;
         justify-content: center;
         /* margin: 3px 0; */

     }
     div.shopbar div.shopcount{
         width: 30%;
         position: relative;
         /* border: 1px solid red; */
         height: 100%;
         display: flex;
         flex-direction: column;
         /* align-items: center; */
         justify-content:center;
     }
     div.shopbar div.shopcount div.homeimg{
         margin-left: 0.3rem;
     }
     div.homeimg{
         width:1.6rem;
         height:1.6rem;
     }
      div.hometxt{
        font-size: 0.8rem;
     }
     div.shopcar{
         width: 40%;
         display: flex;
         /* justify-content: center; */
         align-items: center;
         margin-right: 1rem;
          /* border: 1px solid red; */
     }
     div.shopcar>div{
         width: 100%;
          border: 1px solid  #F56600;
          background :#FF6700;
          color: white;
          height: 2.3rem;
          line-height: 2.3rem;
          border-radius: 25px;
          font-size: 1rem;
         text-align: center;
     }
     div.shopalert{
         position: absolute;
         border: 1px solid red;
         border-radius: 50%;
         width:1rem;
         top:0.2rem;
         left: 1.5rem;
         height: 1rem;
         background: red;
        font-size: 0.6rem;
        text-align: center;
        line-height:0.9rem;;
        color: white;
     }
</style>

<template>
    <div>
        <div class="details">
            <div class="details-swipe">
                <div class="detail-top">
                    <div @click="back()" class="back"><img src="http://127.0.0.1:8000/img/icon/left.png" alt=""></div>
                    <div class="share"><img src="http://127.0.0.1:8000/img/icon/fx.png" alt=""></div>
                </div>
                <div class="activety"><p>双十一</p><p>2499元起</p></div>
                <div class="bander"><myswipe :imgsrc='swipe'></myswipe></div>
            </div>
            <div class="product">
                <div class="detail-title"><h3 v-text="details.title"></h3></div>
                <div class="tdetail"><p><span>[双&nbsp;11·11&nbsp;返场]</span><a v-text="details.detail.tdetail">全球首款双拼GPS/晓龙845处理器/晓龙6.6处理器高性能/红外人脸识别/AI变焦双摄/sanxing1AMOLED屏</a></p></div>
                <div class="price"><div class="newprice" v-text="details.newprice"></div><div v-if="details.oldprice==0?'':details.oldprice" class="oldprice"></div></div>
                <div class="pclass">
                    <div class="ping">
                    <div class="pclassbox"><p><img src="../../assets/img/detail/86a3bd46cf4f7f19daa2c3250cf30604.png" alt=""></p><p>超大屏</p><p v-text="details.detail.pclass.pname"></p></div>
                    <div class="pclassbox"><p><img src="../../assets/img/detail/7692726e7a1dd34a3b1b4ede8aca020d.png" alt=""></p><p >超大屏</p><p v-text="details.detail.pclass.ppx">6.21英寸</p></div>
                    <div class="pclassbox"><p><img src="../../assets/img/detail/0b4ea0fb21dde2f29df3c20de73539b9.png" alt=""></p><p>超大屏</p><p v-text="details.detail.pclass.pmAh">6.21英寸</p></div>
                    <div class="pclassbox"><p><img src="../../assets/img/detail/c8ec0829241324e401744da627482560.png" alt=""></p><p>超大屏</p><p v-text="details.detail.pclass.yun">6.21英寸</p></div>
                    <div class="pclassbox"><p><img src="../../assets/img/detail/d1b67a407fb2a1ed42c2c0ce15af3318.png" alt=""></p><p>超大屏</p><p v-text="details.detail.pclass.wang">6.21英寸</p></div>
                    <div class="pclassbox"><p><img src="../../assets/img/detail/f0c04e138bfed2b1ebb589de615236d1.png" alt=""></p><p>超大屏</p><p v-text="details.detail.pclass.ping">6.21英寸</p></div>
                    <div class="pclassbox"><p><img src="../../assets/img/detail/8941adac25333e785b9cc78ca11f4f27.png" alt=""></p><p>存储容量</p><p v-text="details.detail.pclass.liang">128G</p></div>
                    </div>
                </div>

                <div class="productinfo">
                    <ul>
                        <li class="item1">
                
                                <p>促销</p>
                                <p><span class="zping">赠品</span>赠送米粉卡，最高含100元话费</p>
                                <p class="gengd"><span></span></p>
                
                        </li>
                        <li class="item2">
                            
                                <p>已选</p>
                                <p>红米6A 2G+16GB 流沙金 x 1</p>
                                <p class="gengd"><span></span></p>
                           
                        </li>
                        <li class="item3">
                        
                                <p>送至</p>
                                <p>北京市 东城区<span class="huo">有现货</span></p>
                                <p class="gengd"><span></span></p>
                          
                        </li>
                        <li class="item4">

                                <p><span><b></b>小米自营</span><span><b></b>小米发货</span><span><b></b>7天无理由退货</span></p>
                                <p class="gengd"><span></span></p>
                           
                        </li>
                    </ul>
                </div>

                <div class="saybox">
                <div class="saytop">
                    <div class="say-header">
                        <img src="http://127.0.0.1:8000/img/74184199b32c4b86859788accb400e9b25994f61.png" alt="">
                    </div>
                    <div class="sayname">
                        <div><p>我爱小米</p></div>
                        <div><p>2018-11-05</p></div>
                    </div>
                    <div class="sayzan">
                        zan
                    </div>
                </div>
                <div class="saycnt">
                    <div class="sattxt">
                        <p>从小米2s一直陪伴小米，小米是我的最爱，更喜欢客服妹子</p>
                    </div>
                </div>
                <div class="sayimg">
                    <div class="sayimgh">
                        <div class="sayimglist1">
                            <img src="http://127.0.0.1:8000/img/say1.jpg" alt="">
                        </div>
                        <div class="sayimglist1">
                            <img src="http://127.0.0.1:8000/img/say2.jpg" alt="">
                        </div>
                        <div class="sayimglist1">
                            <img src="http://127.0.0.1:8000/img/say3.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="saybottom">
                    <div class="saycontent">
                        <p>本来我是不愿意评论的，但是从你的字里行间看出了深深的情感，由此情感一如半满，犹如川田的春雨，夏天的池塘，冬天的白雪</p>
                    </div>
                </div>
                <div class="addsay">
                    <div>更多评论<span></span></div>
                </div>
            </div>
            </div>
            <!-- 评论 -->
            <div class="">
                <div class="shopbar">
                    <div class="backhome">
                        <div class="homeimg">
                            <img src="../../assets/img/icon/home.png" alt="">
                        </div>
                        <div class="hometxt">
                            <p>首页</p>
                        </div>
                    </div>
                    <div @click="jumpshopcar()" class="shopcount">
                        <div  class="shopalert">
                            {{$store.getters.optcount}}
                        </div>
                        <div class="homeimg">
                            <img src="../../assets/img/icon/shopcar.png" alt="">
                        </div>
                        <div class="hometxt">
                            <p>购物车</p>
                        </div>
                    </div>
                    <div @click="btnbuy()" class="shopcar">
                        <div>加入购物车</div>
                    </div>
                </div>
            </div>
                
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import myswipe from './swipes'
    export default {
        data(){
            return {
                swipe:{
                    height:400,
                    

                },
                list:[],
                id:'',
                details:{
                    tdetail:'',
                    pclass: {
                        pname: '',
                        ppx: '',
                        pmAh: '',
                        yun: '',
                        wang: '',
                        ping: '',
                        CPU: '',
                        liang: '',
                        hou: '',
                        mushi: '',
                    },
                },
                imgsrc:{},
                //购物车  数量
                count:0,
            }
        },
        // props:['id'],  //商品详情
        methods:{
            // 加入购物车
            btnbuy(){
                // this.$store.commit("addsum");
                console.log(this.id)
                this.$http.get('shopcars?id='+this.id).then((res)=>{
                    // console.log(res.body.msg[0]);
                    if(res.body.code==1){
                        var a=res.body.msg[0]
                        this.$store.commit('goodlists',a);
                    Toast("加入成功")

                    }
                  
                })
                //  console.log(this.$store.state.counts);
                //  this.$http.get('shopcars?id='+this.id).then((res)=>{
                //       this.$store.commit('goodlists',res.body)  //请求数据后放入Vuex
                //  })
                
            },
            //获取传过来的id
             getid(){
                 var a=this.$route.query.id;
                 this.id=a;
                 console.log(a);
             },
             //通过该id去查询数据
             getpruduct(){
                this.$http.get('defas?id='+this.id).then(res=>{
                    this.list=res.body;
                    // console.log(this.list);
                    [this.details,this.imgsrc]=this.list;
                    console.log(this.details)
                    this.swipe.imgsrc=res.body[1];
                })
            },
            //返回上一页
            back(){
                this.$router.go(-1);
            },
            jumpshopcar(){
                this.$router.push('/shopcar');
            }

        },
        components:{
            myswipe,   
        },
        created() {
            this.getid();
            this.getpruduct();
        },
        computed:{
            //获取vuex 的计算属性
            // countnum:function(){
            //     return this.$store.state.counts;
            //     console.log(this.$store.state.counts);
                
            // }
        }
    }
</script>
