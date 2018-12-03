
<style>
    input
    {
        padding: 0;
        margin: 0;
    }
    div.searchs{
         position: fixed;
         width: 100%;
    }
    div.searchbox{
        height: 50px;
        /* border:1px solid red; */
        display: flex;
        align-items: center;
    }
    div.search{
        width: 100%;
        position: relative;
        align-self: center;
        /* border: 1px solid red; */
    }
    div.search input{
        font-size: 1rem;
        padding: 0px;
        margin: 0px;
        background: white;
        text-indent: 1rem;
        text-align: left;
    }
    div.search div.bigsearch{
        position: absolute;
        width: 2rem;
        height: 2rem;
        top:50%;
        right: 1rem;
        transform: translateY(-50%);
        background: url(http://127.0.0.1:8000/img/icon/search1.png) no-repeat;
        background-size: 100%;
        /* border: 1px solid red; */
    }
    div.back{
        width: 2.5rem;
        height: 2rem;
        margin: 0 0.5rem;
        background: url(http://127.0.0.1:8000/img/icon/back.png) 2px  no-repeat;
        background-size: 90%;
        border: none;
    }
    div.ok{
        width: 2.5rem;
        height: 2rem;
        margin: 0 0.5rem;
        background: url(http://127.0.0.1:8000/img/icon/msg.png) no-repeat;
        background-size: 100%;
        /* border: 1px solid blue; */
    }
    div.alert{
        /* height: 9rem; */
       
    }
    div.atitle{
        padding: 0.6rem 1rem;
        background: white;
        font-size: 1rem;
        color: rgba(0,0,0,.9);
        letter-spacing: 0.2rem;
    }
    div.aimg{
        width: 100%;
        height: auto;
    }
     div.alert img{
         width: 100%;
         height: auto;
     }
     div.s-megbox{
         display: flex;
         flex-wrap: wrap;
     }
     div.numsearch{
         width:30%;
         height: 2.2rem;;
         font-size: 0.6rem;
         margin: 0 0.5rem;
         padding: 0.3rem 0.1rem;
         display: flex;
         align-items: center;
         justify-content: space-around;
         border: 1px solid lightgray;
         border-radius: 8px;
         background: #FFF9F8;
         text-align: center;
         line-height: 2rem;

     }
</style>

<template>
    <div class="searchs">
        <div class="searchbox">
            <div @click="back()" class="back"></div>
            
            <div class="search"><div class="bigsearch"></div><input list="searchmsgbox" type="text" placeholder="搜索商品名称"></div>
            <div class="ok"></div>
        </div>
       <div class="alert">
           <div class="atitle">热门搜索</div>
           <div class="aimg">
               <img src="http://127.0.0.1:8000/img/search.jpg" alt="">
           </div>
       </div>
       <!-- 显示数据 -->
         <div class="s-megbox">
             <div class="numsearch">小米MIX</div>
             <div class="numsearch">小米电视4X 55英寸</div>
        </div>
        <!-- <mt-search v-model="value"></mt-search> -->
        <datalist id="searchmsgbox">
                <option value="1">12</option>
                <option value="12">1233</option>
                <option value="123">12345</option>
                <option value="12345">123456</option>
            </datalist>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value:'',
                result:[
                    {
                        id:1,
                        title:'小米8',
                        value:'今日特价'
                    }
                ]
            }
        },
        methods:{
            back(){
                console.log('返回首页');
                this.$router.go(-1);
            }
        }
    }    
</script>
