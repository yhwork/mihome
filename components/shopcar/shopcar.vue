<template>
      <div>
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                   <!-- 图片轮播区域    传入不同的值显示不同的图片-->
                      <myswipe></myswipe>   
					</div>
				</div>
		</div>        
        <div class="mui-card" v-for="item in cardlist" :key="item.id">
				<div class="mui-card-header">购物车</div>
                <div class="card-content">
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner">
                            <div class="products">
                                <p>{{item.title}}</p>
                                <p>￥{{item.pay}}</p>
                            </div>
                        </div>
                    </div>
                        <!--按钮 -->
                    <div class="mui-numbox">
                        <button @click="btnsub(item.id)" class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                        <input class="mui-input-numbox" type="number" v-model="item.count"/>
                        <button  @click="btnadd(item.id)" class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                    </div>
                    
				</div>
				<div class="mui-card-footer">小计：<span>{{getcatpay(item)}}</span></div>
		</div>
        <div class="mui-card-footer">合计：<span>{{getSubTotal}}</span></div>
    </div>
</template>
<script>
    //引入轮播图
    import myswipe from '../sup/swiper.vue'

    export default {
        data(){
            return {
                listimg:[],  //不同页面请求不同的图片轮播
                cardlist:[],  //购物车列表
                list:{},
                val:1,
                id:1,
                pay:0,
            }
        },
        methods:{
            getcardlist(){
                //请求商品列表
                this.$http.get('http://127.0.0.1:3000/index/getcarlist').then(res=>{
                    this.cardlist=res.body;
                    console.log(this.cardlist);
                })
            },
            getimglist(){
                //请求图片列表
                this.$http.get('http://127.0.0.1:3000/index/getimglist').then(res=>{
                    this.imglist=res.body;
                })
            },
            btnadd(id){ 
                console.log(id);
                //获取数组中的每个元素
                for(var item of this.cardlist){
                    //判断参数中的id与当前元素id是否相同
                    if(item.id== id){
                    // this.pay=Math.floor(item.count) * Math.floor(item.pay); 
                     //问题全部变  解决计算属性
                     item.count++;
                        break;
                    }
                }
                // if(this.val<999){
                //     if(this.val<0)
                //     this.val=0
                // this.val=Math.floor(this.val)+1;
                // // console.log(this.val);
                //  this.pay=Math.floor(this.list.list.old.slice(1)) * Math.floor(this.val);
                // }
            },
            btnsub(id){
                console.log(id);
                if(this.val>=1){
                    for(var item of this.cardlist){
                        if(item.id==id){
                            item.count--;
                        }
                    }
                // this.val--;
                //  this.pay=Math.floor(this.list.list.old.slice(1)) * Math.floor(this.val);
                }
            },
            //小计
            getcatpay(item){
                var sum=0;
                sum=item.pay*item.count;
                return sum;
            },
            //接受参数
            getid(){
                var a=this.$route.query.val;
                this.list=JSON.parse(a);
                console.log(this.list)
                 this.val=this.list.val;
            },
        },
        // watch:{
        //     value:function(val,oldval){
        //         console.log(this.val+'e');
        //         this.pay=Math.floor(this.list.list.old.slice(1)) * Math.floor(val);
        //     }
        // },

        //计算属性
	 computed:{   //计算属性
      getSubTotal:function(){
        //计算商品累加和并返回
				//1:创建临时变量
				var sum = 0;
				//2:创建循环
				for(var item of this.cardlist){
				//3:计算累加和
				sum += item.pay * item.count;
				}
				//4:返回累加结果
				return sum;
			}
	 },
        created() {
            // this.getid();
            //请求商品列表
            this.getcardlist()
        },
        components:{
            myswipe  //引入子组件
        }
    }
</script>
<style scoped>
div.card-content{
    display:flex;
    justify-content:space-around;
    align-items: center;
}
div.mui-card-footer{
   display: flex;
   justify-content: flex-start
}
div.mui-card-footer>span{
    color: red;
    font-size: 25px;
}
</style>
