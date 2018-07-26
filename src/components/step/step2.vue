<template>
  <div>
    第二步: 
      啦啦啦啦啦
      <Button @click="thirdClick">点击进行第三步</Button>
  </div>
</template>
<script>
export default {
  methods: {
    thirdClick() {
      console.log('step2组件')
      this.$emit('third', 2)
    }
  }
}
</script>