<template>
  <div>
    <h3>第二步:</h3>  
      <p>啦啦啦啦啦</p>
      <input v-model="secondValue" type="text">
      <p>啦啦啦啦啦</p>
      <p>啦啦啦啦啦</p>
      <p>啦啦啦啦啦</p>
      <p>啦啦啦啦啦</p>
      <p>啦啦啦啦啦</p>
      <p>啦啦啦啦啦</p>
      <br/>
      <Button @click="thirdClick">点击进行第三步</Button>
  </div>
</template>
<script>
export default {
   data () {
    return {
    }
  },
   computed : {
    secondValue () {
      return this.$store.state.secondValue
    }
  },
  methods: {
    thirdClick() {
      console.log('step2组件', this.$store.state.secondValue)
      this.$store.commit('decrement', this.secondValue)
      this.$emit('third', 2)
    }
  }
}
</script>