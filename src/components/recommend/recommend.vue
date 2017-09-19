<template>
	<div>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="day" title="日理财"/>
      <mu-tab value="month" title="月理财"/>
      <mu-tab value="year" @active="handleActive" title="年理财"/>
    </mu-tabs>
    <div v-if="activeTab === 'day'">
      <info :data="data.day"></info>
    </div>
    <div v-if="activeTab === 'month'">
      <info :data="data.month"></info>
    </div>
    <div v-if="activeTab === 'year'">
      <info :data="data.year"></info>
    </div>
  </div>
</template>

<script>
import info from 'components/info/info'
export default {
  data () {
    return {
      data: {},
      activeTab: 'day'
    }
  },
  created () {
    this._initData()
  },
  methods: {
    _initData () {
      this.data = {
        day: {
          title: '14.5%',
          privilege: '特权最高年化+2%',
          cash: '随时取现，每年1次',
          interest: '13.5%起，逐月涨0.5%，最高14.5%'
        },
        month: {
          title: '15%',
          privilege: '特权最高年化+5%',
          cash: '随时取现，每年2次',
          interest: '13.5%起，逐月涨0.7%，最高15%'
        },
        year: {
          title: '16.5%',
          privilege: '特权最高年化+7%',
          cash: '随时取现，每年3次',
          interest: '13.5%起，逐月涨0.9%，最高16.5%'
        }
      }
    },
    handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
      window.alert('tab active')
    }
  },
  components: {
    info
  }
}
</script>

<style lang="scss" scoped>
</style>