<template>
  <div>
    <!--<header-component/>-->

    <group title="">
      <x-input title="手机号码" name="mobile" :value.sync="txtmobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>
    <group title="">
      <x-input title="密码" type="text" placeholder="请输入密码" :value.sync="txtpwd" :min="6" ></x-input>
     </group>

      <box gap="30px 10px">
        <x-button :disabled="submitdisable"  :text="txtSubmit"  type="primary" @click="btnLogin"></x-button>
      </box>

      <box gap="10px 10px">
        <a v-link="{ path: '/register' }"><x-button :text="txtRegister" plain type="primary" ></x-button></a>
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
  .forgotpassword  a {
    color:#000000;
  }

</style>
<script>
  import { Selector, PopupPicker, XInput, Group, XButton, Cell, Box } from '../components'
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
        this.txtSubmit = '正在提交'
        this.submitdisable = true
        var me = this
        var data = {
          phone: this.txtmobile,
          password: this.txtpwd
        }
        this.$http.post('/applogin', data).then(function (response) {
          console.log(response.data)
          var result = response.data
          if (result.msgcode) {
            localStorage['APP_SUCCESS'] = result.data
            this.$vux.alert.show({content: '登录成功！'})
            if (me.$route.query.id) {
              history.back(-1)
              return
            }
            me.$router.go(
              {
                path: result.data && result.data.realName ? '/myreport' : '/personinfo',
                params: null
              }
            )
            return
          }
          this.submitdisable = false
          this.$vux.alert.show({content: '用户名或密码错误！'})
        }, function () {
        })
      }
    }
  }
</script>
