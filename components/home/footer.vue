<style scoped>
	div.footer{
		position: fixed;
		bottom: 0;
		z-index: 100;
		display: flex;
		flex-direction: row;
		width: 100%;
		background: white;
	}
	div.footbox1{
		flex: 1;
		height: 4.5rem;
		/* border: 1px solid red; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		/* box-sizing: border-box; */
		/* padding: 2rem 0; */
	}
	div.footer{
		/* box-sizing: border-box; */
	}
	div.footer img{
		width: 1.5rem;
		height: 1.5rem;
	}
	div.boxtxt2{
		/* border: 1px solid red; */
		flex: 1;
		padding: 0;
		font-size: 0.8rem;
	}
	div.boximg{
 		/* border: 1px solid red; */
		width: 1.5rem;
		height:1.5rem;
		flex: 1;
		margin-top: 0.6rem;
		margin-bottom: 0.1rem;
		text-align: center;
	}
	div.boximg img{
		width: 1.5rem;
		height: 1.5rem;
	}
	span.alertmsg{
		
		position: absolute;
		top: 0.4rem;
		right:2.1rem;
		display: inline-block;
		width:1.1rem;
		height:1.1rem;
		border: 1px solid red;
		border-radius: 50%;
		background: red;
		color: white;
		text-align: center;
		line-height: 1.1rem;
		font-size: 0.8rem;
	}
</style>


<template>
    <div class="footer">
		<div class="footbox1">
			<div @click='jumpindex()' class="boximg">
				<img  :src="img1" alt="">
				
				<!-- <img v-show="!isactive" src="../../assets/img/icon/home.png" alt=""> -->
			</div>
			<div class="boxtxt2">
					首页
			</div>
		</div>
		<div class="footbox1">
			<div @click="jumpsoft()" class="boximg">
				<img :src='img2' alt="">

				<!-- <img src="../../assets/img/icon/soft1.png" alt="">	 -->
			</div>
			<div class="boxtxt2">
				分类
			</div>
		</div>
		<div class="footbox1">
			<div @click="jumpcar()" class="boximg">
				<img :src="img3" alt="">
				
				<!-- <img src="../../assets/img/icon/car1.png" alt=""> -->
				
				<span class="alertmsg">
					{{this.$store.getters.optcount}}
				</span>
			</div>
			<div class="boxtxt2">
				购物车
			</div>
		</div>
		<div class="footbox1">
			<div @click="jumpmy()"  class="boximg">
				<img  :src="img4" alt="">

				<!-- <img v-show="!isactive" src="../../assets/img/icon/person1.png" alt=""> -->

			</div>
			<div class="boxtxt2">
				个人中心
			</div>
		</div>
    </div>
</template>

<script>

export default {
      data(){
          return {
				  // isactive:false,
				img1:'',
				img2:'',
				img3:'',
				img4:'',
          }
	  },
	  props:['imgs'],
	  methods:{
		  jumpmy(){
			console.log(this.imgs);
			this.$router.push('/user');
		  },
		  jumpcar(){
			  this.$router.push('/shopcar');
		  },
		  jumpsoft(){
			  this.$router.push('/soft');
		  },
		  jumpindex(){
			  this.$router.push('/');
			  console.log(this.imgs);
		  },
			timgs(){
				this.img1=this.imgs[0];
				this.img2=this.imgs[1];
				this.img3=this.imgs[2];
				this.img4=this.imgs[3];
			}
	  },
	  mounted() {
		  this.timgs();
	  },
  }

</script>