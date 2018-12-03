
<style scoped>
    div.shopcar{
        /* position: absolute;
        background: white;
        width: 100%;
        height: 100%; */
    }
    div.shopcar #fonts .mint-button .mint-button--default{
        font-size:20px;
    }
    div.shopcar .mint-header{
        background: #F2F2F2;
        color: #666666;
        height: 3.5rem;
    }
    /* header */
    div.shopcar div.header{
        /* border: 1px solid red; */
        /* width: 100%; */
    }
    /* li */
    div.shopcar .mui-table-view .mui-media, .mui-table-view .mui-media-body{
        /* height:6.5rem; */
    }
    div.shopinfo{
        display: flex;
        /* border: 1px solid red; */
        justify-content: space-between
    }
    div.shopinfo div.delshop{
        /* border: 1px solid blue; */
        height: 100%;
        width: 2rem;
        background: url(../../assets/img/icon/delte.png) 2px 2px no-repeat;
        background-size: 80%;
    }
    div.shoplist{
        display: flex;
        background: white;
        /* border: 1px solid red; */
        /* justify-content: center; */
        align-items: center;
    }
    div.shopingimg{
        border: 1px solid rgba(0,0,0,.1);
        width: 20%;
        display: flex;
        align-items: center;
        /* background: ; */
    }
    div.mui-media-body{
        margin-left: 10px;
        width: 70%;
    }
    div.mui-media-body h4{
        font-size: 1rem;
        font-weight: 400;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    div.shopcar div.shopingimg img{
        width: 100%;
        height: auto;
    }
    div.shopcar .mui-table-view .mui-media-object{
       max-width: 5rem;
       
    }
    div.checkbox{
        width: 20px;
        height: 20px;
        margin-right:8px;
        border: 1px solid rgba(0,0,0,.4);
        border-radius: 50%;
    }
     div.checkbox img{
         width: 105%;
     }
    div.mui-numbox{
        width: 120px;
        height:30px ;
        background: white;
    }
     div.shopcar .price{
         color:rgba(0,0,0,.3);
     }
     div.carbottom{
         position: fixed;
         bottom: 0;
         left: 0;
         right: 0;
     }
     div.buycar{
         display: flex;
         justify-content: space-around;
     }
     div.buycar>div{
         flex: 1;
         height: 3.3rem;
         border-right: 1px solid rgba(0,0,0,.1);
         text-align: center;
     }
     div.buycar div.buycar-lf{
         background: white;
         padding-top:5px;
     }
    div.buycar div.buycar-lf p{
        margin: 0;
        padding: 0;
    }
    div.buycar div.buycar-lf p:first-child{
        font-size: 0.8rem;
        color: #A7A7A7;
    }
    div.buycar div.buycar-lf p:last-child{
        font-size: 1.2rem;
        color: #FF6700;
    }
     div.buycar-cnt{
         background: #F4F4F4;
         line-height:3.3rem; 
     }
     div.buycar-cnt p{
         color: #A7A7A7;
         font-size: 1rem;
     }
     div.buycar-rf{
         line-height:3.3rem;
          background: #FF6700;
     }
     div.buycar-rf p{
         font-size: 1rem;
         color: white;
     }
     .v-none{
         visibility:hidden;
         /* display: none; */
     }

     /* 猜你喜欢 */
     div.likeshop{
         /* border: 1px solid red; */
        margin-bottom:50px;;
     }
     div.likelist{
         display: flex;
         flex-wrap: wrap;
     }
     div.likeitem{
         width: 50%;
         padding: 2px;
         display: flex;
         flex-direction: column;
     }
     div.likeimg{
        
     }
     div.likeimg img{
         width: 100%;
         height: auto;
     }
     div.liketxt{
         margin: 0;
         background: white;
         display: flex;
         flex-direction: column;
         /* border:1px solid red; */
         padding:0 10px;
     }
    div.liketxt p:first-child{
        /* text-align:center; */
        font-size: 0.8rem;
        color: black;
        margin: 2px 0 2px 0;
    }
    div.liketxt p:last-child{
        color: #FF6700;
        font-size: 1rem;
    }
    div.liketxt p:last-child span:last-child{
        color: #A7A7A7;
        font-size: 0.7rem;
    }
    div.div.cailike{
        width: 100%;
        height: auto;
    }
    div.cailike img{
        width: 100%;
    }
</style>
<template>
    <div class="shopcar">
        <div class="header" id="fonts">
            <!-- 头部 -->
                <mt-header fixed:true  title="购物车">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="search" @click="searchs()" slot="right"></mt-button>
                </mt-header>
        </div>
        <div class="shop-login">

        </div>
        <div class="shop-content">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-media"  v-for='(item,index) in selectlist'  :key="item.id">
                        <a >
                            <div class="shoplist">
                                <div @click="toggleselect($event,index)" class="checkbox" data-keys='`${item.id}`'><img  class="" src="../../assets/img/icon/isok.png" alt=""></div>
                                 <div class="shopingimg">
                                      <img class="mui-media-object mui-pull-left" :src="item.img">
                                </div>
                                 <div class="mui-media-body">
                                    <h4>{{item.title}}<span>{{item.color}}</span></h4>
                                    <p class="price">售价：<span v-text="item.price"></span></p>
                                    <div class="shopinfo"> 
                                        <div>
                                            <div class="mui-numbox" data-numbox-step='10' data-numbox-min='0' data-numbox-max='100'>
                                                <button @click="changenumber(index,0)" class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                                                <input class="mui-numbox-input" readonly v-model="item.num" type="number" />
                                                <button @click="changenumber(index,1)" class="mui-btn mui-numbox-btn-plus" type="button">+</button>
                                            </div>
                                        </div>
                                        <div class="delete">
                                            <div class="delshop" @click="remove(index)"></div>
                                        </div>
                                    </div>
                            </div>
                            </div>
                           
                        </a>
                    </li>
                </ul>
        </div>
        <div class="carbottom">
                <div class="buycar">
                    <div class="buycar-lf">
                        <p>共<span></span>件2 金额：</p>
                        <p class="sumprice" ><span >{{getsumcar}}</span>元</p>
                    </div>
                    <div @click="goshop()" class="buycar-cnt">
                        <p>继续购物</p>
                    </div>
                    <div @click="shoppay()" class="buycar-rf">
                        <p>去结算</p>
                    </div>
                </div>
        </div>
        <!-- 猜你喜欢 -->
        <div>
            <div class="cailike">
                <!-- 图 -->
                <img src="http://127.0.0.1:8000/img/product/like.jpg" alt="">
            </div>
        </div>
        <div class="likeshop">
            <div class="likelist">
                <div class="likeitem">
                    <div class="likeimg">
                        <img src="http://127.0.0.1:8000/img/product/cef9d0ed-8657-a8ed-39a3-66956bcabe9e!360x360.webp" alt="">
                    </div>
                    <div class="liketxt">
                        <p>
                            <!-- title -->
                            小米手环3 NFC版
                        </p>
                        <p>
                            <span>
                            <!-- price -->
                            ￥199
                            </span>
                            <span>
                               ￥269 <!-- oldprice -->
                            </span>
                        </p>
                    </div>
                </div>
                <div class="likeitem">
                    <div class="likeimg">
                        <img src="http://127.0.0.1:8000/img/product/cef9d0ed-8657-a8ed-39a3-66956bcabe9e!360x360.webp" alt="">
                    </div>
                    <div class="liketxt">
                        <p>
                            <!-- title -->
                            小米手环3 NFC版
                        </p>
                        <p>
                            <span>
                            <!-- price -->
                            ￥199
                            </span>
                            <span>
                               ￥269 <!-- oldprice -->
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
import { Toast } from 'mint-ui';
    export default{
        data(){
            return {
                srcs:['../../assets/img/icon/hom.png','../../assets/img/icon/soft.png','../../assets/img/icon/car1.png','../../assets/img/icon/person.png'],
                selectlist:[],
                ischeck:true,
                shopval:'1',
                summoney:0,
                datalist:[
                    {id:1,img:'http://127.0.0.1:8000/img/product/product1.jpg',color:'黑色',title:'小米学院休闲双肩包',price:'69',num:'2',selects:true},
                    {id:2,img:'http://127.0.0.1:8000/img/product/p2.jpg',color:'深蓝',title:'小米数码手纳包',price:'49',num:'2',selects:true},
                    {id:3,img:'http://127.0.0.1:8000/img/product/p3.jpg',color:'黑色',title:'小米手环3',price:'199',num:'1',selects:true},
                ],
            }
        },
        methods:{
            //搜索
            searchs(){
                this.$router.push('/index/search')
            },
            // 结算
            shoppay(){
                Toast({
                    position: 'bottom',
                    duration: 3000,
                    message: '支付成功',
                    iconClass: 'icon icon-success'
                });
            },
            // 继续购物
            goshop(){
                this.$router.push('/soft');
            },
            //通过es6数组的findIndex并传入对应的ID,可以返回元素的位置。
            findPosition(id){
                // this.selectlist = this.$store.state.goodlist; 
                console.log(id); 
                return this.selectlist.findIndex((item,index,arr)=>{
                    return index==id;   //判断数组的id  与传过来的id  返回找到的下标
                })
            },

            remove(id){
                var i=this.findPosition(id);
                this.$store.commit('deletegooslist',i);
                console.log(id,i);
                // alert(id);
                // this.selectlist.splice(i,1);
            },
            select(e,id){
                
                console.log(e.target);
                if(this.ischeck){
                for( var i of this.selectlist){
                    console.log(2);
                    if(i.id==id){
                        if(e.target.firstElementChild==null){
                            e.target.classList.add('v-none');
                        }else{
                            e.target.firstElementChild.classList.remove('v-none');
                        }

                        // console.log(3);
                        // e.target.src=''
                        // console.log(e.target.firstElementChild);
                        // console.log(e.target.getAttribute('data-keys'));
                    }
                }
                }else{
                    
                }
                
            },

            changenumber(id,val){

                var i=this.findPosition(id);
                console.log(i);
                console.log(this.selectlist);
                var number=parseInt(this.selectlist[i].num);
                console.log('点击第'+i);
                if(val==1){
                    number=number+1;
                }
                if(val==0){
                    if(number>1){
                        number--;
                    }
                }

                console.log(number);
                this.$store.commit('updatelist',{
                    index:i,
                    key:'num',
                    value:number,
                })
            },
            toggleselect(e,id){
                
                var i=this.findPosition(id);
                console.log('点击第几个'+i)
                var selects=this.selectlist[i].selects;    
                console.log('选择'+selects);
                if(selects==true){
                  if(e.target.firstElementChild==null){
                            e.target.classList.add('v-none');
                      }else{
                      e.target.firstElementChild.classList.remove('v-none');
                    }
                }else{
                     if(e.target.firstElementChild==null){
                            e.target.classList.add('v-none');
                    }else{
                      e.target.firstElementChild.classList.remove('v-none');
                    }
                }
                this.$store.commit('updatelist',{
                    index:i,
                    key:'selects',
                    value:!selects
                    // Math.abs(selects-1)
                });

            },
            // 为vuex goodlist 赋值
            putgoodlist(){
                //获取共享数据
                // var a=this.datalist
                // for(var item of a){
                    // console.log(item);
                    // this.$store.commit('goodlists',item);
                // }
                //为共享数据赋值到本地
                this.selectlist = this.$store.state.goodlist;  
                // console.log(b);
            }
            // subshop(id){
            //     console.log(id)
            //     if(this.shopval>=1){
            //         for(var i of this.datalist){
            //             if(i.id==id){
            //                 i.num--;
            //                 if(i.num<=0){
            //                     i.num=1;
            //                 }
            //             }
            //         }
            //     }
            // },
            // addshop(id){
            //     console.log(id);
            //     if(this.shopval>=1&& this.shopval<1000){
            //         for(var i of this.datalist){
            //             if(i.id==id){
            //                 i.num++;
            //             }
            //         }
            //     }
            // },
            //  getsumcar(){
            //     var sum=0;
            //     for(var item of this.datalist){
            //         sum+=item.price*item.num;
            //     }
            //     // this.summoney=sum;
            //     return sum;

            // }

        },
        computed:{
            getsumcar:function(){
                  // 获取共享数据
                var sum=0;
                console.log(this.selectlist);
                for(var item of this.selectlist){
                    if(item.selects ==false){
                    sum+=item.price*item.num;
                    }
                }
                return sum;

            },
        },created() {
            this.putgoodlist();     //页面每次加载都会赋值
        //    this.summoney=this.getsumcar();
        },
    }
</script>
