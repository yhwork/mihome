<style scoped>
    div.soft{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        background: white;
         position: fixed;
        /* border: 1px solid rebeccapurple; */
    }
    div.soft-header .mint-header{
        background: #F2F2F2;
        color: #666;
        height: 50px;
    }
    div.soft .mintui-more:before{
      content: '\E604' ; 
    }
    div.soft .mint-button-icon{
        margin-right: .8rem;
    }
    div.soft .mintui{
        font-size: 1.5rem;
    }
    div.soft-header{
        width: 100%;
        position: fixed;
    }
    div.soft-list{
        position: fixed;
        top: 50px;
        height: auto;
        width: 100%;
        display: flex;
        /* border: 1px solid red; */
    }
    div.soft-left{
        overflow: hidden;
        border:1px solid white;
        overflow-y:scroll;
        height: 83vh;
        border-right:1px solid rgba(0,0,0,.3);
    }
    div.scroll-left{
        width: 22%;
        height: 100%;
    }
    div.soft-left ul{
        margin: 1rem 0;
        padding: 0;
        text-align: center;
        /* border:1px solid red; */
    }
    div.soft-left ul li{
        /* border: 1px solid red; */
        padding: 0.8rem 0.5rem;
        height: 2.8rem;
    }
    div.soft-left ul li p{
        font-size: 0.8rem;
        color: rgba(0,0,0,.6)
    }
    div.soft-left ul li.fontstyle p{
        /* color: #FCA16C; */
        font-size: 1.3rem;
        font-weight: 500;
        /* background-image: linear-gradient(to right,orange,yellow,orange); */
        background-clip: text;
        -webkit-text-fill-color: #FCA16C;
    }
    /* div.hide{
        width:78%;
        overflow: hidden;
    } */
    div.soft-right{
       
        width: 100%;
        height: 83vh;
        /* border: 1px solid blue; */
        overflow-y: scroll;
    }
    div.ddl{
         position: relative;
    }
    div.scroll-right{
        width: 100%;
        height: 100%;
        overflow: hidden;
       
    }
    div.scroll-right dl{
        /* border: 1px solid red;  */
        height: auto;
        /* margin: 5rem 0; */
    }
    div.scroll-right div.titletxt p{
        text-align: center;
        /* border: 1px solid red; */
        height: 2.2rem;
        line-height: 2.2rem;
        margin-top: 1rem;
        font-size: 1rem;
        color: #666;
    }
    div.titletxt{
        width: 100%;
    }
    div.soft-right dd{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* align-items: center; */
    }
    div.soft-box1{
        /* flex: 1; */
        width: 30%;
        padding:0 0.5rem;
        margin: 0.3rem 0;
        box-sizing: border-box;
    }
    div.soft-box1 img{
        width: 100%;
        height: auto;

    }
    div.scroll-right div.titleimg{
        /* width:100%; */
        margin:0 2rem;
    }
    div.scroll-right div.titleimg img{
        width: 100%;
        height: auto;
    }
    div.softbox-txt{
        text-align: center;
        margin-top: 0.2rem;
    }
    div.softbox-txt p{
        font-size: 0.6rem;
        margin: 0;
        padding: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        /* width: 2rem; */
        white-space: nowrap;
        color: darkgrey;
    }
    div.footers{
        /* border: 1px solid red; */
        height: 50px;
        width: 100%;
        position: absolute;
        bottom:0px;
    }
</style>
<template>
    <div class="soft">
        <table></table>
        <div class="soft-header">
              <mt-header fixed:true  title="分类">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="search" @click="searchs()" slot="right"></mt-button>
                </mt-header>
        </div>
        <div class="soft-list">
            <div class="scroll-left">
                <div ref='left' class="soft-left">
                    <ul>
                        <li v-for="(item,index) in softs" :key="index">
                            <p class="djump" @click="jumps(index)" ref="offsettop">{{item}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- <div class="hide"> -->
              <div class="scroll-right">
                 <div  ref="rjump" class="soft-right">
                     <div  class="ddl"  >

                    
                    <dl  v-for='item in softitem' :key="item.id">
                        <dt><div  class="titleimg"><img v-lazy="item.softhead" alt=""></div></dt>
                        <dd v-for="pro in item.softbox" :key='pro.id' >
                            <div class="titletxt"><p>{{pro.title}}</p></div>
                            <div class="soft-box1" v-for="plist in pro.product" :key="plist.id">
                                <div>
                                    <img v-lazy="plist.img" alt="">
                                </div>
                                <div class="softbox-txt">
                                    <p>{{plist.name}}</p>
                                </div>
                            </div>
                        </dd>
                    </dl>
                   </div>
                 </div>
             </div>
            <!-- </div> -->
        </div>
      <div class="footers">
          <myfooter :imgs='srcs'></myfooter>
      </div>
    </div>
</template>

<script>
import myfooter from '../home/footer.vue'
    export default{
        data(){
            return {
                tops:'',
                srcs:['http://127.0.0.1:8000/img/icon/home1.png','http://127.0.0.1:8000/img/icon/soft.png','http://127.0.0.1:8000/img/icon/shopcar.png','http://127.0.0.1:8000/img/icon/my1.png'],
                softs:[
                    '新品','手机','电视','电脑',
                    '家电','路由','出行','穿戴',
                    '智能','电源','健康','灯具',
                    '儿童','插线板','音频','箱包',
                    '生活','配件','家装','礼品',
                    '服务','会员卡','米粉卡','零售店',
                ],
                softitem:[
                      {
                        softhead:'http://127.0.0.1:8000/img/soft/32900596-f89e-4986-7bcc-dda98c84ee14!500x200 (1).webp',
                        softbox:[
                            {id:1,title:'小米手机',type:'phone',
                            product:[
                                {id:1,img:'http://127.0.0.1:8000/img/soft/8dbd523e76673afb58e16e3f74520735!120x120.png',name:'小米MIX 3'},
                                {id:2,img:'http://127.0.0.1:8000/img/soft/51c53855defb28d558d71e02e0ae747d!120x120.png',name:'小米8 青春版'},
                                {id:3,img:'http://127.0.0.1:8000/img/soft/197587a8281cb9b62e73e94473605e7e!120x120.png',name:'小米8 屏幕指纹版'},
                                {id:4,img:'http://127.0.0.1:8000/img/soft/86020260a41e530fdc1f2f0b67ed5dd1!120x120.png',name:'小米8 3'},
                                {id:5,img:'http://127.0.0.1:8000/img/soft/e1ec0e143f0b203d56681c5604f75a3b!120x120.jpg',name:'小米8 SE'},
                                {id:6,img:'http://127.0.0.1:8000/img/soft/96d88d3beb17fc78fb930afe2f313f14!120x120.png',name:'小米Max 3'},
                            ]},
                            {id:2,title:'电视',type:'tv',
                            product:[
                                {img:'http://127.0.0.1:8000/img/soft/90553f751c9eb6bda9a2ae7c4bce012b!120x120.jpg',name:'58英寸电视4A'},
                                {img:'http://127.0.0.1:8000/img/soft/2996355ec2c73f64f77b3abaae900958!120x120.jpg',name:'40英寸 电视4c'},
                                {img:'http://127.0.0.1:8000/img/soft/e84d9b98b558bb57632be6dc794455e7!120x120.png',name:'43英寸 4X'},
                                {img:'http://127.0.0.1:8000/img/soft/bf2dc71cbf6fa8413b7ade09719155a0!120x120.jpg',name:'65电视旗舰版'},
                                {img:'http://127.0.0.1:8000/img/soft/e7de579c7c261b0bf73cf0e24f5332f4!120x120.jpg',name:'65英寸 Pro 4s'},
                                {img:'http://127.0.0.1:8000/img/soft/e1f8507456c92cf279c70a15374206e3!120x120.jpg',name:'55英寸 4X'},
                            ]},
                            {id:3,title:'电脑',type:'computer',
                            product:[
                                {img:'http://127.0.0.1:8000/img/soft/017f3d87c70b1f5ad1be446549d36de5!120x120.png',name:'15.6寸笔记本'},
                                {img:'http://127.0.0.1:8000/img/soft/3385f8309f3e90669d7ea94ad7d3bab4!120x120.jpg',name:'13.3"i3 银色版"'},
                                {img:'http://127.0.0.1:8000/img/soft/9b232bbf863196f3a76094b538442d13!120x120.jpg',name:'12.5 "office版"'},
                            ]},
                        ]
                    },
                    {
                        softhead:'http://127.0.0.1:8000/img/soft/99cf44ff-029b-c59b-a791-b8cec508492b!500x200.webp',
                        softbox:[
                            {id:1,title:'手机',type:'new',
                            product:[
                                {id:1,img:'http://127.0.0.1:8000/img/soft/8dbd523e76673afb58e16e3f74520735!120x120.png',name:'小米MIX 3'},
                                {id:2,img:'http://127.0.0.1:8000/img/soft/51c53855defb28d558d71e02e0ae747d!120x120.png',name:'小米8 青春版'},
                                {id:3,img:'http://127.0.0.1:8000/img/soft/197587a8281cb9b62e73e94473605e7e!120x120.png',name:'小米8 屏幕指纹版'},
                                {id:4,img:'http://127.0.0.1:8000/img/soft/86020260a41e530fdc1f2f0b67ed5dd1!120x120.png',name:'小米8 3'},
                                {id:5,img:'http://127.0.0.1:8000/img/soft/e1ec0e143f0b203d56681c5604f75a3b!120x120.jpg',name:'小米8 SE'},
                                {id:6,img:'http://127.0.0.1:8000/img/soft/96d88d3beb17fc78fb930afe2f313f14!120x120.png',name:'小米Max 3'},
                            ]},
                            {id:2,title:'红米手机',type:'phone',
                            product:[
                                {img:'http://127.0.0.1:8000/img/soft/b5f94d8953aa1400b97e15849863f00e!120x120.png',name:'红米6 Pro'},
                                {img:'http://127.0.0.1:8000/img/soft/448a0fcd77e25873cd730a1423d2f6df!120x120.png',name:'红米6'},
                                {img:'http://127.0.0.1:8000/img/soft/03dfeb60ec59ba6738a58f33b819ddb1!120x120.png',name:'红米 6A'},
                                {img:'http://127.0.0.1:8000/img/soft/dd74d7ab56d775fc95ab11497c2494e3!120x120.png',name:'红米 Note 5'},
                                
                            ]},
                            {id:3,title:'移动4G+专区',type:'phone',
                            product:[
                                {img:'http://127.0.0.1:8000/img/soft/b5f94d8953aa1400b97e15849863f00e!120x120.png',name:'红米6 Pro'},
                                {img:'http://127.0.0.1:8000/img/soft/448a0fcd77e25873cd730a1423d2f6df!120x120.png',name:'红米6'},
                                {img:'http://127.0.0.1:8000/img/soft/03dfeb60ec59ba6738a58f33b819ddb1!120x120.png',name:'红米 6A'},
                                {img:'http://127.0.0.1:8000/img/soft/209cdc7c6b58588d6d20569ac0ffd895!120x120.png',name:'小米MIX 2S'},
                                {img:'http://127.0.0.1:8000/img/soft/dd74d7ab56d775fc95ab11497c2494e3!120x120.png',name:'红米 Note 5'},
                                {img:'http://127.0.0.1:8000/img/soft/5b0e5782bbd17756bbe62b0fd0105070!120x120.png',name:'红米5 Plus'},
                            ]},
                        ]
                    },
                    {
                        softhead:'http://127.0.0.1:8000/img/soft/69bf9d06a7285a70adbec96448d5377c.jpg',
                        softbox:[
                            {id:1,title:'电视',type:'new',
                            product:[
                                {id:1,img:'http://127.0.0.1:8000/img/soft/033cfa4ab48b9d776dcb69e730022561!120x120.png',name:'32-40英寸'},
                                {id:2,img:'http://127.0.0.1:8000/img/soft/e84d9b98b558bb57632be6dc794455e7!120x120.png',name:'43英寸'},
                                {id:3,img:'http://127.0.0.1:8000/img/soft/54fc8e14d50a2abde556a30b74c41a99!120x120.jpg',name:'49-50英寸'},
                                {id:4,img:'http://127.0.0.1:8000/img/soft/90553f751c9eb6bda9a2ae7c4bce012b!120x120.jpg',name:'55-58英寸'},
                                {id:5,img:'http://127.0.0.1:8000/img/soft/bf2dc71cbf6fa8413b7ade09719155a0!120x120.jpg',name:'65-75英寸'},
                                {id:6,img:'http://127.0.0.1:8000/img/soft/39d81eb1904706403a9aa8685c6ab35e!120x120.jpg',name:'激光投影电视'},
                            ]},
                            {id:2,title:'盒子',type:'phone',
                            product:[
                                {img:'http://127.0.0.1:8000/img/soft/6f2896bb755fc5bc90c6d5db716660eb!120x120.jpg',name:'红米6 Pro'},
                                {img:'http://127.0.0.1:8000/img/soft/18c9cf8de4d55c5d41fe63028b92f4b2!120x120.jpg',name:'红米6'},
                                {img:'http://127.0.0.1:8000/img/soft/2ba96ac5-dff1-4ee3-663a-3ae893fb73b9!120x120.jpg',name:'红米 6A'},
                                {img:'http://127.0.0.1:8000/img/soft/T16AhgBCVv1RXrhCrK!120x120.jpg',name:'红米 Note 5'},
                                
                            ]},
                            {id:3,title:'音箱',type:'phone',
                            product:[
                                {img:'http://127.0.0.1:8000/img/soft/665274982e2ce86c3fce921127e9dccd!120x120.jpg',name:'小米电视音箱'},
                                
                            ]},
                            {id:2,title:'电视配件与会员',type:'phone',
                            product:[
                                {img:'http://127.0.0.1:8000/img/soft/114ee8a84c2080d15a167d1d23f5cf62!120x120.png',name:'会员卡'},
                                {img:'http://127.0.0.1:8000/img/soft/T1gox_BsWT1RXrhCrK!120x120.jpg',name:'遥控器'},
                                {img:'http://127.0.0.1:8000/img/soft/bc66bce5-6674-2d6f-25b6-0167bbb6affa!120x120.jpg',name:'咸菜转接器'},
                                {img:'http://127.0.0.1:8000/img/soft/07f6f6c592ed9bb6d6feea460b021c7e!120x120.png',name:'安装服务'},
                                {img:'http://127.0.0.1:8000/img/soft/161b5d9d91ffbb0a47681b36d7ea6e17.png',name:'麦克风'},
                                
                            ]},
                        ]
                    },
                    
                ],
            }
        },
        components:{
            myfooter,
        },
        methods:{
            // 通过 offsetTop 获取对象到窗体顶部的距离，然后赋值给 scrollTop，就能实现锚点的功能
            jumps(id){
                //获取需要滚动的距离

                var list=this.$refs.offsettop;
                console.log(list[id]);   //获取点击的元素
               
                let total = list[id].offsetTop*3   //该元素到顶部的距离
                console.log(total);
            
                this.$nextTick(()=>{
                    // console.log(this.$refs.left)
                    this.$refs.rjump.scrollTop=total;
                })
            //   this.$refs.rjump.style.top=-total+'px';


               
        //         this.$nextTick(() => {
        //   document.querySelector(".el-main").scrollTop = anchor.offsetTop;
        // });
            },
            getscroll(){
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                console.log(scrollTop)
            },
            // 滚动右边的
            scrollTp(){
                
            //    this.$refs.left.onscroll=function(e){
            //          console.log(this.scrollTop);
            //    }
                 var h='';
                 this.$refs.rjump.onscroll=(e)=>{
                    // console.log(this.scrollTop);
                     h=e.target.scrollTop;
                      console.log(h+'高度');
                       if(h>100){
                            this.tops=22;
                        }
                        if(h>400){
                            this.tops=47;
                        }
                        if(h>700){
                            this.tops=95;
                        }
                        if(h>963){
                            this.tops=137;
                        }
                        if(h>1250){
                            this.tops=182;
                        }
                        if(h>1546){
                            this.tops=231;
                        }

                        if(h>1945){
                            this.tops=274;
                        }
                        if(h>2220){
                            this.tops=321;
                        }
                    this.$nextTick(()=>{
                    // console.log(this.$refs.left)
                    this.$refs.left.scrollTop=this.tops;

                    })
                }
                   
                    

            }
            
        },
        mounted() {
            this.scrollTp();
            // window.addEventListener('scroll',this.getscroll);
        },
        created() {
            
        },
        
    }
</script>


