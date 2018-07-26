<template>
  <div>
    第一步: 
      啦啦啦啦啦
      <Button @click="secondClick">点击进行第二步</Button>
  </div>
</template>
<script>
export default {
  name: 'step1',
  methods: {
    secondClick() {
      console.log('step1组件')
      this.$emit('second', 1)
    }
  }
}
</script>

