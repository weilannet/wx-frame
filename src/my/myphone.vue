<template>
  <div>
    <!--<header-component/>-->

    <group title="">
      <x-input title="手机号码" name="mobile" :value.sync="txtmobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" @change="phoneChange"  required v-ref:inputmobile></x-input>
    </group>
    <group title="">

      <x-input title="验证码" class="weui_vcode" required v-ref:inputcode :value.sync="txtcode" >
        <x-button slot="right" type="primary" :disabled="codedisable" @click="codeClick" :text="codevalue"></x-button>
      </x-input>

    </group>

    <box gap="30px 10px">
      <x-button  :text="submittext"  :disabled="submitdisable" type="primary" @click="btnSubmit"></x-button>
    </box>

    <!--<other-component/>-->
  </div>
</template>
<style>
  .forgotpassword {
    text-align: center;
  }

</style>
<script>
  import { XInput, Group, XButton, Cell, Box, Icon } from '../components'
  import validlib from '../libs/validate'
  export default {
    created () {
      document.title = '修改手机号'
    },
    ready () {
    },
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      Box,
      Icon
    },
    data () {
      return {
        submittext: '保存',
        submitdisable: false,
        codevalue: '获取验证码',
        origintime: 60,
        time: 60,
        codedisable: false,
        txtmobile: '',
        txtpwd: '',
        txtpwd2: '',
        showToast: false,
        txtcode: '',
        txtcode2: ''
      }
    },
    methods: {
      change (val) {
        this.codevalue = val + '秒后再获取'
      },
      btnSubmit () {
        if (!validlib(this)) {
          return
        }
        if (parseInt(this.txtcode) !== parseInt(this.txtcode2)) {
          this.$vux.toast.show({text: '验证码输入有误！', type: 'text', time: 1000, width: '20em'})
          return
        }
        this.submittext = '正在提交'
        this.submitdisable = true
        var me = this
        var data = {
          phone: this.txtmobile
        }
        this.$http.post('/updatePhone', data).then(function (response) {
          var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
          this.submitdisable = false
          this.submittext = '保存'
          if (!result.msgcode) {
            this.$vux.alert.show({content: result.msg})
            return
          }
          this.$vux.toast.show({text: '修改成功！', type: 'text', time: 500, width: '20em'})
          setTimeout(function () {
            me.$router.go(
              {
                path: '/login',
                params: null
              }
            )
          }, 500)
        })
      },
      finish (index) {
        if (this.interval) {
          clearInterval(this.interval)
        }
        this.codevalue = '获取验证码'
        this.codedisable = false
        this.time = this.origintime
      },
      pwdChange (val) {
        this.txtpwd2 = ''
      },
      phoneChange (val) {
        this.txtcode = ''
      },
      codeClick () {
        if (!this.$refs.inputmobile.valid) {
          this.$vux.toast.show({ text: '请正确填写手机号码！', type: 'text', time: 1000, width: '20em' })
          return false
        }
        this.codedisable = true
        var data = {
          mobile: this.txtmobile
        }
        this.$http.post('/getSMSCode', data).then(function (response) {
          var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
          if (!result.msgcode) {
            this.$vux.alert.show({content: result.msg})
            return
          }
          this.txtcode2 = result.data
        })
        this.codedisable = true
        let _this = this
        this.interval = setInterval(function () {
          if (_this.time > 0) {
            _this.change(_this.time--)
          } else {
            _this.finish()
          }
        }, 1000)
      }
    }
  }
</script>
<style scoped>
  .weui_cell_ft .weui_btn {
    margin-left: 5px;
    vertical-align: middle;
    display: inline-block;
  }
  .weui_vcode .weui_btn {
    width: auto;
  }
</style>
