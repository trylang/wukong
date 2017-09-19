<template>
	<div class="tab">
      <router-link tag="div" class="tab-item" to="/recommend">
        <span class="tab-link">悟空故事</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/safe">
        <span class="tab-link">安全保障</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/question">
        <span class="tab-link">常见问题</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/mine">
        <span class="tab-link">我的账户</span>
      </router-link>
    </div>
</template>

<script>
export default {

  name: 'tab',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	.tab {
		display: flex;
		.tab-item {
			flex : 1;
			width: 100%;
			height: 18px;
			line-height: 18px;
			box-sizing:border-box;
			border-right: 1px solid #7D7D7D;
			&:last-child {
				border-right: 0;
			}
		}
	}

</style>