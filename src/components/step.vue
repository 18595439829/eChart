<template>
  <div>
    <p>当前正在进行第 {{ current + 1 }} 步</p>
    <Steps :current="current">
      <Step title="步骤1"
            status="wait"
            icon="ionic"
            @click="current=0"></Step>
      <Step title="步骤2"
            status="error"
            icon="log-in"
            @click="current=1"></Step>
      <Step title="步骤3"
            icon="log-out"
            @click="current=2"></Step>
    </Steps>
    <!-- <Tabs>
        <TabPane label="标签一"><step1  @second="second"></step1></TabPane>
        <TabPane label="标签二"><step2  @third="third"></step2></TabPane>
        <TabPane label="标签三"><step3 ></step3></TabPane>
    </Tabs> -->
    <Button type="primary"
            @click="next">Next step</Button>
    <transition name="fade"
                mode="out-in">
      <step1 v-if="current == 0"
             @second="second" key="step1"></step1>
      <step2 v-else-if="current == 1"
             @third="third" key="step2"></step2>
      <step3 v-else-if="current == 2" key="step3"></step3>
    </transition>
    <hr>
    <Progress :percent="percent"></Progress>
    <Button @click="time">计时器</Button>
  </div>
</template>
<script>
import step1 from './step/step1'
import step2 from './step/step2'
import step3 from './step/step3'
export default {
  components: {
    step1,
    step2,
    step3
  },
  data() {
    return {
      current: 0,
      percent: 0,
      timer: null
    }
  },
  methods: {
    next() {
      console.log('this', this)
      if (this.current == 3) {
        this.current = 0
      } else {
        this.current += 1
      }
    },
    second(e) {
      console.log('step1传的值为', e)
      this.current = e
    },
    third(e) {
      this.current = e
    },
    time() {
      this.timer = setInterval(() => {
        this.percent += 10
      }, 100)
    }
  },
  watch: {
    percent: v => {
      if (v > 100) {
        console.log('vvvvvv', v)
        clearInterval(this.timer)
      }
    }
  }
}
</script>
<style scoped>
</style>
