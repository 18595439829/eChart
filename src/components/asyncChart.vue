<template>
  <div>
    <div id="async"
         style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
export default {
  name: 'asyncChart',
  data() {
    return {
      asyncOption: {
        title: {
          text: '异步数据加载示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: []
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: []
          }
        ]
      }
    }
  },
  methods: {
    fetchData(cb) {
      // 通过 setTimeout 模拟异步加载
      setTimeout(function() {
        cb({
          categories: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          data: [5, 20, 36, 10, 10, 20]
        })
      }, 1000)
    },
    asyncData() {
      this.fetchData(data => {
        this.$echarts.init(document.getElementById('async')).setOption({
          xAxis: {
            data: data.categories
          },
          series: [
            {
              // 根据名字对应到相应的系列
              name: '销量',
              data: data.data
            }
          ]
        })
      })
      if (this.asyncOption && typeof this.asyncOption === 'object') {
        this.$echarts
          .init(document.getElementById('async'))
          .setOption(this.asyncOption, true)
      }
    }
  },
  mounted() {
    this.asyncData()
  }
}
</script>
<style scoped>
</style>
