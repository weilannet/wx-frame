<template>
  <div>
    <group>
      <cell title="手机号" :value.sync="model.phone"></cell>
      <cell title="姓名" :value.sync="model.realName"></cell>
      <cell title="城市" :value="getName(txtaddress)"></cell>
      <cell title="医院" :value.sync="model.hospital"></cell>
      <cell title="科室" :value.sync="txtdepart"></cell>
      <cell title="职称" :value.sync="txtprofessor"></cell>
      
    </group>

    <div class="confirmfont">
      <div><icon type="info"></icon>请确保以上信息真实有效，该信息将作为报名此会议的唯一凭证</div>
      <a v-link="{ path: '/myinfo' }">修改个人信息</a>
    </div>
    <box gap="30px 10px">
      <x-button :disabled="submitdisable"  :text="txtsubmit"  type="primary" @click="btnSubmit"></x-button>
    </box>

    <!--<other-component/>-->
  </div>
</template>
<style>
  body{

  }
</style>
<script>
  import { XButton, Group, Cell, Box, Icon, Selector, PopupPicker, Address, AddressChinaData } from '../components'
  import value2name from '../filters/value2name'
  var ajaxHelper = require('../libs/ajax')
  
  export default {
    created () {
      document.title = '确认报名'
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
          me.txtdepart = [!me.model.department ? '未设置科室' : me.lstdepart[0][me.model.department]]
          me.txtprofessor = [!me.model.position ? '未设置职称' : me.lstprofessor[0][me.model.position]]
          // console.log(userData)
          // console.log(departData)
          // console.log(professorData)
        }
      )
    },
    ready () {
    },
    components: {
      XButton,
      Group,
      Cell,
      Box,
      Icon,
      Selector,
      PopupPicker,
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
        txtsubmit: '确认报名',
        submitdisable: false,
        txtdepart: ['眼底科'],
        txtprofessor: ['主治医师'],
        txtaddress: ['110000', '110100', '110101'],
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
        console.log(me.$route.query.meetingId)
        this.txtsubmit = '正在提交'
        this.submitdisable = true
        this.$http.post('/signMeeting', { meetingId: me.$route.query.meetingId }).then(function (response) {
          console.log(response.data)
          var result = response.data && JSON.parse(response.data)
          this.submitdisable = false
          if (!result.msgcode) {
            this.$vux.alert.show({content: result.msg})
            return
          }
          setTimeout(function () {
            me.$router.go(
              {
                path: '/result',
                params: { meetingId: result.data.meetingId, code: result.data.code, title: result.data.title },
                query: { meetingId: result.data.meetingId, code: result.data.code, title: result.data.title }
              }
            )
          }, 500)
        }, function () {
        })
      },
      getName (value) {
        return value2name(value, AddressChinaData)
      }
    }
  }
</script>
<style lang="less">
  @import '../styles/1px.less';
  .confirmfont {
    text-align: center;
    a {
      display: block;
      margin-top: 1rem;
    }
  }
</style>
