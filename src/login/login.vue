<template>
  <div>
    <!--<header-component/>-->

    <group title="">
      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>
    <group title="">
      <x-input title="密码" type="text" placeholder="请输入密码" :value.sync="password" :min="6" ></x-input>
     </group>

      <box gap="30px 10px">
        <a v-link="{ path: '/personinfo' }"><x-button  :text="submit001"  type="primary" @click="processButton001"></x-button></a>
      </box>

      <box gap="10px 10px">
        <a v-link="{ path: '/register' }"><x-button :text="submit002" plain type="primary" @click="processButton002"></x-button></a>
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
        submit001: '登录',
        disable001: false,
        submit002: '注册成为认证医生',
        disable002: false
      }
    },
    methods: {
      onChange (val) {
        console.log(val)
      },
      processButton001 () {
        this.submit001 = '正在提交'
        this.disable001 = true
      },
      processButton002 () {
        this.submit002 = '正在提交'
        this.disable002 = true
      }
    }
  }
</script>
