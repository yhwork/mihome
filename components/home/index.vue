
<style>
    #home{
        max-width: 1024px;
        min-width: 320px;
    }
    div.shop{
        margin-bottom: 5rem;
    }
    div.headers{
        position: fixed;
        z-index: 25;
    }
</style>
<template>
    <div id='home'>
        <!-- 搜索框 -->
        <div class="headers">
            <myheader></myheader>
        </div>
        <!--1.商品的轮播区域-->
        <div class="shop">
            <mydefa></mydefa>
        </div><q></q>
        <myfooter :imgs='srcs'></myfooter>
    
    </div>    
</template>
<script>
import myheader from './header.vue'
import myfooter from './footer.vue'

import mydefa from './defa.vue'
    export default {
        data(){
            return {
                  srcs:['http://127.0.0.1:8000/img/icon/hom.png','http://127.0.0.1:8000/img/icon/soft1.png','http://127.0.0.1:8000/img/icon/shopcar.png','http://127.0.0.1:8000/img/icon/my1.png'],
            }
        },
        methods:{
            set(){
                // alert('1');
            },


        },
        created() {
            //this.set();
        },
        components:{
            myheader,
            myfooter,
            // myswipes,
            mydefa,
        }
    }
</script>

