<template>
  <div>
    <!--<header-component/>-->

    <box gap="20px 10px" class="agreement-title">
       <span>同仁服务协议</span>
    </box>
    <box gap="10px 10px" class="agreement-nav">
    <span>重要须知</span>
    </box>
    <box gap="10px 10px" class="agreement-content">
    <p>北京同仁医院（以下称同仁）在此特别提醒用户认真阅读，充分理解本《服务协议》（下称《协议》）——————用户应认真阅读、充分理解本《协议》中各条款，包括免除或者限制用户责任的免责条款。请您审慎阅读并选择接受或不接受本《协议》，您的注册、登录、使用等行为将视为对本《协议》的接受，并同意接受本《协议》各项条款的约束。</p>
    <p>北京同仁医院（以下称同仁）在此特别提醒用户认真阅读，充分理解本《服务协议》（下称《协议》）——————用户应认真阅读、充分理解本《协议》中各条款，包括免除或者限制用户责任的免责条款。请您审慎阅读并选择接受或不接受本《协议》，您的注册、登录、使用等行为将视为对本《协议》的接受，并同意接受本《协议》各项条款的约束。</p>
    <p>北京同仁医院（以下称同仁）在此特别提醒用户认真阅读，充分理解本《服务协议》（下称《协议》）——————用户应认真阅读、充分理解本《协议》中各条款，包括免除或者限制用户责任的免责条款。请您审慎阅读并选择接受或不接受本《协议》，您的注册、登录、使用等行为将视为对本《协议》的接受，并同意接受本《协议》各项条款的约束。</p>
    <p>北京同仁医院（以下称同仁）在此特别提醒用户认真阅读，充分理解本《服务协议》（下称《协议》）——————用户应认真阅读、充分理解本《协议》中各条款，包括免除或者限制用户责任的免责条款。请您审慎阅读并选择接受或不接受本《协议》，您的注册、登录、使用等行为将视为对本《协议》的接受，并同意接受本《协议》各项条款的约束。</p>
    </box>
    <!--<other-component/>-->
  </div>
</template>
<style>
  .agreement-title {
    text-align: center;
    font-size: 1.4rem;
  }
  .agreement-nav {
    font-size: 1.2rem;
  }
  .agreement-content {
    font-size: 1rem;
  }

</style>
<script>
  import { Selector, PopupPicker, XInput, Group, XButton, Cell, Box } from '../components'
  export default {
    created () {
      document.title = '服务协议'
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
      }
    },
    methods: {
    }
  }
</script>
