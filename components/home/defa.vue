<template>
    <div id="defa">
        <div class="banders">
              <myswipes :imgsrc='imgurl'></myswipes>   <!--给子组件传值-不同轮播-->
        </div>
       

        <div class="content">
             <div class="title-imglist">
             <div><img src="http://127.0.0.1:8000/img/new1.png" alt="" title="新品发布"></div>
             <div><img src="http://127.0.0.1:8000/img/show.png" alt="" title="新品发布"></div>
             <div><img src="http://127.0.0.1:8000/img/new1.png" alt="" title="新品发布"></div>
             <div><img src="http://127.0.0.1:8000/img/d2eb91e6c795e4cf6175c453ad5b20e2!144x152.png" alt="" title="新品发布"></div>
             <div><img src="http://127.0.0.1:8000/img/active.png" alt="" title="新品发布"></div>
            </div>
            <div class="shop1">
                <div class="box-left">
                    <div>
                        <img src="http://127.0.0.1:8000/img/m8.jpg" alt="">
                    </div>
                </div>
                <div class="box-right">
                    <div class="box-r1">
                        <img src="http://127.0.0.1:8000/img/m9.webp" alt="">
                    </div>
                    <div class="box-r2">
                        <img src="http://127.0.0.1:8000/img/m10.webp" alt="">
                    </div>
                </div>
            </div>
            <div class="shop2">
                <img src="http://127.0.0.1:8000/img/m11.webp" alt="">
            </div>
            <div class="shop3">
                <img src="http://127.0.0.1:8000/img/m12.webp" alt="">
            </div>
            <div class="shop4">
                <div class="box-list">
                    <div class="box-info" v-for='item in product' :key='item.id'>
                        <div v-if="item.Type==1?item:''">
                            <div @click="jumpdetail(item.id)">
                        <div class="box-img"><img :src="item.url" alt=""></div>
                        <div class="box-txt">
                            <div class="title" v-text="item.title"></div>
                            <div class="brief">{{item.txt}}</div>
                            <div class="price">{{item.newprice}}<span v-if="item.oldprice==0?'':item.oldprice">{{item.oldprice}}</span></div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <!-- <div class="box-info">
                        <div class="box-img"><img src="http://127.0.0.1:8000/img/9f617ce8f3dd92709370421385717a38!360x360.jpg" alt=""></div>
                        <div class="box-txt">
                            <div class="title">小米8屏幕指纹版</div>
                            <div class="brief">压感屏幕木指纹，潮流外观</div>
                            <div class="price">￥3199起</div>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="shop5">
                <img src="http://127.0.0.1:8000/img/m13.webp" alt="">
            </div>
            <div class="shop6">
                <img src="http://127.0.0.1:8000/img/m14.webp" alt="">
            </div>
            <div class="shop7">
                <div class="box-list">
                    <div class="box-info" v-for='item in product' :key='item.id'>
                        <div v-if="item.Type==2?item:''">
                        <div class="box-img"><img :src="item.url" alt=""></div>
                        <div class="box-txt">
                            <div class="title" v-text="item.title"></div>
                            <div class="brief">{{item.txt}}</div>
                            <div class="price">{{item.newprice}}<span v-if="item.oldprice==0?'':item.oldprice">{{item.oldprice}}</span></div>
                        </div>
                        </div>
                    </div>
                    <div class="btnadd">
                        <div class="shop10">
                                <div>更多产品 &gt;</div>
                        </div>
                        </div>
                </div>
            </div>
            <div class="shop8">
                <div>
                    <img src="http://127.0.0.1:8000/img/m15.webp" alt="">
                </div>
                <div>
                    <img src="http://127.0.0.1:8000/img/m16.webp" alt="">
                </div>
            </div>
            <div class="shop9" v-for="item1 in homep" :key="item1.id"   :class="item1.id%2==0?'revos':''">
                <div class="boximg">
                    <img :src="item1.src" alt="">
                </div>
                <div class="boxtxt">
                    <div>
                        <h4>{{item1.title}}</h4>
                        <p>{{item1.txt}}</p>
                        <p>{{item1.price}}</p>
                    </div>
                </div>
                
            </div>

            <div class="shop10">
                <div>更多米家智能产品 &gt;</div>
            </div>
            <div class="shop11">
                <div><img src="http://127.0.0.1:8000/img/m20.webp" alt=""></div>
            </div>
            <div class="shop12">
                <div class="shop12-box">
                    <div><img src="http://127.0.0.1:8000/img/m21.webp" alt=""></div>
                    <div><img src="http://127.0.0.1:8000/img/m27.webp" alt=""></div>
                </div>
                <div class="shop12-box">
                    <div><img src="http://127.0.0.1:8000/img/m22.webp" alt=""></div>
                    <div><img src="http://127.0.0.1:8000/img/m23.webp" alt=""></div>
                </div>
                <div class="shop12-box">
                    <div><img src="http://127.0.0.1:8000/img/m24.webp" alt=""></div>
                    <div><img src="http://127.0.0.1:8000/img/m25.webp" alt=""></div>
                </div>
                <div>
                    <div><img src="http://127.0.0.1:8000/img/m26.webp" alt=""></div>
                 
                </div>
            </div>
            <div class="footers"><img src="http://127.0.0.1:8000/img/footer.png" alt=""></div>
        </div>
    </div>
</template>

<style scoped>
    /*修改mint ui*/
    .mint-button--default.is-plain{
        background: whitesmoke;
        border:1px solid rgba(0,0,0,0.1)
    }
    div.shop12-box{
        display: flex;
        justify-content: space-between;
    }
    div.banders{
        /* max-height: 100rem; */
        /* border: 1px solid blue; */
    }
    div.shop10{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid whitesmoke;
        background: white;
        padding: 1rem 0;
        border-radius: 10px;
        color: rgba(0,0,0,.5);
        margin: 0.5rem 0;
    }
    div.shop10:active{
        box-shadow: 0 0 1px rgba(0,0,0,.2);
        background: lightyellow;
        transition: all 0.1s linear;
    }
    #defa div.revos{
        display: flex;
        flex-direction: row-reverse;
    }
    #defa div.shop9{
        display: flex;
        justify-content:space-between;
    }
    #defa div.boximg{
        flex: 1;
        width: 50%;
    }
    #defa div.boxtxt{
        flex: 1;
        width: 50%;
    }
    #defa div.boxtxt>div{
        margin: 2rem 1rem 0 1rem;
    }
    #defa div.boxtxt>div>h4{
        color: #666;
        font-size: 1.2rem;
        font-weight:400;
        margin-bottom: 0.8rem;
    }
    #defa div.boxtxt>div>p:nth-child(2){
        color: #757575;
        font-size: 0.9rem;
        opacity: 0.8;
    }
    #defa div.boxtxt>div>p:last-child{
        color: red;
        margin-top: 0.2rem;
        font-size: 1.2rem;
    }
    #defa{
        padding-top: 6.5rem;
        /* border:1px solid red; */
        margin-bottom: 0.5rem;
    }
    #defa div.title-imglist{
        height: 100%;
        display: flex;
    }
    #defa div.title-imglist div{
        flex: 1;
    }
    #defa div.title-imglist img{
        width: 100%;
        height: auto;
    }
    #defa div.title-imglist img{
        width: 100%;
        height: auto;
    }
    div.content img{
        width: 100%;
        height: auto;
    }
    div.shop1{
        display: flex;
        justify-content:space-between;
    }
    div.box-left{
        flex: 1;
        /* border: 1px solid red; */
    }
    div.box-right{
        flex: 1;
        
        display: flex;
        flex-flow: column nowrap;
    }
    div.box-r1{
        flex: 1;
        /* border: 1px solid red; */
    }
    div.box-r2{
        flex: 1;
    }
    div.shop2,div.shop3{
        width: 100%;
        height: auto;
    }
    div.footers{
        height: 4rem;
    }


    /*  */
    div.box-list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    div.box-info{
        width: 50%;
        display: flex;
        flex-flow: column wrap;
    }
    div.box-txt{
        padding: 0.6rem 0;
        padding: 0.5rem 0.8rem;
        color:#3c3c3c;
        /* font-size: 1rem; */
        background: white;
    }
    div.box-txt div.title{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;  /*溢出省略号*/
        font-size:1rem;
        /* border: 1px solid red; */
        /* margin: 0 0 0.5rem 0; */
    }
    div.brief{
        font-size: 0.6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;  /*溢出省略号*/
        color: #757575;
        padding:0.5rem 0;
    }
    div.price{
        color: #EA625B;
        font-size:1rem;
    }
    div.price>span{
        color: gray;
        text-decoration: line-through;
        font-size: 0.5rem;
        margin-left: 0.2rem;
        font-size: 0.8rem;
    }
    div.btnadd{
        width: 100%;
        background: white;
    }
</style>

<script>
import myswipes from './swipes.vue'
    export default {
        data(){
            return {
                srcs:['../../assets/img/icon/home.png','../../assets/img/icon/soft.png','../../assets/img/icon/car.png','../../assets/img/icon/person.png'],

                 imgurl:[
                    {id:1,url:'../../assets/img/swipe1.jpg'},
                    {id:2,url:'../../assets/img/swipe2.jpg'},
                    {id:3,url:'../../assets/img/swipe3.jpg'},
                ],
                product:[],
                homep:[
                    {price:''},
                     {price:''},
                      {price:''},
                ],
            }
        },
        methods:{
            getcontent(){
                console.log(1);
                   this.$http.get('http://127.0.0.1:8000/defas').then(res=>{
                       this.product=res.body;
                    console.log(res);
                })
            },
            getproduct(){
                this.$http.get('defapt').then(res=>{
                    this.homep=res.body;
                    // console.log(this.homep)
                })
            },
            jumpdetail(id){
                console.log(id);
                this.$router.push('/index/detail?id='+id);
            }
        },
        created() { 
            this.getcontent();
            this.getproduct();
        },
        mounted() {
        },
        components:{
            myswipes,
        }
    }
</script>

