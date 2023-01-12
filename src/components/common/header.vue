<template lang="html">
    <div :class="$style.header">
        <span :class="$style.left">
            <router-link to="">登录</router-link>&nbsp;|&nbsp;<router-link to="">注册</router-link>
        </span>
        <!-- <router-link tag="button" :class="$style.btnDownload"  to="{ name: 'download' }">APP下载</router-link> -->
        <btn :class="$style.btnDownload" @click.native="download">APP下载</btn>

    </div>
</template>

<script>
import btn from '../core/btn.vue'
export default {
    components: {
        btn,
    },
    methods: {
         download(){
            this.$router.push('/download');
            console.log(123)
        }
    },

}
</script>

<style lang="scss" module>
.header {
    color: #666;
    height: 50px;
    line-height: 50px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    font-size: 32px;
    background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
    background-size: auto 50%;
    z-index: 100;
}

.left {
    font-size: 14px;
    height: 15px;
    line-height: 15px;
    margin: 8px 0 0 9px;
}

.btnDownload {
    float: right;
    font-size: 12px;
    border-width: 0;
    height: 28px;
    line-height: 28px;
    min-width: 60px;
    padding: 0;
    border-radius: 4px;
    margin: 14px 12px 0 0;
}
</style>