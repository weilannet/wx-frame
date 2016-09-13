<template>
  <div>
    <!--<header-component/>-->

    <!--<cell title="接收新消息通知" value="已启用"></cell>-->
    <div><icon type="info"></icon>以下信息仅认证使用，不会公开</div>
    <group title="">
      <x-input title="姓名" name="username" :value.sync="model.realName" placeholder="请输入姓名" is-type="china-name"></x-input>

      <address :title="titlecity" :value.sync="txtaddress" raw-value :list="addressData"></address>

      <x-input title="医院" name="username" :value.sync="model.hospital" placeholder="请务必填写正确的医院名称" is-type="china-name"></x-input>

      <popup-picker :title="titledepart" :data="lstdepart" :value.sync="txtdepart" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
      <popup-picker :title="titleprofessor" :data="lstprofessor" :value.sync="txtprofessor" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>

    </group>

      <box gap="30px 10px">
        <x-button  :disabled="submitdisable" :text="txtsubmit"  type="primary" @click="btnSubmit"></x-button>

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
    created () {
      document.title = '身份认证'
      Object.assign(this.model, this.$route.query)
      this.lstdepart = [['眼底科', '青光眼科', '眼外伤科']]
      this.lstprofessor = [['主治医师', '主任医师', '副主任医师']]
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
      Box,
      Icon,
      Address,
      AddressChinaData
    },
    data () {
      return {
        model: {
          id: '',
          realName: '',
          hospital: '',
          deparment: 0,
          position: 0,
          phone: '',
          province: ''
        },
        addressData: AddressChinaData,
        titlecity: '城市',
        titledepart: '科室',
        titleprofessor: '职称',
        txtsubmit: '完成',
        submitdisable: false,
        txtdepart: ['眼底科'],
        txtprofessor: ['主治医师'],
        txtaddress: ['北京市', '北京市市辖区', '朝阳区'],
        lstdepart: null,
        lstprofessor: null
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
        this.txtsubmit = '正在提交'
        this.submitdisable = true
      }
    }
  }
</script>
