<template lang="html">
    <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.content">
            <dl :class="$style.item" v-for="item in items" :key="item.title">
                <dt>{{ item.title }} <span class="red">{{ item.sub }}</span></dt>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.text }}</dd>
            </dl>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
    data() {
        return {
            items: [{
                title: "定期理财",
                sub: "理财首选",
                rate: "5.60%",
                text: "历史年化回报率",
            }, {
                title: "小白理财",
                sub: "理财首选",
                rate: "4.22%",
                text: "7日年化收益率",
            }, {
                title: "月月盈",
                sub: "养老保障",
                rate: "5%",
                text: "七日年化收益率",
            }, {
                title: "小白基金",
                sub: "天天赚钱",
                rate: "4.27%",
                text: "7日年化收益率",
            }],
        }
    },
    components: {
        Panel,
    }
}
</script>

<style lang="scss" module>
@import '../../../css/element.scss';
.panel{
    @include panel;
    .content{
      @include flex(row);
      justify-content: space-around;
      box-sizing: border-box;
      &:after{
        content: " ";
        display: block;
        width: 100%;
        height: 0px;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        position: relative;
        top: -104px;
      }
      .item{
        position: relative;
        width: 50%;
        box-sizing: border-box;
        &:after{
          content: " ";
          width: 1px;
          height: 68px;
          display: block;
          position: absolute;
          top: 50%;
          right: 0;
          margin-top: -34px;
          border-right: 1px solid #eee;
        }
        &:nth-child(2n){
          &:after{
            display: none;
          }
        }
        padding: 17px 25px;
        dt{
          font-size: 15px;
          line-height: 21px;
          color: #333;
          span{
            font-size:11px;
            color:#ff5155;
            border: 1px solid #ff5155;
            padding: 0 4px;
            vertical-align: 1px;
            margin-left: 1px;
          }
        }
        dd{
          &:nth-child(2){
            font-weight: 350;
            font-size: 22px;
            height: 29px;
            line-height: 29px;
            color: #FF5155;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          &:nth-child(3){
            font-size: 12px;
            height: 17px;
            line-height: 17px;
            color: #999;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }

      }
    }
  }
</style>