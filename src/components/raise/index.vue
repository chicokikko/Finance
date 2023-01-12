<template lang="html">
    <div>
        <Heador></Heador>
        <Slider></Slider>
        <Daily></Daily>
        <In></In>
        <More></More>
        <Footor cname="mfooter"/>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Heador from '../../components/common/header.vue'
import Footor from '../../components/common/footer.vue'
import Slider from './rslider.vue'
import Navbar from '../../components/common/navbar.vue'
import Daily from './daily.vue'
import In from './in.vue'
import More from './more.vue'

export default {
    components: {
      Heador,
      Slider,
      Footor,
      Navbar,
      Daily,
      In,
      More
      
    }
}
</script>

<style lang="scss" scoped>
  .mfooter{
    ul{
      li:first-child{
        display: none;
      }
      li:nth-child(2){
        >div{
            padding-top: 0!important;
        }
        
      }
    }
  }
</style>
