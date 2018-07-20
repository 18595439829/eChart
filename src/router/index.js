import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MapChart from '../components/mapChart'
import AsyncChart from '../components/asyncChart'
import SelectIpt from '../components/selectIpt'
import DragChart from '../components/dragChart'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mapChart',
      name: 'mapChart',
      component: MapChart
    },
    {
      path: '/asyncChart',
      name: 'asyncChart',
      component: AsyncChart
    },
    {
      path: '/selectIpt',
      name: 'selectIpt',
      component: SelectIpt,
      meta: {
        keepAlive: true
      } //当前的.vue文件需要缓
    },
    {
      path: '/dragChart',
      name: 'dragChart',
      component: DragChart
    }
  ]
})
