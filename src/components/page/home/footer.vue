<template lang="html">
  <div class="footer">
    <div class="f-title">
      <p>北京手机链家网</p>
    </div>
    <div class="content">
      <div class="f-content">
        <div class="nav" :class="{partActive: partActive}" @click="partClick">
          链家分站
        </div>
        <div class="nav" :class="{hotActive: hotActive}" @click="hotClick">
          热门城市
        </div>
      </div>
      <div v-if="partActive" class="">
        <part></part>
      </div>
      <div v-if="hotActive">
        <hotCity></hotCity>
      </div>
    </div>
    <div class="info">
      <div class="and_ios_dl">
        <div class="dl ios_dl"></div>
        <div class="dl and_dl"></div>
      </div>
      <div class="website_info">
        <p>北京链家房地产经纪有限公司</p>
        <p>网络经营许可证 京ICP备11024601号-12</p>
      </div>
    </div>
  </div>
</template>

<script>
import part from '../../part.vue'
import hotCity from '../../hotCity.vue'
export default {
  data () {
    return {
      partActive: true,
      hotActive: false
    }
  },
  components: {
    part,
    hotCity
  },
  methods: {
    partClick () {
      this.partActive = true
      this.hotactive = false
    },
    hotClick () {
      this.partActive = false
      this.hotActive = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import  '../../../assets/scss/home/footer.scss'
</style>
