<template>
  <div>
    <!--<header-component/>-->

    <!--<cell title="接收新消息通知" value="已启用"></cell>-->
    <div><icon type="info"></icon>以下信息仅认证使用，不会公开</div>
    <group title="">
      <x-input title="姓名" name="username" :value.sync="txtname" placeholder="请输入姓名" is-type="china-name"></x-input>

      <address :title="titlecity" :value.sync="txtaddress" raw-value :list="addressData"></address>

      <x-input title="医院" name="username" :value.sync="txthospital" placeholder="请务必填写正确的医院名称" is-type="china-name"></x-input>

      <popup-picker :title="titledepart" :data="lstdepart" :value.sync="txtdepart" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
      <popup-picker :title="titleprofessor" :data="lstprofessor" :value.sync="txtprofessor" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>

    </group>

      <box gap="30px 10px">
        <a v-link="{ path: '/' }"><x-button  :disabled="submitdisable" :text="submittext"  type="primary" @click="btnSubmit"></x-button></a>

      </box>

    <!--<other-component/>-->
  </div>
</template>
<style>
  body{

  }
</style>
<script>
  import { Selector, PopupPicker, XInput, Group, XButton, Cell, Box, Icon, Address, AddressChinaData } from '../components'
  export default {
    ready () {
    },
    components: {
      Selector,
      PopupPicker,
      XInput,
      XButton,
      Group,
      Cell,
      Box,
      Icon,
      Address,
      AddressChinaData
    },
    data () {
      return {
        addressData: AddressChinaData,
        txtaddress: ['广东省', '深圳市', '南山区'],
        txtname: '',
        txthospital: '',
        titlecity: '城市',
        titledepart: '科室',
        titleprofessor: '职称',
        txtdepart: ['眼底科'],
        txtprofessor: ['主治医师'],
        lstdepart: [['眼底科', '青光眼科', '眼外伤科']],
        lstprofessor: [['主治医师', '主任医师', '副主任医师']],
        submittext: '完成',
        submitdisable: false
      }
    },
    methods: {
      onChange (val) {
        console.log(val)
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      },
      btnSubmit () {
        this.submittext = '正在提交'
        this.submitdisable = true
      }
    }
  }
</script>
