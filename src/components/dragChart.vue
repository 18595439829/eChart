<template>
  <div class="dragChart">
    <tree :data="data"></tree>
    <div class="item">
      <div class="title margin">订单时间</div>
      <DatePicker v-model="data.startTime"
                  :options="startTimeOptions"
                  :value="data.date"
                  type="date"
                  placement="bottom-start"
                  placeholder="请选择起始时间"
                  @on-change="startTimeChange"
                  style="width: 200px"></DatePicker>
      -
      <DatePicker v-model="data.endTime"
                  :options="endTimeOptions"
                  :value="data.date"
                  type="date"
                  placement="bottom-start"
                  placeholder="请选择终止时间"
                  @on-change="endTimeChange"
                  style="width: 200px"></DatePicker>
    </div>
    <Input type="text"  v-model="copyValue" ref="ipt" ></Input>
    <Button class="tag-read"
            :data-clipboard-text="copyValue"
            @click="copy">点击复制</Button>
  </div>
</template>
<script>
import Clipboard from 'clipboard'
export default {
  data() {
    return {
      data: [],
      data1: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ],
      /**
       * 日期设置
       */
      startTimeOptions: {
        disabledDate: date => {
          return date && date.valueOf() > Date.now()
        }
      },
      /**
       * 日期设置
       */
      endTimeOptions: {
        // 使用箭头函数
        disabledDate: date => {
          let startTime = this.data.startTime
            ? new Date(this.data.startTime).valueOf() - 10 * 24 * 60 * 60 * 1000
            : Date.now()
          let endTime = this.data.startTime
            ? new Date(this.data.startTime).valueOf()
            : Date.now()
          return (
            (date && date.valueOf() < startTime) || date.valueOf() > endTime
          )
        }
      },
      copyValue: ''
    }
  },
  methods: {
    startTimeChange(e) {
      console.log('this', this, e)
      this.data.startTime = e
      this.startTimeOptions = {
        disabledDate(date) {
          return date && date.valueOf() > Date.now()
        }
      }
    },
    endTimeChange(e) {
      this.data.endTime = e
    },
    copy(event) {
      var clipboard = new Clipboard('.tag-read')
      console.log('clipboard', event)
      clipboard.on('success', e => {
        console.log('复制成功')
        this.$Message.config({
            top: event.clientY
        })
        this.$Message.success('复制成功')
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        console.log('该浏览器不支持自动复制')
        // 释放内存
        clipboard.destroy()
      })
      this.$refs.ipt.focus()
    }
  },
  created() {
    this.data = this.data1
  }
}
</script>
<style scoped>
.dragChart {
  padding-bottom: 300px;
}
</style>
