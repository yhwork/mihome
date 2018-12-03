<style>
    div.login{
        position: absolute;
        background: white;
        height: 100%;
        width: 100%;
        text-align: center;
        /* padding: 0 2rem; */
    }
    .login-logo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 4rem 2rem 3rem 2rem;
        /* border: 1px solid #FF6700; */
            
    }
    div.logo{
        width:3rem;
        height: 3rem;
        border-radius: 5px;  
        border: 1px solid #FF6700;
        margin: 1rem 0;
        /* background: url(http://127.0.0.1:8000/img/1dba0e61689cbfd385d6ef58c5c1d09a10e86498.png) no-repeat; */
        /* background-size: 100%; */
        background: #999;
    }
    div.logo img{
        width: 100%;
    }
    .login-cnt{
         padding: 0 2rem;
    }
    div.login-cnt  input{
        outline-style: none;
        border:none;
        border-bottom: 1px solid rgba(0,0,0,.2);
    }
    .login-title{
        font-size: 1rem;
        font-weight: 500;
    }
    div.login-btn{
        width: 100%;
        height: 3rem;
        border-radius: 10px;
        line-height: 3rem;
        font-size: 1.3rem;
        
        text-align: center;
        border:1px #FF6700 solid;
        background: #FF6700;
        color: white;
    }
    div.login-btn>div{
        letter-spacing: 2rem;
        text-indent: 2rem;
    }
    div.reg{
        display: flex;
        justify-content: center;
        border: 1px solid rgba(0,0,0,.1);
        align-items: center;
        margin: 0.5rem 0;
        border-radius: 10px;
         height: 3rem;
    }
    div.reg>p{

        align-self: center;
        font-size:1.2rem;
        padding: 0;
        margin: 0;
    }
    div.help{
        display: flex;
        justify-content:center;
        font-size: 0.9rem;
        margin: 1rem 0;
    }
    div.help .hl{
        border-right: 1px solid gray;
        padding-right: 0.6rem;
    }
    div.help .hr{
        padding-left:0.5rem;
    }
    div.login-dl{
        /* border:1px solid red; */
        height:5rem;
    }
    div.fangs{
        height: 2rem;
        text-align: center;
    }
    div.fangs>span{
        display: inline-block;
        height: 100%;
        width: 2rem;
        /* border:1px solid red; */
        margin: 0.5rem 0.5rem;
    }
    div.fangs>span.xinl{
        background: url(http://127.0.0.1:8000/img/icon/xl.png) no-repeat
    }
    div.fangs>span.zhifb{
         background: url(http://127.0.0.1:8000/img/icon/zfb.png) no-repeat
    }
    div.login-bottom{
        position: absolute;
        bottom: 3rem;
        width: 100%;
    }
    div.login-bottom ul.login-b{
        width: 100%;
        padding: 0;
        text-align: center;
        font-size: 0.9rem;
        color: #999999;
    }
    div.login-bottom ul.login-b li{
        display: inline-block;
    }
    div.password{
        position: relative;
    }
    div.password span.showhidden{
        position: absolute;
        right: 15px;
        top:10%;
        transform: translateY(-10%);
        /* border: 1px solid red; */
        display: inline-block;
        width: 30px;
        height: 25px;
    }
    div.password span.showhidden img{
        cursor: pointer;
    }
    .d-none{
        display: none;
    }
    div.altermsg{
        display: flex;
        margin-left: 10px;
        margin-bottom: 10px;
    }
    div.altermsg span:last-child{
        color: #F29518;
        text-align: left;
        font-size: 0.8rem;
        margin-left: 10px;
    }
    div.altermsg span:first-child{
        display: inline-block;
        width: 16px;
        height: 16px;
        /* border: 1px solid red; */
        background: url(../../assets/img/icon/alert1.png)
    }
    div.goback{
        width: 100%;
        /* border: 1px solid red; */
        position: absolute;
        bottom: 1.2rem;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
    div.goback div.goback-img{
        width: 2rem;
        height: 2rem;
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 50%;
        background: url(../../assets/img/icon/back1.png) no-repeat;
        background-size: 90%;
    }
</style>
<template>
        <div class="login">
            <div class="login-logo">
                <div class="logo"><em id="custom_display_1" class="milogo">
                  <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="3" ry="3" style="fill:#ff6700"></rect><rect x="10" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect><rect x="33.75" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect><rect x="11.25" y="15" width="15" height="4.1" style="fill:#FFFFFF"></rect><rect x="26.2" y="20.55" width="4.2" height="12.5" style="fill:#FFFFFF"></rect><rect x="20.6" y="15" width="9.8" height="9.8" rx="4.4" ry="4.4" style="fill:#FFFFFF"></rect><rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" style="fill:#ff6700"></rect><rect x="18" y="19.1" width="4" height="2.2" style="fill:#ff6700"></rect><rect x="24.2" y="23" width="1.94" height="10" style="fill:#ff6700"></rect><rect x="18.1" y="22.8" width="4.2" height="10.2" style="fill:#FFFFFF"></rect></svg>
                </em></div>
                <div class="login-title">小米账号登陆</div>
            </div>
            <div class="login-cnt"> 
                <div>
                    <input type="text" v-model="loginid" placeholder="邮箱/手机号/小米ID">
                </div>
                <div class="password">
                    <input type="password" v-model="loginpwd" ref="pwd" id="ptxt" placeholder="密码">
                    <span class="showhidden" @click="showp()">
                        <img ref="showpassword" src="../../assets/img/icon/pwd1.png"  alt="">
                        <img ref="hiddenpassword" class="d-none" src="../../assets/img/icon/pwd2.png"  alt="">
                        </span>
                </div>
                <div class="altermsg " >
                    <div ref="alertshow" class="d-none">
                        <span></span><span v-text="loginmsg"></span>
                    </div>
                    
                </div>
                <div class="login-btn">
                    <div @click="btnlogin()">登录</div>
                </div>
                <div @click="phonelogin()" class="reg">
                    <p>手机短信登陆/注册</p>
                </div>
                <div class="help">
                    <div class="hl">立即注册</div><div class="hr">忘记密码？</div>
                </div>
                <div class="login-dl">
                    <p>其他方式登录</p>
                    <div class="fangs"><span class="xinl"></span><span class="zhifb"></span></div>
                </div>
            </div>
            <div class="login-bottom">
                <ul class="login-b">
                    <li>简体</li>
                    <li>繁体</li>
                    <li>English</li>
                    <li>常见问题</li>
                    <li>隐私政策</li>
                </ul>
            </div>
            <div class="goback">
                <div @click="backhome()" class="goback-img">

                </div>
            </div>
        </div>
</template>
<script>
    export default {
        data(){
            return {
                isshow:false,
                loginmsg:'',
                loginid:'17634630220',
                loginpwd:'123456',
                username:''
            }
        },
        methods:{
            //返回
            backhome(){
                this.$router.push('/');
            },
            btnlogin(){
                if(this.loginid==''){
                    this.loginmsg='请输入账号！';
                    this.$refs.alertshow.classList.remove('d-none');
                    return;
                }
                if(this.loginpwd==''){
                    this.loginmsg='请输入密码！';
                    this.$refs.alertshow.classList.remove('d-none')
                    return;
                }
                let params={
                    params:{
                        uname:this.loginid,
                        upwd:this.loginpwd
                    }
                }
                this.$http.post('http://127.0.0.1:8000/login',
                {
                    phone:'17634630220',
                    upwd:'123456'
                },
                {emulateJSON:true}
                ).then((res)=>{
                    console.log(res.body[0])
                    var s=res.body;
                    this.$store.commit('addusermsg',s);
                    this.$router.push('user');
                    // 登录成功
                //    this.$router.push({path:decodeURIComponent(url)});  调回之前状态
                }),(err)=>{
                    console.log(err);
                }
            },
            phonelogin(){
                this.$router.push('regist');
            },
            showp(){
                if(!this.isshow){
                    this.$refs.pwd.setAttribute('type','text');
                    this.$refs.showpassword.classList.add('d-none');
                    this.$refs.hiddenpassword.classList.remove('d-none');
                    this.isshow=true;
                }else{
                    this.$refs.pwd.setAttribute('type','password');
                    this.$refs.hiddenpassword.classList.add('d-none');
                    this.$refs.showpassword.classList.remove('d-none');
                    this.isshow=false;
                }
            }
        }
    }
</script>