<!-- <template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template> -->
<template>
  <div>
    <mu-appbar title="Title">
    <mu-icon-button icon="menu" slot="left"/>
    <mu-flat-button label="expand_more" slot="right"/>
    <mu-icon-button icon="expand_more" slot="right"/>
  </mu-appbar>
  <mu-tabs :value="activeTab" @change="handleTabChange" class="footer">
    <mu-tab value="tab1" icon="phone" title="RECENTS"/>
    <mu-tab value="tab2" icon="favorite" title="FAVORITES"/>
    <mu-tab value="tab3" icon="person_pin" title="NEARBY"/>
  </mu-tabs>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        activeTab: 'tab1'
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  position: fixed;
  bottom:0;
}
</style>
