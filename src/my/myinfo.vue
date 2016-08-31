<template>
  <div>

    <group title="">

      <x-input title="手机号码" name="mobile" :value.sync="txtmobile" placeholder="请输入手机号" keyboard="number" is-type="china-mobile"></x-input>
      <x-input title="姓名" name="username" :value.sync="txtname" placeholder="请输入姓名" is-type="china-name"></x-input>


      <address :title="titlecity" :value.sync="txtaddress" raw-value :list="addressData"></address>

      <x-input title="医院" name="hospital" :value.sync="txthospital" placeholder="请输入医院名称" is-type="china-name"></x-input>

      <popup-picker :title="titledepart" :data="lstdepart" :value.sync="txtdepart" @on-show="onShow" @on-hide="onHide" @change="onChange"></popup-picker>
      <popup-picker :title="titleprofessor" :data="lstprofessor" :value.sync="txtprofessor" @on-show="onShow" @on-hide="onHide" @change="onChange"></popup-picker>

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
  import { PopupPicker, XInput, Group, XButton, Cell, Box, Icon, Address, AddressChinaData } from '../components'
  export default {
    ready () {
      this.txtmobile = '186****3925'
      this.txtname = '高新'
      this.txthospital = '人民医院'
    },
    components: {
      PopupPicker,
      XInput,
      XButton,
      Group,
      Cell,
      Box,
      Icon,
      Address
    },
    data () {
      return {
        addressData: AddressChinaData,
        txtmobile: '',
        txtname: '',
        txthospital: '',
        titledepart: '科室',
        titleprofessor: '职称',
        txtdepart: ['眼底科'],
        txtprofessor: ['主治医师'],
        lstdepart: [['眼底科', '青光眼科', '眼外伤科']],
        lstprofessor: [['主治医师', '主任医师', '副主任医师']],
        txtaddress: ['广东省', '深圳市', '南山区'],
        titlecity: '城市',
        submittext: '保存',
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
      logHide (str) {
        console.log('on-hide', str)
      },
      logShow (str) {
        console.log('on-show')
      },
      btnSubmit () {
        this.submittext = '正在提交'
        this.submitdisable = true
      }
    }
  }
</script>
<style>
  .weui_input {
    text-align: right;
  }
</style>
