<template>
    <section :class="cname">
        <el-carousel trigger="click" height="160px">
            <el-carousel-item v-for="i in items" :key="i.src">
                <!-- <h3 class="small">{{ i }}</h3> -->
                <router-link to="home" tag="div">
                    <img :src="i.src">
                </router-link>
            </el-carousel-item>
        </el-carousel>
    </section>
</template>
<script>

export default {
    props: {
        cname: {
            type: String,
            default: "",
        },
        items: {
            type: Array,
            default() {
                return []
            },
        },
    },
    components: {

    },
    data() {

        return {

        }
    },

    mounted() {
          
        },

};
</script>
  
<style lang='scss' scoped>

</style>