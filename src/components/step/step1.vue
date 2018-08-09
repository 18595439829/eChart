<template>
  <div>
    <h3>第一步:</h3><input v-model="firstValue"
           type="text">
    <p>啦啦啦啦啦</p>
    <p>啦啦啦啦啦</p>
    <p>啦啦啦啦啦</p>
    <p>啦啦啦啦啦</p>
    <p>啦啦啦啦啦</p>
    <p>啦啦啦啦啦</p>
    <p>啦啦啦啦啦</p>
    <br/>
    <Button @click="secondClick">点击进行第二步</Button>
    <Tabs ref="Tabs" name="nameTab">
      <TabPane label="标签一" name="one">
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <button @click="oneClick">点击</button>
      </TabPane>
      <TabPane label="标签二" name="two">
        <p>2</p>
        <p>2</p>
        <p>2</p>
      </TabPane>
      <TabPane label="标签三" name="three">
        <p>3</p>
        <p>3</p>
        <p>3</p>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
export default {
  name: 'step1',
  data() {
    return {
      firstValue: ''
    }
  },
  computed: {
    // firstValue () {
    //   return this.$store.state.firstValue
    // }
  },
  mounted() {
    console.log('store', this.$store)
  },
  methods: {
    secondClick() {
      console.log('step1组件')
      this.$store.commit('increment', this.firstValue)
      this.$emit('second', 1)
    },
    oneClick () {
      console.log('ref', this.$refs.Tabs)
    }
  }
}
</script>

