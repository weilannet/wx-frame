<template>
  <div>


    <box gap="100px 10px">
      <div class="confirmfont">
        <div class="success">
          <icon type="success" class="icon_big"></icon>处理成功</div>
        <br/>

      </div>
    </box>
    <box gap="50px 10px">
      <x-button @click="btnSubmit" type="primary">确定</x-button>
    </box>

    <!--<other-component/>-->
    <loading :show="showLoading" :text="showText"></loading>
  </div>
</template>
<style>
  body {}
</style>
<script>
  import { Loading, Selector, PopupPicker, XInput, Group, XButton, Cell, Box, Icon, XTextarea } from '../components';
  
  export default {
    created () {
      document.title = '处理成功'
      var me = this;
      me.showLoading = true;
      this.$http.get('/getJSConfig?url='+ location.href.substring(0,location.href.indexOf('#'))).then(function (response) {
        var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data;
        if (result.status) {
           
           wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: result.data.appId, // 必填，公众号的唯一标识
              timestamp: result.data.timestamp, // 必填，生成签名的时间戳
              nonceStr: result.data.nonceStr, // 必填，生成签名的随机串
              signature: result.data.signature,// 必填，签名，见附录1
              jsApiList: result.data.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          });
          me.showLoading = false;
        } else {
          this.$vux.alert.show({content: result.message});
        }
      });
     
    },
    ready () {
    },
    components: {
      Loading,
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
        showLoading: false,
        showText: '',
      }
    },
    methods: {
      btnSubmit: function() {
         wx.closeWindow();
      }
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