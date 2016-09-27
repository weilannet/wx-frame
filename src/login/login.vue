<template>
  <div>
    <!--<header-component/>-->

    <group title="">
      <x-input title="手机号码" name="mobile" required :value.sync="txtmobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" v-ref:inputmobile></x-input>
    </group>
    <group title="">
      <x-input title="密码" type="password" placeholder="请输入密码" :value.sync="txtpwd" :min="6" v-ref:inputpassword></x-input>
    </group>

    <box gap="30px 10px">
      <x-button :disabled="submitdisable" :text="txtSubmit" type="primary" @click="btnLogin"></x-button>
    </box>

    <box gap="10px 10px">
      <a v-link="{ path: '/register' }">
        <x-button :text="txtRegister" plain type="primary"></x-button>
      </a>
    </box>

    <box gap="20px 10px" class="forgotpassword">
      <a v-link="{ path: '/updatepassword' }">忘记密码</a>
    </box>
    <!--<other-component/>-->
  </div>
</template>
<style>
  .forgotpassword {
    text-align: center;
  }

  .forgotpassword a {
    color: #000000;
  }
</style>
<script>
  import { Selector, PopupPicker, XInput, Group, XButton, Cell, Box } from '../components'
  import validlib from '../libs/validate'
  export default {
    created () {
      document.title = '登录'
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
      Box
    },
    data () {
      return {
        txtSubmit: '登录',
        submitdisable: false,
        txtRegister: '注册成为认证医生',
        txtmobile: '',
        txtpwd: ''
      }
    },
    methods: {
      onChange (val) {
        console.log(val)
      },
      btnLogin () {
        if (!validlib(this)) {
          return
        }
        this.txtSubmit = '正在提交'
        this.submitdisable = true
        var me = this
        var data = {
          phone: this.txtmobile,
          password: this.txtpwd
        }
        this.$http.post('/applogin', data).then(function (response) {
          var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
          this.submitdisable = false
          this.txtSubmit = '登录'
          if (result.msgcode) {
            localStorage['APP_SUCCESS'] = result.data._id
            this.$vux.alert.show({content: '登录成功！'})
            var pathFrom = me.$route.query.id
            me.$router.go(
              {
                path: !pathFrom ? (result.data && result.data.realName ? '/myreport' : '/myinfo') : pathFrom,
                params: null
              }
            )
            return
          }
          this.$vux.alert.show({content: '用户名或密码错误！'})
        })
      }
    }
  }
</script>
