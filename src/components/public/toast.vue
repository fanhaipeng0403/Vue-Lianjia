<template lang="html">
  <transition name="fade">
    <div class="toast">
      {{message}}
    </div>
  </transition>
</template>

<script>
export default {
  props: ['message'],
  mounted () {
  }
}
</script>

<style lang="scss">
  //利用css3 进行水平居中或者垂直居中,
  // 原理是 , 先相对父元素进行50% left 或者top 移动
  // 然后利用translate ,移动自身的50%
  // 这样这个元素就居中了
.toast{
  font-size: 0.75rem;
  position: fixed;
  bottom: 15%;
  width: 6rem;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  color: #fff;
  -webkit-border-radius: 1rem;
  border-radius: 1rem;
  padding: .3rem .3rem;
  background: rgba(0, 0, 0, 0.68);
}
</style>
