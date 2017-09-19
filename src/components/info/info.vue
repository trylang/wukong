<template>
	<div>
		<div class="circle">
			<h2 class="title">{{data.title}}</h2>
			<p class="detail">查看详情》</p>
		</div>
		<div v-if="data">
			<h4>{{data.privilege}}</h4>
			<h2>{{data.cash}}</h2>
			<p>{{data.interest}}</p>
		</div>
		<div class="into">
      马上转入
    </div>
	</div>
</template>

<script>
	export default {
	  name: 'info',
	  props: {
	    data: {
	      type: Object,
	      default: null
	    }
	  }

	}
</script>

<style lang="scss" scoped>
	.circle {
		width: 180px;
		height: 180px;
		margin: 30px auto;
		color: #fff;
		border-radius: 50%;
		background-color: #FF7B89;
		border: 20px solid #F7F7F7;
		.title {
			width: 132px;
			height: 64px;
			line-height: 64px;
			margin: 5px auto;
			border-bottom: 1px solid #F46C7B;

		}
	}
	.into {
    width: 260px;
    height: 52px;
    line-height: 52px;
    color:#fff;
    font-size:24px;
    font-weight:600;
    background-color: #19CBBB;
    margin: 50px auto;
    border-radius: 14px;
  }
</style>