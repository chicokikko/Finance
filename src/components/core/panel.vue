<template>
    <section :class="[panelClass,cname]">
        <h4>-{{ title }}-</h4>
        <slot></slot>
    </section>
  </template>
  <script>
     export default{
          props:{
            cname:{
                type:String,
                default:""
            },
            title:{
                type:String,
                default:""
            },
          },
          components:{
              
          },
          data() {
              
              return{
                  panelClass:"panel"
              }
          },
         
      };
  </script>
  
  <style lang='scss' scoped>
@import "../../../css/element.scss";

.panel{
    @include panel
}
</style>