 <style>
    /* 样式一*/  
    div#header-top{
        min-width: 320px;
        max-width: 1024px;
        position: fixed;
        top: 0rem;
        width: 100%;
        /* margin-bottom: 8rem; */
        background: #F2F2F2;
        height: auto;
        /* border: 1px solid blue; */
    }
   div#header-top div.header{
        width: 100%;
        /* border: 1px solid red; */
        height: 3.2rem;
    }
   div#header-top div.header div.search{
        width: 100%;
        display: flex;
        justify-content: space-around;
        position: absolute;
        background: #F2F2F2;
    }
   div#header-top div.header div.search div.logo{
        width: 2.4rem;
        height: 2.2rem;
        /* border: 1px solid red; */
        margin-top:0.4rem;
        margin-left: 0.6rem;
        background: url(http://127.0.0.1:8000/img/xm.png) no-repeat;
        background-size: 100%;
    }
   div#header-top div.header div.inout-search{
        position: relative;
        flex: 5;
        margin: 0 0.5rem;
    }
   div#header-top div.header div.inout-search>span:first-child{
        position: absolute;
        display:inline-block;
         width: 2.5rem;
        height: 2rem;
        top: 50%;
        transform: translateY(-50%);
        margin: 0 0.5rem;
        background: url(http://127.0.0.1:8000/img/fdj.png)2px no-repeat;
        background-size: 70%;
    }
   div#header-top input[type='text']{
        width: 100%;
        height: 2.8rem;
    }
   div#header-top div.header div.inout-search>input{
        width: 100%;
        border: 1px solid red;
        text-indent: 2.5rem;
        font-size: 1rem;
        margin-top:0.4rem;
        margin-bottom: 0.3rem;
        border:none;
        border: 1px solid rgba(0,0,0,.1);
        border-radius:7px;
        /* min-height:35px; */
    }
   div#header-top div.header div.person{
        width: 2.5rem;
        margin-top:0.4rem;
        margin-right: 0.6rem;
        /* border: 1px solid red; */
        height: 2.5rem;
    }
    div#header-top div.header div.person img{
        width: 100%;
        height: 100%;
    }
   div#header-top div.header-title1{
        position: relative;
        z-index: 15;
        /* height: 3.4rem; */
        height: 3rem;
        width: 100%;
        font-size: 0.8rem;
        color: #747474;
        background: #F2F2F2;
        overflow: hidden;
        /* border: 1px solid saddlebrown; */
        transition: height .2s linear;
    }
   div#header-top dl.headerbox{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
   #header-top dl.headerbox dd{
        /* border: 1px solid red; */
        box-shadow: 0 0 1px lightgrey;
        width:6rem;
        margin: 0.2rem 0.2rem;
        height:1.8rem;
        font-size: 1rem;
        line-height: 2rem;
        text-align: center;
    }
    div#header-top dd{
        margin: 0.4rem 0.3rem;
       font-size: 1rem;
    }
   div#header-top div.all{
        width: 5rem;
        height:auto;
        font-size: 1rem;
        text-align: center;
        margin:0.5rem .2rem 0 0;
        color: black;
        /* border:1px solid red; */
    }
   div#header-top div.all p{
        color:rgba(0,0,0,.8);
        font-size: 1rem;
    }
   div#header-top div.header-title1 dl{
        margin: 0.5rem .8rem;
    }
   div#header-top  dl.init{
          display: flex;
          width:47rem;
          font-size: 1rem;
     }
    div#header-top div.btn{
         width: 3.2rem;
         height: 2.5rem;
         /* border: 1px solid red; */
         position: absolute;
         right: -0.6rem;
         background:#EFEFF4;
         top: -0.2rem;
         opacity:1;
     }
   div#header-top div.btn img{
        width: 50%;
        height: 50%;
        position: relative;
        top: .8rem;
    }
   div#header-top .d-none{
        display: none;
    }
    div.scroll{
        overflow: scroll;
    }
    .red{
        color: coral;
    }
</style>

<template>
    <div id="header-top">
         <div class="header">
            <div class="search">
                <div class="logo"></div>
                <div class="inout-search">
                    <span></span>
                    <input type="text" @click="jumpsearch()" v-model="shopval" placeholder="搜索商品名称"></div>
                <div class="person"><img src="../../assets/img/users/avatar.png" alt=""></div>
            </div>
            <!-- 引用header组件 -->
        </div>
        <div ref="headertitle" class="header-title1">
            <div class="scroll" ref="ceng">
                <div ref='hall' class="all d-none"><p>全部</p></div>
              <dl id='dlbox' class="init" ref="hcnt">
                    <dd v-for="(item,id) in title"  :key="id">
                        <p @click="btnselects(id)" :class="id==s?'red':''">
                        {{item}}
                        </p>
                    </dd>
                 </dl>
            </div>
              <div class="btn" @click="down()"><img src="../../assets/img/jx.png" alt=""></div>
        </div>
      
      
    </div>
</template>
<script>
    export default {
        data(){
            return{
                title:['推荐','双十一狂欢','手机','智能','电视','笔记本','生活周边','家电','新款游戏本','大内存手机','影音娱乐'],
                shopval:'',
                isopen:false,
                s:0,
            }
        },
        methods:{
            btnselects(id){
                console.log(id)
                for(var a in this.title){
                    if(a==id){
                        this.s=a;
                    }
                }  
            },
            down(){
                var dl=document.getElementById('dlbox');
                var all=document.getElementsByClassName('all')[0];
                 console.log(all);
                if(!this.isopen){
                    this.$refs.headertitle.style.height='12rem';
                    dl.classList.add('headerbox');
                    dl.classList.remove('init');
                    all.classList.remove('d-none');  
                    this.isopen=true;              
                }else{
                    this.$refs.headertitle.style.height='3rem';
                    dl.classList.remove('headerbox');
                    dl.classList.add('init');
                    all.classList.add('d-none'); 
                    all.style.fontSize='1rem'; 
                    this.isopen=false; 
                }
            },
            jumpsearch(){
                this.$router.push('/index/search');
            }
        }
    }
</script>