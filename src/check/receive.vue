<template>
  <div>
    <!--<header-component/>-->

    <!--<cell title="接收新消息通知" value="已启用"></cell>-->

    <group title="">

      <popup-picker :title="title1" :data="list1" :value.sync="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
      <popup-picker :title="title2" :data="list2" :value.sync="value2" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
      <datetime :value.sync="value5" placeholder="请选择日期" :min-year=2000 :max-year=2016 format="YYYY-MM-DD HH:mm" @on-change="change" title="预约时间" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
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
  import { Datetime, Selector, PopupPicker, XInput, Group, XButton, Cell, Box, Icon } from '../components'
  export default {
    ready () {
    },
    components: {
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
