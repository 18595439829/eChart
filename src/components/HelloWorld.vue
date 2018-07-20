<template>
  <div class="hello">
    <div id="zhu"
         style="width: 600px;height:400px;"></div>
    <div id="bing"
         style="width: 600px;height:400px;"></div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      // 指定图表的配置项和数据
    }
  },
  methods: {
    zhuChart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('zhu'))

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          inactiveColor: 'lightgreen',
          selected: {
            // 选中'系列1'
            '2018折线图': false,
            // 不选中'系列2'
            '2018衣服销量': false
          },
          textStyle: {
            textShadowColor: 'yellow',
            textShadowBlur: '10',
            textShadowOffsetX: '2',
            textShadowOffsetY: '2'
          },
          data: ['2017衣服销量', '2017折线图', '2018衣服销量', '2018折线图']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        dataZoom: [
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 0,
            end: 100
          },
          // {
          //   type: 'slider',
          //   show: true,
          //   yAxisIndex: [0],
          //   left: '93%',
          //   start: 29,
          //   end: 36
          // },
          {
            type: 'inside',
            xAxisIndex: [0],
            start: 1,
            end: 35
          }
          // {
          //   type: 'inside',
          //   yAxisIndex: [0],
          //   start: 29,
          //   end: 36
          // }
        ],
        series: [
          {
            // 柱状图hover字段
            name: '2017衣服销量',
            type: 'bar',
            itemStyle: {
              normal: {
                //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                color: function(params) {
                  // build a color map as your need.
                  let colorList = [
                    'red',
                    'yellow',
                    'blue',
                    'green',
                    'pink',
                    'purple'
                  ]
                  // [
                  //   '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                  //    '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                  //    '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                  // ];
                  return colorList[params.dataIndex]
                }, //以下为是否显示，显示位置和显示格式的设置了
                label: {
                  show: true,
                  position: 'top',
                  //                             formatter: '{c}'
                  formatter: '{b}\n{c}'
                }
              }
            },
            // 高亮样式。
            emphasis: {
              itemStyle: {
                // 高亮时点的颜色。
                color: 'gray'
              }
            },
            data: [5, 20, 36, 10, 10, 20]
          },
          {
            name: '2017折线图',
            type: 'line',
            step: '',  // 此属性只要声明就会将折线的形状修改为横折线连接,赋值为true/false都不会影响折线形状的变化
            symbol: 'square', //将折线原点改为方块
            symbolSize: 6, //拐点大小
            itemStyle: {
              normal: {
                color: function(params) {
                  //单独设置每一个折点颜色
                  let colorList = [
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    '#e1c8a4'
                  ]
                  return colorList[params.dataIndex]
                }, //折点颜色
                lineStyle: {
                  color: 'black' //折线颜色
                }
              }
            },
            data: [5, 20, 36, 10, 10, 20]
          },
          {
            // 柱状图hover字段
            name: '2018衣服销量',
            type: 'bar',
            itemStyle: {
              normal: {
                //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                color: function(params) {
                  // build a color map as your need.
                  let colorList = [
                    '#C1232B',
                    '#B5C334',
                    '#FCCE10',
                    '#E87C25',
                    '#27727B',
                    '#FE8463',
                    '#9BCA63',
                    '#FAD860',
                    '#F3A43B',
                    '#60C0DD',
                    '#D7504B',
                    '#C6E579',
                    '#F4E001',
                    '#F0805A',
                    '#26C0C0'
                  ]
                  return colorList[params.dataIndex]
                }, //以下为是否显示，显示位置和显示格式的设置了
                label: {
                  show: true,
                  position: 'top',
                  //                             formatter: '{c}'
                  formatter: '{b}\n{c}'
                }
              }
            },
            data: [5, 10, 20, 30, 20, 10]
          },
          {
            name: '2018折线图',
            type: 'line',
            symbol: 'square', //将折线原点改为方块
            symbolSize: 6, //拐点大小
            itemStyle: {
              normal: {
                color: function(params) {
                  //单独设置每一个折点颜色
                  let colorList = [
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    '#e1c8a4'
                  ]
                  return colorList[params.dataIndex]
                }, //折点颜色
                lineStyle: {
                  color: 'black' //折线颜色
                }
              }
            },
            // data: $scope.oneData.line
            data: [5, 10, 20, 30, 20, 10]
          }
        ]
      })
    },
    bingChart() {
      this.$echarts.init(document.getElementById('bing')).setOption({
        backgroundColor: '#2c343c',
        series: {
          type: 'pie',
          radius: '55%',
          data: [
            {
              name: 'A',
              value: 1212,
              itemStyle: {
                color: 'red'
              }
            },
            {
              name: 'B',
              value: 2323,
              itemStyle: {
                color: 'blue'
              }
            },
            {
              name: 'C',
              value: 1919,
              itemStyle: {
                color: 'yellow'
              }
            }
          ],
          // roseType: 'angle',   //转变为南丁格尔图
          // 文字样式
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          // 指示线样式
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          // 图形样式
          itemStyle: {
            normal: {
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      })
    }
  },
  mounted() {
    this.zhuChart()
    this.bingChart()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
