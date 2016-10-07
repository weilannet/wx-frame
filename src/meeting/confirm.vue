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
  const _ = require('underscore');
  import value2name from '../filters/value2name'
  var ajaxHelper = require('../libs/ajax')

  export default {
    created () {
      document.title = '确认报名'
      var me = this
      document.title = '身份认证'
      ajaxHelper.sendAjax(
        [ajaxHelper.createAjax('/getUserInfo'),
        ajaxHelper.createAjax('/getCateList', {category: '科室'}),
        ajaxHelper.createAjax('/getCateList', {category: '职称'})],
        function (userData, departData, professorData) {
          userData = (typeof userData === 'string') ? JSON.parse(userData) : userData
          departData = (typeof departData === 'string') ? JSON.parse(departData) : departData
          professorData = (typeof professorData === 'string') ? JSON.parse(professorData) : professorData
          Object.assign(me.model, userData.data)
          me.txtaddress = [
            !me.model.province ? '110000' : me.model.province,
            !me.model.city ? '110100' : me.model.city,
            !me.model.area ? '110101' : me.model.area
          ] 

          if (!departData.status || !professorData.status) {
            return;
          }
          //诊室
          me.ajaxdepartData = departData.data;
          me.ajaxdepartData.forEach(function(item) { me.lstdepart[0].push(item.title)});
          //职称
          me.ajaxprofessorData = professorData.data;
          me.ajaxprofessorData.forEach(function(item) { me.lstprofessor[0].push(item.title)});
          
          var existdepart = null;
          if (me.model.department && me.ajaxdepartData.length > 0) {
              existdepart = _.where(me.ajaxdepartData, {_id: me.model.department});
          }
          var existprofessor = null;
          if (me.model.position && me.ajaxprofessorData.length > 0) {
              existprofessor = _.where(me.ajaxprofessorData, {_id: me.model.position});
          }
      
          me.txtdepart = [(!me.model.department || existdepart && existdepart.length ==0) ? '请选择科室' : existdepart[0].title];
          me.txtprofessor = [(!me.model.position || existprofessor && existprofessor.length ==0) ? '请选择职称' : existprofessor[0].title];
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
        txtdepart: ['请选择科室'],
        txtprofessor: ['请选择职称'],
        ajaxdepartData: null,
        ajaxprofessorData: null,
        txtaddress: ['110000', '110100', '110101'],
        lstdepart: [['请选择科室']],
        lstprofessor: [['请选择职称']]
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
          var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
          this.submitdisable = false
          if (!result.status) {
            this.$vux.alert.show({content: result.message})
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
