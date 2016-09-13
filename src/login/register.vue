<template>
  <div>
    <!--<header-component/>-->

    <group title="">
      <x-input title="手机号码" name="mobile" :value.sync="txtmobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>
    <group title="">

      <x-input title="验证码" class="weui_vcode">
        <x-button slot="right" type="primary" :disabled="codedisable" @click="codeClick" :text.sync="codevalue"></x-button>
      </x-input>

    </group>
    <group title="两次输入需要保持一致">
      <x-input title="设置密码" type="password" placeholder="" :value.sync="txtpwd" :min="6" :max="12" @change="pwdChange"></x-input>
      <x-input title="确认密码" type="password" placeholder="" :value.sync="txtpwd2" :equal-with="password"></x-input>
    </group>

    <box gap="30px 10px">
      <x-button :text="submittext" :disabled="submitdisable" type="primary" @click="btnSubmit"></x-button>
    </box>

    <box gap="20px 10px" class="forgotpassword">
      <span>我已阅读并同意</span><a v-link="{ path: '/agreement' }">《同仁服务协议》</a>
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
  export default {
    created () {
      document.title = '注册'
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
        submittext: '注册',
        submitdisable: false,
        codevalue: '获取验证码',
        origintime: 60,
        time: 60,
        codedisable: false,
        txtmobile: '',
        txtpwd: '',
        txtpwd2: ''
      }
    },
    methods: {
      change (val) {
        this.codevalue = val + '秒后再获取'
      },
      btnSubmit () {
        var me = this
        this.submittext = '正在提交'
        this.submitdisable = true
        var data = {
          phone: this.txtmobile,
          password: this.txtpwd
        }

        this.$http.post('/register', data).then(function (response) {
          console.log(response.data)
          var result = response.data && JSON.parse(response.data)
          this.submitdisable = false
          this.submittext = '注册'
          this.$vux.alert.show({content: result.msg})
          if (result.msgcode) {
            setTimeout(function () {
              me.$router.go(
                {
                  path: '/login',
                  params: null
                }
              )
            }, 500)
          }
        }, function () {
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
        console.log(val)
        this.txtpwd2 = ''
      },
      codeClick () {
        if (!this.txtmobile) {
          this.$vux.alert.show({content: '请先填写手机号码！'})
          return false
        }
        this.codedisable = true
        let me = this
        var data = {
          mobile: this.txtmobile
        }
        this.$http.post('/getSMSCode', data).then(function (result) {
          console.log(result.data)
        }, function () {
        })
        this.interval = setInterval(function () {
          if (me.time > 0) {
            me.change(me.time--)
          } else {
            me.finish()
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