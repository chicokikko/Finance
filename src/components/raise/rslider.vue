<template lang="html">
    <Panel title="轮播图" :class="$style.panel">
        <section :class="$style.content">
            <el-carousel height="36px" direction="vertical" :autoplay="true">
                <el-carousel-item v-for="item in text" :key="item.title">
                    <h3 :class="$style.title">{{ item.title }}</h3>
                </el-carousel-item>
            </el-carousel>
            <span><em>></em></span>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
import Daily from './daily.vue'
export default {
    data() {
        return {
            text:[
                {title:'百万白条券免费送，速来领取！！'},
                {title:'签到领流量，1元500M！'},
                {title:'京东白条开通注意事项'}
            ]
        }
    },
    components: {
        Panel,
        Daily
    }
}
</script>

<style lang="scss" module>
@import '../../../css/element.scss';

.panel {
    @include panel;
    margin-top: 60px !important;

    >h4 {
        display: none;
    }

    .content{
      height: 36px;
      line-height: 36px;
      overflow: hidden;
      background-size:contain;
      background-image: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png);
      background-repeat: no-repeat;
      position: relative;
      span{
        position: absolute;
        top:0px;
        right: 20px;
        color: #f5f5f5;
       
      }
    }
    .title{
        padding-left: 89px;
        font-size: 14px;
    }
}
</style>