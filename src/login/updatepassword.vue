<template>
  <div>
    <!--<header-component/>-->

    <group title="">
      <x-input title="手机号码" name="mobile" :value.sync="txtmobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>
    <group title="">

      <x-input title="验证码" class="weui_vcode" >
        <x-button slot="right" type="primary" :disabled="codedisable" @click="codeClick" :text="codevalue"></x-button>
      </x-input>

    </group>
    <group title="两次输入需要保持一致">
      <x-input title="修改密码" type="password" placeholder="" :value.sync="txtpwd" :min="6" :max="12" @change="pwdChange"></x-input>
      <x-input title="确认密码" type="password" placeholder=""  :value.sync="txtpwd2" :equal-with="password"></x-input>
    </group>

    <box gap="30px 10px">
      <x-button  :text="submittext"  :disabled="submitdisable" type="primary" @click="btnSubmit"></x-button>
    </box>


    <toast :show.sync="showToast" :time="1000">修改成功</toast>
    <!--<other-component/>-->
  </div>
</template>
<style>
  .forgotpassword {
    text-align: center;
  }

</style>
<script>
  import { Toast, XInput, Group, XButton, Cell, Box, Icon } from '../components'
  import Router from 'vue-router'
  import Vue from 'vue'
  Vue.use(Router)
  const router = new Router()
  export default {
    ready () {
    },
    components: {
      Toast,
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
        showToast: false
      }
    },
    methods: {
      change (val) {
        this.codevalue = val + '秒后再获取'
      },
      btnSubmit () {
        this.submittext = '正在提交'
        this.submitdisable = true
        var data = {
          phone: this.txtmobile,
          password: this.txtpwd
        }
        console.log(JSON.stringify(data))
        this.showToast = true
        setTimeout(function () {
          router.go(
            {
              path: '/login',
              params: null
            }
          )
        }, 1000)
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
