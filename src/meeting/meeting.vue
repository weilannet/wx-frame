<template>
  <div>
    <div v-show="isshow" class="nomeeting">
      <div><icon type="info"></icon>暂无会议！</div>
      
   </div>
    <!--<header-component/>-->
   <div v-show="!isshow" class="meeting">

     <div class="meeting-title">
       {{model.title}}
     </div>
     <div class="meeting-date">
       {{model.publishTime}}
     </div>

     <div class="meeting-content">
       {{{model.content}}}
     </div>

   </div>
  <box v-show="!isshow" class="meeting-sign">
    <x-button :disabled="submitdisable" :text="txtmeeting"  type="primary" @click="btnClick"></x-button>
  </box>
</div>

</template>
<script>
  import { XButton, Box, Icon } from '../components'
  export default {
    created () {
      document.title = '会议报名';
      this.$http.post('/getMeetingInfo', null).then(function (response) {
        var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data;
           
        if (result.status) {
          Object.assign(this.model, result.data);
          this.submitdisable = false;
          // 不显示暂无会议
          this.isshow = false;

          if (this.model.code) {
            this.issign = true;
            this.txtmeeting = this.model.signstate == 1 ? '已报名，点击查看二维码' : '已参会，点击查看二维码';
            return
          }
          this.issign = false;
          
        } else {
          // 显示暂无会议
          this.isshow = true;
          // this.$vux.alert.show({content: result.message})
          this.txtmeeting = '不可报名';
          this.submitdisable = true;
        }
      })
    },
    ready () {
    },
    components: {
      XButton,
      Box,
      Icon
    },
    data () {
      return {
        model: {
          _id: '',
          title: '',
          publishTime: '',
          content: '',
          state: 0,
          code: '',
          codeUrl: '',
        },
        //控制会议的层显示
        isshow: true,
        //控制会议状态
        issign: false,
        submitdisable: false,
        txtmeeting: '报名参加'
      }
    },
    methods: {
      btnClick () {
        if (!this.issign) {
          this.$router.go(
            {
              path: '/meetingconfirm',
              params: { meetingId: this.model._id },
              query: { meetingId: this.model._id }
            });
          return;
        }
        // meetingconfirm
        this.$router.go(
          {
            path: '/result',
            params: { meetingId: this.model._id, code: this.model.code, title: this.model.title, signstate: this.model.signstate },
            query: { meetingId: this.model._id, code: this.model.code, title: this.model.title, signstate: this.model.signstate }
          });
      }
    }
  }
</script>
<style lang="less">
  @import '../styles/1px.less';

  .meeting {
    .meeting-title {
       font-size: 1.2rem;
    }
    .meeting-date {
       color:#ccc;
    }
    .meeting-content {
      width: 100%;
      img { width: 100%; }
    }
    background: #fff;
    width: 100%;
    padding: 1rem 1rem;
    box-sizing: border-box;
  }
  .meeting-sign {
    width: 100%;
    height:2.6rem;
    position: fixed;
    bottom:0
  }

  .nomeeting {
    margin: 30px auto;
    text-align: center;
    font-size: 12px; 
  }

</style>
