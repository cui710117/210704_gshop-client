<template>
  <div>
      <router-view/>
      <FooterGuide/>
  </div>
</template>

<script>
import {reqAddress} from './api/index'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  async mounted () {
    const result = await reqAddress()
  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
