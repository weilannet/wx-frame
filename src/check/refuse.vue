<template>
  <div>
    <!--<header-component/>-->

    <!--<cell title="接收新消息通知" value="已启用"></cell>-->

    <group title="">

      <x-textarea :max="120" placeholder="请输入拒绝理由"  :height="250"></x-textarea>

    </group>

    <box gap="30px 10px">
      <a v-link="{ path: '/checkreceivetip' }"><x-button  :text="submit001"  type="primary" @click="processButton001">确定</x-button></a>
    </box>

    <!--<other-component/>-->
  </div>
</template>
<style>
  body{

  }
</style>
<script>
  import { XTextarea, Datetime, Selector, PopupPicker, XInput, Group, XButton, Cell, Box, Icon } from '../components'
  export default {
    ready () {
    },
    components: {
      XTextarea,
      Datetime,
      Selector,
      PopupPicker,
      XInput,
      XButton,
      Group,
      Cell,
      Box,
      Icon
    },
    data () {
      return {
        value: '',
        title1: '选择组别',
        title2: '安排诊室',
        value1: ['眼底组'],
        value2: ['201'],
        list1: [['眼底组', '青光眼组', '眼外伤组']],
        list2: [['201', '202', '203', '204', '205', '206']],
        value5: ''
      }
    },
    methods: {
      change (value) {
        console.log('change', value)
      },
      onChange (val) {
        console.log(val)
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      },
      logHide (str) {
        console.log('on-hide', str)
      },
      logShow (str) {
        console.log('on-show')
      },
      processButton001 () {
        this.submit001 = '正在提交'
        this.disable001 = true
      }
    }
  }
</script>
