<template>
  <div>


    <box gap="100px 10px">
    <div class="confirmfont">
      <div class="success"><icon type="success" class="icon_big"></icon>处理成功</div>
      <br/>

    </div>
      </box>
    <box gap="50px 10px">
      <a v-link="{ path: '/' }"><x-button  :text="submit001"  type="primary" @click="processButton001">确定</x-button></a>
    </box>

    <!--<other-component/>-->
  </div>
</template>
<style>
  body{

  }
</style>
<script>
  import { Selector, PopupPicker, XInput, Group, XButton, Cell, Box, Icon, XTextarea } from '../components'
  export default {
    created () {
      document.title = '接收成功'
    },
    ready () {
    },
    components: {
      Selector,
      PopupPicker,
      XInput,
      XButton,
      Group,
      Cell,
      Box,
      Icon,
      XTextarea
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style lang="less">
  @import '../styles/1px.less';
  .confirmfont {

    text-align: center;
    font-size: 12px;
    .success {
      font-size: 20px;
    }
  }
</style>
