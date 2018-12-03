<template>
    <div class="banner">
        <mt-swipe id="swip"  :auto='0' >
            <mt-swipe-item v-for='item in imglist' :key='item.id'><img src="http://127.0.0.1:8000/img/swipe1.jpg"></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import "mint-ui/lib/style.css"
    export default{
        data(){
            return{
                imglist:[],
            }
        },
        props:['imgsrc'],  //子组件接受父元素数据
        methods:{
            getsrc(){
                this.imglist=this.imgsrc;
                // console.log(this.imgsrc)
                // console.log(this.imglist)
            },
            
             getimglist(){
                // 获取图片
                this.$http.get('http://127.0.0.1:3000/index/getimglist').then((res)=>{
                    // console.log(res); //值一直在body里面
                this.imglist=res.body;
                // console.log(this.imglist);
            })
            }
        },
        created() {
            this.getsrc();
            // this.getimglist();
        },
    }
</script>

<style>
    div.banner .mint-swipe{
        height: 200px;
    } 
    .mint-swipe{
        
    }
    div.banner .mint-swipe img{
         width: 100%;
         height: 100%;
        /* min-height: 12rem; */
    }
    #swip div.banner .mint-swipe-items-wrap{
        border: 1px solid red;
    }
    #swip{
        
    }
    
</style>

