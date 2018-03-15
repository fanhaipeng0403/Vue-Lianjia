<template>
  <div class="app">
    <router-view></router-view>
    <!--<transition name="fade" v-if="this.$store.state.onetoast">-->
      <toast :message='tips'></toast>
    <!--</transition>-->
  </div>
</template>

<script>

import toast from './components/public/toast.vue'

export default {
  name: 'App',
  data () {
    return {
      tips: '临摹的小demo'
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 50 && this.$store.state.fdlh_show === false) {
        this.$store.state.dlh_show = true
      }
      if (scrollTop < 50) {
        this.$store.state.dlh_show = false
      }
    }, true)
    setTimeout(() => {
      this.$store.state.onetoast = false
    }, 3 * 1000)
  },
  computed: {
    a () {
      return this.$store.state.dlh_show
    }
  },
  components: { toast
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease-in-out
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .app {
    height: 100%;
  }
</style>
