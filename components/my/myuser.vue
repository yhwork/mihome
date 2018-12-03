<template>
    <div class="myuser">
        <div class="myheader">
            
            <div class="headertop">
                <div class="headimg"><img src="../../assets/img/users/avatar.png" alt=""></div>
                <div v-if="islogin ">
                      <div class="myactive" ref='splice'>{{phone |setname}}</div>
                </div>
                <div v-else>
                    <div @click="btnlogins()" class="myactive">登录/注册</div>
                </div>
               
            </div>
           
        </div>
        <div class="myorder">
            <div>我的订单</div>
            <div>全部订单<span class="right"></span></div>
        </div>
        <div class="userserver">
            <div class="userserver-box">
                <div><img src="../../assets/img/users/payment.png" alt=""></div><p>代付款</p>
            </div>
            <div class="userserver-box">
                <div><img src="../../assets/img/users/reciving.png" alt=""> </div><p>待收货</p>
            </div>
            <div class="userserver-box">
                <div><img src="../../assets/img/users/cure.png" alt=""></div><p>退换修</p>
            </div>
        </div>
        <div class="userserverlist">
            <dl>
                <dd>
                    <div class="useritemimg">
                        <img src="../../assets/img/users/fa1.png" alt="">
                        </div>
                    <div class="userright lei">
                        <p>会员中心</p>
                        <p><span class="right"></span></p>
                    </div>
                </dd>
                 <dd>
                    <div class="useritemimg"><img src="../../assets/img/users/fa2.png" alt=""></div>
                    <div class="userright">
                        <p>我的优惠</p>
                        <p><span class="right"></span></p>
                    </div>
                </dd>
                <dd class="d-top">
                    <div class="useritemimg"><img src="../../assets/img/users/fa3.png" alt=""></div>
                    <div class="userright lei">
                        <p>服务中心</p>
                        <p><span class="right"></span></p>
                    </div>
                </dd>
                <dd>
                    <div class="useritemimg"><img src="../../assets/img/users/fa4.png" alt=""></div>
                    <div class="userright">
                        <p>小米之家</p>
                        <p><span class="right"></span></p>
                    </div>
                </dd>
                 <dd class="d-top">
                    <div class="useritemimg"><img src="../../assets/img/users/fa5.png" alt=""></div>
                    <div class="userright">
                        <p>F码通道</p>
                        <p><span class="right"></span></p>
                    </div>
                </dd>
                 <dd class="d-top">
                    <div @click="clearstore()" class="useritemimg">
                        <img src="../../assets/img/users/fa6.png" alt="">
                    </div>
                    <div class="userright">
                        <p>设置</p>
                        <p><span class="right"></span></p>
                    </div>
                </dd>
            </dl>
        </div>
        <div class="nyfooter">
            <myfooter :imgs='srcs'></myfooter>
        </div>
    </div>
</template>

<style scoped>
    div.myuser{
        
    }
    div.myuser img{
        width: 100%;
        height: auto;
    }
    div.myheader{
        height: 5rem;
        /* border:1px solid red; */
        display: flex;
        box-sizing: border-box;
        padding: 1rem 2rem;;
        background:url(../../assets/img/users/bg.png) no-repeat;
        background-size: cover;
       
        background: #EF7C10;
    }
    div.headertop{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 3rem;
    }
    div.headimg{
        /* border:1px solid red; */
        width: 3rem;
        height: 3rem;
        margin-right: 0.5rem;
        border-radius: 50%;
    }
    div.myactive{
        color: white;
        font-size: 1rem;
    }
    div.myorder{
        display: flex;
        padding: 0 1rem;
        height: 3rem;
        align-items: center;
        background: white;
        /* border: 1px solid red; */
        font-size: 0.9rem;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0,0,0,.2);
    }
    div.myuser span.right{
        display: inline-block;
        width: 1rem;
        position: relative;
        top: 3px;
        height: 1rem;
        /* border: 1px solid red; */
        background:url(../../assets/img/users/right.png) no-repeat;
        background-size: 100%;
        
    }
    div.userserver{
        /* border: 1px solid red; */
        height: 5rem;
        display: flex;
        justify-content: space-around;
        background: white;
    }
    div.userserver-box{
        display: flex;
        flex-direction: column;
        /* border:1px solid red; */
        align-items: center;
        margin: 1rem 0;
    }
    div.userserver-box>div{
        width: 1.5rem;
         /* border:1px solid red; */
        margin-bottom: 0.3rem;
        height: 1.5rem;
    }
    div.userserver-box p{
        margin: 0;
        font-size: 0.6rem;
        color: #333;
    }
    div.userserverlist dl{
        width: 100%;
        
        margin: 0.8rem 0;
        height: auto;
        /* border:1px solid red; */
    }
    div.userserverlist dl dd{
        display: flex;
        height: 3rem;
        align-items: center;
        padding: 0 1rem;
        /* border-bottom:1px solid red; */
        background: white;
    }
    div.useritemimg{
        width: 2rem;
        height: 2rem;
        /* border: 1px solid red; */
    }
    div.userright{
        flex: 1;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        
    }
    div.lei{
        border-bottom: 1px solid rgba(0,0,0,.2);
    }
    div.userright p{
        margin: 0;

    }
    div.userright p:first-child{
        color: #666;
        margin-left: 0.6rem;
    }
    dd.d-top{
        margin-top: 0.6rem;
    }
</style>

<script >
 import myfooter from '../home/footer.vue'
        export default{
            data(){
                return{
                    srcs:['http://127.0.0.1:8000/img/icon/home1.png','http://127.0.0.1:8000/img/icon/soft1.png','http://127.0.0.1:8000/img/icon/shopcar.png','http://127.0.0.1:8000/img/icon/my.png'],
                    islogin:false,
                    users:[],
                    phone:''
                }
            },
            props:['val'],
            methods:{
                isactive(val){

                    return  
                },
                btnlogins(){
                    if(true){
                        this.$router.push('/login');
                    }
                },
                //获取用户登录信息
                getusers(){
                    this.users=this.$store.state.users;
                    console.log(this.$store.state.islogin)
                    console.log(this.users);
                     this.islogin=this.$store.state.islogin;
                    if(this.users.length==0){
                       console.log('请先登录')
                     
                    }else{
                          this.islogin=this.$store.state.islogin;
                          console.log(this.$store.state.islogin)
                          this.phone=this.users.phone;
                          console.log(this.phone)
                    }
                },
                clearstore(){
                    if(confirm('确定注销吗')){
                        console.log('1');
                     this.$store.commit('clearstore');
                    }
                }
                   
            },
            components:{
                myfooter,
            },
            created() {
                this.getusers();
            },

        }
</script>