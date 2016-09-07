<template>
  <div>



      <div class="confirmfont">
        <div class="success"><icon type="success" class="icon_big"></icon>报名成功</div>
        <br/>
        <span>您以成功报名XX会议！</span>

        <br/>
        <span>请保存下方二维码做为参会唯一凭证！</span>
        <br/>
        <br/>
        <qrcode value="https://vux.li"></qrcode>
        <br/>
        <br/>
        <span>会议识别码：9838834834</span>
        <br/>
        <br/>
        <a v-link="{ path: '/meeting' }">查看会议详情</a>
      </div>
      <box gap="30px 10px">
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
  import Qrcode from '../components/qrcode'
  import { XButton, Box, Icon } from '../components'
  export default {
    created () {
      document.title = '报名成功'
    },
    ready () {
    },
    components: {
      XButton,
      Box,
      Icon,
      Qrcode
    },
    data () {
      return {
        value: '',
        title1: '性别',
        value1: ['女'],
        list1: [['男', '女']]
      }
    },
    methods: {
      onChange (val) {
        console.log(val)
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      },
      processButton001 () {
        this.submit001 = '正在提交'
        this.disable001 = true
      }
    }
  }
</script>
<style lang="less">
  @import '../styles/1px.less';
  .confirmfont {
    margin: 30px auto;
    text-align: center;
    font-size: 12px;
    .success {
      font-size: 20px;
    }
  }
</style>
