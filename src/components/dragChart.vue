<template>
  <div>
    <div id="main"
         style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
export default {
  methods: {
    dragChart() {
      var symbolSize = 20
      var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]]
      console.log('lll')
      console.log('啦啦啦')
      this.$echarts.init(document.getElementById('main')).setOption({
        tooltip: {
          triggerOn: 'none',
          formatter: function(params) {
            return (
              'X: ' +
              params.data[0].toFixed(2) +
              '<br>Y: ' +
              params.data[1].toFixed(2)
            )
          }
        },
        xAxis: {
          min: -100,
          max: 80,
          type: 'value',
          axisLine: { onZero: false }
        },
        yAxis: {
          min: -30,
          max: 60,
          type: 'value',
          axisLine: { onZero: false }
        },
        series: [
          {
            id: 'a',
            type: 'line',
            smooth: true,
            symbolSize: symbolSize,
            data: data
          }
        ]
      })

      this.$echarts.init(document.getElementById('main')).setOption({
        graphic: this.$echarts.util.map(data, (item, dataIndex) => {
          return {
            type: 'circle',
            position: this.$echarts.init(document.getElementById('main')).convertToPixel('grid', item),
            shape: {
              r: symbolSize / 2
            },
            invisible: true,
            draggable: true,
            ondrag: this.$echarts.util.curry(onPointDragging, dataIndex),
            onmousemove: this.$echarts.util.curry(showTooltip, dataIndex),
            onmouseout: this.$echarts.util.curry(hideTooltip, dataIndex),
            z: 100
          }
        })
      })

      window.addEventListener('resize', () => {
        this.$echarts.init(document.getElementById('main')).setOption({
          graphic: this.$echarts.util.map(data, (item, dataIndex) => {
            return {
              position: this.$echarts.init(document.getElementById('main')).convertToPixel('grid', item)
            }
          })
        })
      })

     
    }
  },
  created() {
    console.log('$echarts', this.$echarts)
    this.dragChart()
  }
}
</script>
<style>
</style>
