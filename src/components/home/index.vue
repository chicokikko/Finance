<template lang="html">
    <div>
        <Heador></Heador>
        <Slider></Slider>
        <Novice></Novice>
        <Borrow></Borrow>
        <Money></Money>
        <Product></Product>
        <life></life>
        <Footor></Footor>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Heador from '../../components/common/header.vue'
import Footor from '../../components/common/footer.vue'
import Slider from './hslider.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product.vue'
import Life from './life.vue'
import Navbar from '../../components/common/navbar.vue'
export default {
    components: {
      Heador,
      Slider,
      Novice,
      Borrow,
      Money,
      Product,
      Life,
      Footor,
      Navbar
    }
}
</script>

<style lang="scss" module>

</style>
