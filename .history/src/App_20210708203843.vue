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
    const result = await reqAddress(40.10038,116.36867)
    console.log("result",result);
  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
