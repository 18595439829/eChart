<template>
  <div id="app">
    <ul style="display: flex;margin: 20px;width:50%;list-style: none">
      <li style="flex: 1">
        <router-link :to="{name: 'HelloWorld'}">
          HelloWord
        </router-link>
      </li>
      <li  style="flex: 1">
        <router-link :to="{name: 'mapChart'}">
          mapChart
        </router-link>
      </li>
      <li style="flex: 1">
        <router-link :to="{name: 'asyncChart'}">
          asyncChart
        </router-link>
      </li>
      <li style="flex: 1">
        <router-link :to="{name: 'selectIpt'}">
          selectIpt
        </router-link>
      </li>
      <li style="flex: 1">
        <router-link :to="{name: 'dragChart'}">
          dragChart
        </router-link>
      </li>
      <li style="flex: 1">
        <router-link :to="{name: 'step'}">
          step
        </router-link>
      </li>
      <li style="flex: 1">
        <router-link :to="{name: 'myECharts'}">
          myECharts
        </router-link>
      </li>
    </ul>
    <hr>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      console.log('isRouterAlive', this.isRouterAlive)
      this.$nextTick(function() {
        this.isRouterAlive = true
        console.log('isReload', this.isRouterAlive)
      }) 
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 20px;
}
</style>
