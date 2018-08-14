<template>
  <div>
    <div id="myECharts"
         style="width: 600px;height:600px;"></div>
  </div>
</template>
<script>
export default {
  name: 'myECharts',
  data() {
    return {
      dataChart: [],
      dataCount: 10,
      startTime: +new Date(),
      categories: ['categoryA', 'categoryB', 'categoryC'],
      types: [
        { name: 'JS Heap', color: 'red' },
        { name: 'Documents', color: '#bd6d6c' },
        { name: 'Nodes', color: '#75d874' },
        { name: 'Listeners', color: '#e0bc78' },
        { name: 'GPU Memory', color: '#dc77dc' },
        { name: 'GPU', color: '#72b362' }
      ],
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        series: [
          {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    }
  },
  methods: {
    functionCreated() {
      this.$echarts.util.each(this.categories, (category, index) => {
        var baseTime = this.startTime
        for (var i = 0; i < this.dataCount; i++) {
          var typeItem = this.types[
            Math.round(Math.random() * (this.types.length - 1))
          ]
          var duration = Math.round(Math.random() * 10000)
          this.dataChart.push({
            name: typeItem.name,
            value: [index, baseTime, (baseTime += duration), duration],
            itemStyle: {
              normal: {
                color: typeItem.color
              }
            }
          })
          baseTime += Math.round(Math.random() * 2000)
        }
      })
    },
    setEchart() {
      var echarts = this.$echarts
      var dom = document.getElementById('myECharts')
      var myChart = echarts.init(dom)
      var app = {}
      option = null

      var data = []
      var dataCount = 10
      var startTime = +new Date()
      var categories = ['categoryA', 'categoryB', 'categoryC']
      var types = [
        {
          name: 'JS Heap',
          color: 'red'
        },
        {
          name: 'Documents',
          color: '#bd6d6c'
        },
        {
          name: 'Nodes',
          color: '#75d874'
        },
        {
          name: 'Listeners',
          color: '#e0bc78'
        },
        {
          name: 'GPU Memory',
          color: '#dc77dc'
        },
        {
          name: 'GPU',
          color: '#72b362'
        }
      ]

      // Generate mock data
      echarts.util.each(categories, function(category, index) {
        var baseTime = startTime
        for (var i = 0; i < dataCount; i++) {
          var typeItem = types[Math.round(Math.random() * (types.length - 1))]
          var duration = Math.round(Math.random() * 10000)
          data.push({
            name: typeItem.name,
            value: [index, baseTime, (baseTime += duration), duration],
            itemStyle: {
              normal: {
                color: typeItem.color
              }
            }
          })
          baseTime += Math.round(Math.random() * 2000)
        }
      })

      function renderItem(params, api) {
        var categoryIndex = api.value(0)
        var start = api.coord([api.value(1), categoryIndex])
        var end = api.coord([api.value(2), categoryIndex])
        var height = api.size([0, 1])[1] * 0.6

        return {
          type: 'rect',
          shape: echarts.graphic.clipRectByRect(
            {
              x: start[0],
              y: start[1] - height / 2,
              width: end[0] - start[0],
              height: height
            },
            {
              x: params.coordSys.x,
              y: params.coordSys.y,
              width: params.coordSys.width,
              height: params.coordSys.height
            }
          ),
          style: api.style()
        }
      }

      var option = {
        tooltip: {
          formatter: function(params) {
            return params.marker + params.name + ': ' + params.value[3] + ' ms'
          }
        },
        title: {
          text: 'Profile',
          left: 'center'
        },
        dataZoom: [
          {
            type: 'slider',
            filterMode: 'weakFilter',
            showDataShadow: false,
            top: 400,
            height: 10,
            borderColor: 'transparent',
            backgroundColor: '#e2e2e2',
            handleIcon:
              'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
            handleSize: 20,
            handleStyle: {
              shadowBlur: 6,
              shadowOffsetX: 1,
              shadowOffsetY: 2,
              shadowColor: '#aaa'
            },
            labelFormatter: ''
          },
          {
            type: 'inside',
            filterMode: 'weakFilter'
          }
        ],
        grid: {
          height: 300
        },
        xAxis: {
          min: startTime,
          scale: true,
          axisLabel: {
            formatter: function(val) {
              return Math.max(0, val - startTime) + ' ms'
            }
          }
        },
        yAxis: {
          data: categories
        },
        series: [
          {
            type: 'custom',
            renderItem: renderItem,
            itemStyle: {
              normal: {
                opacity: 0.8
              }
            },
            encode: {
              x: [1, 2],
              y: 0
            },
            data: data
          }
        ]
      }
      if (option && typeof option === 'object') {
        myChart.setOption(option, true)
      }
    }
  },
  mounted() {
    if (this.option && typeof this.option === 'object') {
        console.log('option初始化成功')
        this.$echarts
          .init(document.getElementById('myECharts'))
          .setOption(this.option, true)
      }
  }
}
</script>
<style scoped>
</style>
