<template lang="html">
    <div>
        <Heador></Heador>
        <Slider></Slider>
        <Ada></Ada>
        <Recommend></Recommend>
        <Adb></Adb>
        <Finance></Finance>
        <Adc></Adc>
        <Footor cname="mfooter"></Footor>
        <Navbar></Navbar>

    </div>
</template>

<script>
import Heador from '../../components/common/header.vue'
import Footor from '../../components/common/footer.vue'
import Slider from './mslider.vue'
import Navbar from '../../components/common/navbar.vue'
import Ada from './ada.vue'
import Adb from './adb.vue'
import Adc from './adc.vue'
import Recommend from './recommend.vue'
import Finance from './finance.vue'
export default {
    components: {
        Heador,
        Slider,
        Footor,
        Navbar,
        Ada,
        Adb,
        Adc,
        Recommend,
        Finance
    }
}
</script>

<style lang="scss" >
.mfooter {
    margin-top: 0 !important;

    ul {
        li:first-child {
            display: none;
        }
    }
}
</style>
