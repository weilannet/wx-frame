<template>
  <div>
    <!--<header-component/>-->

    <!--<cell title="接收新消息通知" value="已启用"></cell>-->

    <group title="">
      <x-textarea :max="200" :value.sync="model.checkInfo" placeholder="请输入拒绝理由"  :height="250"></x-textarea>
    </group>

    <box gap="30px 10px">
      <x-button  :disabled="submitdisable" :text="txtSubmit"  type="primary" @click="btnSubmit">确定</x-button>
    </box>

    <!--<other-component/>-->
  </div>
</template>
<style>
  body{

  }
</style>
<script>
  import { XTextarea, Group, XButton, Box, Icon } from '../components'
  export default {
    created () {
      document.title = '拒绝理由'
      Object.assign(this.model, this.$route.query)
    },
    ready () {
    },
    components: {
      XTextarea,
      XButton,
      Group,
      Box,
      Icon
    },
    data () {
      return {
        model: {
          _id: '',
          checkInfo: '',
          state: 0
        },
        submitdisable: false
      }
    },
    methods: {
      btnSubmit () {
        if (!this.model._id) {
          this.$vux.alert.show({content: '此病人不存在或已被审核！'})
          return
        }
        this.txtSubmit = '正在提交'
        this.submitdisable = true
        var me = this
        this.model.state = 2
        this.$http.post('/updatePatientInfo', this.model).then(function (response) {
          console.log(response.data)
          var result = response.data && JSON.parse(response.data)
          this.submitdisable = false
          this.txtsubmit = '确定'
          this.$vux.alert.show({content: result.msg})
          if (result.msgcode) {
            setTimeout(function () {
              me.$router.go(
                {
                  path: '/checkreceivetip',
                  params: null
                }
              )
            }, 500)
          }
        }, function () {
        })
      }
    }
  }
</script>
