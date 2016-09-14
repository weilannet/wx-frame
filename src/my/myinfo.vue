<template>
  <div>
    <!--<header-component/>-->

    <!--<cell title="接收新消息通知" value="已启用"></cell>-->
    <div><icon type="info"></icon>以下信息仅认证使用，不会公开</div>
    <group title="">
      <cell title="手机号码" :value.sync="model.phone"></cell>
      <x-input title="姓名" name="username" :value.sync="model.realName" placeholder="请输入姓名" is-type="china-name"></x-input>

      <address :title="titlecity" :value.sync="txtaddress" raw-value :list="addressData"></address>

      <x-input title="医院" name="username" :value.sync="model.hospital" placeholder="请务必填写正确的医院名称" is-type="china-name"></x-input>

      <popup-picker :title="titledepart" :data="lstdepart" :value.sync="txtdepart" @on-show="onShow" @on-hide="onHide"></popup-picker>
      <popup-picker :title="titleprofessor" :data="lstprofessor" :value.sync="txtprofessor" @on-show="onShow" @on-hide="onHide"></popup-picker>

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
  var ajaxHelper = require('../libs/ajax')
  export default {
    created () {
      var me = this
      document.title = '身份认证'
      ajaxHelper.sendAjax(
        [ajaxHelper.createAjax('/getUserInfo'),
        ajaxHelper.createAjax('/getCateList', {category: 'depart'}),
        ajaxHelper.createAjax('/getCateList'), {category: 'professor'}],
        function (userData, departData, professorData) {
          userData = userData && JSON.parse(userData)
          departData = departData && JSON.parse(departData)
          professorData = professorData && JSON.parse(professorData)
 
          Object.assign(me.model, userData.data)
          me.lstdepart = [['眼底科1', '青光眼科1', '眼外伤科1']]
          me.lstdepart[0].unshift('请选择科室')
          me.lstprofessor = [['主治医师1', '主任医师1', '副主任医师1']]
          me.lstprofessor[0].unshift('请选择职称')
          me.txtaddress = [
            !me.model.province ? '110000' : me.model.province,
            !me.model.city ? '110100' : me.model.city,
            !me.model.area ? '110101' : me.model.area
          ]
          me.txtdepart = [!me.model.department ? '请选择科室' : me.lstdepart[0][me.model.department]]
          me.txtprofessor = [!me.model.position ? '请选择职称' : me.lstprofessor[0][me.model.position]]
          // console.log(userData)
          // console.log(departData)
          // console.log(professorData)
        }
      )
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
          department: 0,
          position: 0,
          phone: '',
          province: '',
          city: '',
          area: ''
        },
        addressData: AddressChinaData,
        titlecity: '城市',
        titledepart: '科室',
        titleprofessor: '职称',
        txtsubmit: '保存',
        submitdisable: false,
        txtdepart: ['眼底科'],
        txtprofessor: ['主治医师'],
        txtaddress: ['北京市', '北京市市辖区', '朝阳区'],
        lstdepart: [['眼底科', '青光眼科', '眼外伤科']],
        lstprofessor: [['主治医师', '主任医师', '副主任医师']]
      }
    },
    methods: {
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      },
      btnSubmit () {
        var me = this
        this.txtsubmit = '正在提交'
        this.submitdisable = true
        // model
        this.model.department = this.lstdepart[0].indexOf(this.txtdepart[0])
        this.model.position = this.lstprofessor[0].indexOf(this.txtprofessor[0])
        this.model.province = this.txtaddress[0]
        this.model.city = this.txtaddress[1]
        this.model.area = this.txtaddress[2]
        this.$http.post('/updateInfo', this.model).then(function (response) {
          console.log(response.data)
          var result = response.data && JSON.parse(response.data)
          this.submitdisable = false
          this.txtsubmit = '保存'
          this.$vux.alert.show({content: result.msg})
          if (result.msgcode) {
            setTimeout(function () {
              me.$router.go(
                {
                  path: '/myreport',
                  params: null
                }
              )
            }, 500)
          }
        }, function () {
        })
      }
    }
  }
</script>
