<!-- <template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template> -->
<template>
  <div class="container">    
    <div class="footer">
      <tab></tab>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>

import Tab from 'components/tab/tab'

export default {
  data () {
    return {

    }
  },
  components: {
    Tab
  }
}

</script>

<style lang="scss">
.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .footer {
    position: fixed;
    width: 90%;
    bottom:10px;
    padding-left:10%;
  }
}


</style>
