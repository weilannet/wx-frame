<template>
  <div>

      <div class="confirmfont">
        <div class="success"><icon type="success" class="icon_big"></icon>{{model.signstate == 2 ? '参会' : '报名'}}成功</div>
        <br/>
        <span>您已成功{{model.signstate == 2 ? '参会' : '报名'}}{{model.title}}会议！</span>
        <br/>
        <span>请保存下方二维码做为参会唯一凭证！</span>
        <br/>
        <br/>
        <qrcode :value="model.code"></qrcode>
        <br/>
        <br/>
        <span style="color: #666666; text-decoration: none; pointer-events: none;">会议识别码：{{model.code}}</span>
        <br/>
        <br/>
        <a v-link="'/meeting?_id=' + model.meetingId">查看会议详情</a>
      </div>
      <box gap="30px 10px">
        <a v-link="{ path: '/meeting' }"><x-button  :text="txtsubmit"  type="primary" ></x-button></a>
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
      Object.assign(this.model, this.$route.query)
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
        model: {
          title: '',
          meetingId: '',
          code: '',
          signstate: 0
        },
        txtsubmit: '确定'
      }
    },
    methods: {
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
