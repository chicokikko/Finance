<template lang="html">
    <div>
        <Heador></Heador>
        <Slider></Slider>
        <Welfare></Welfare>
        <Serve></Serve>
        <Footor></Footor>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Heador from '../../components/common/header.vue'
import Footor from '../../components/common/footer.vue'
import Slider from './bslider.vue'
import Navbar from '../../components/common/navbar.vue'
import Welfare from '../../components/borrow/welfare.vue'
import Serve from '../../components/borrow/serve.vue'
export default {
    components: {
      Heador,
      Slider,
      Footor,
      Navbar,
      Welfare,
      Serve
    }
}
</script>

<style lang="scss" module>

</style>
