<template>
  <div>
     
    <!--<div><icon type="info"></icon>以下信息仅认证使用，不会公开</div>-->
    <group title="以下信息仅认证使用，不会公开">
      <a v-link="{ path: '/myphone' }">
      <cell title="手机号码" :value.sync="model.phone"></cell>
       </a>
      <x-input text-align="right" title="姓名" name="username" :value.sync="model.realName" placeholder="请输入姓名" is-type="china-name" required v-ref:inputname></x-input>

      <address :title="titlecity" :value.sync="txtaddress" raw-value :list="addressData"></address>

      <x-input title="医院" text-align="right" name="username" :value.sync="model.hospital" placeholder="请务必填写正确的医院名称" is-type="china-name" required
        v-ref:inputhospital></x-input>

      <popup-picker :title="titledepart" :data="lstdepart" :value.sync="txtdepart" @on-show="onShow" @on-hide="onHide"></popup-picker>
      <popup-picker :title="titleprofessor" :data="lstprofessor" :value.sync="txtprofessor" @on-show="onShow" @on-hide="onHide"></popup-picker>

    </group>

    <group title="需要会议资料需要填写以下信息">
      <cell title="邮寄地址" value=""></cell>
      <x-textarea :max="50" :value.sync="model.address" placeholder="请输入邮寄地址..." :show-counter="true" :height="60" :rows="8"
        :cols="30" ></x-textarea>
    </group>

    <box gap="30px 10px">
      <x-button :disabled="submitdisable" :text="txtsubmit" type="primary" @click="btnSubmit"></x-button>
    </box>

    <!--<box gap="30px 10px">
      <a v-link="{ path: '/updatepassword' }">
        <x-button text="修改密码" plain type="primary"></x-button>
      </a>
    </box>-->

        <box gap="30px 10px">
      <x-button text="退出登录" plain  type="primary"  @click="btnLoginout"></x-button>
    </box>

    <!--<other-component/>-->
  </div>
</template>
<style>
  body {}
</style>
<script>
  import { Selector, PopupPicker, XInput, Group, XButton, Cell, Box, Icon, Address, AddressChinaData, XTextarea } from '../components'
  const _ = require('underscore');
  var ajaxHelper = require('../libs/ajax');
  const middleWare = require('../libs/middleware');
  import validlib from '../libs/validate';

  export default {
    created () {
      var me = this
      document.title = '身份认证'
      ajaxHelper.sendAjax(
        [ajaxHelper.createAjax('/getUserInfo'),
        ajaxHelper.createAjax('/getCateList', {category: '科室'}),
        ajaxHelper.createAjax('/getCateList', {category: '职称'})],
        function (userData, departData, professorData) {
           
          userData = (typeof userData === 'string') ? JSON.parse(userData) : userData;
          departData = (typeof departData === 'string') ? JSON.parse(departData) : departData;
          professorData = (typeof professorData === 'string') ? JSON.parse(professorData) : professorData;
          Object.assign(me.model, userData.data);

          me.txtaddress = [
            !me.model.province ? '110000' : me.model.province,
            !me.model.city ? '110100' : me.model.city,
            !me.model.area ? '110101' : me.model.area
          ];

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
      Selector,
      PopupPicker,
      XInput,
      XButton,
      Group,
      Cell,
      Box,
      Icon,
      Address,
      AddressChinaData,
      XTextarea
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
          area: '',
          address: ''
        },
        addressData: AddressChinaData,
        titlecity: '城市',
        titledepart: '科室',
        titleprofessor: '职称',
        txtsubmit: '保存',
        submitdisable: false,
        txtdepart: ['请选择科室'],
        txtprofessor: ['请选择职称'],
        txtaddress: ['北京市', '北京市市辖区', '朝阳区'],
        ajaxdepartData: null,
        ajaxprofessorData: null,
        lstdepart: [['请选择科室']],
        lstprofessor: [['请选择职称']]
      }
    },
    methods: {
      onShow () {
        console.log('on show');
      },
      onHide (type) {
        console.log('on hide', type);
      },
      btnLoginout () {
        middleWare.exitLogin();
        var me = this;
        setTimeout(function () {
          me.$router.go(
            {
              path: '/login',
              params: null
            }
          )
        },500);
         
      },
      btnSubmit () {
        if (!validlib(this)) {
          return;
        }
        if (this.txtdepart[0] === '请选择科室') {
          this.$vux.toast.show({ text: '请选择科室!', type: 'text', time: 1000, width: '20em' });
          return;
        }
        if (this.txtprofessor[0] === '请选择职称') {
          this.$vux.toast.show({ text: '请选择职称！', type: 'text', time: 1000, width: '20em' });
          return;
        }
        this.txtsubmit = '正在提交';
        this.submitdisable = true;
        // model
          
        this.model.department = _.where(this.ajaxdepartData, {title: this.txtdepart[0]})[0]._id;
        this.model.position = _.where(this.ajaxprofessorData, {title: this.txtprofessor[0]})[0]._id;
        this.model.province = this.txtaddress[0];
        this.model.city = this.txtaddress[1];
        this.model.area = this.txtaddress[2];
        this.$http.post('/updateInfo', this.model).then(function (response) {
          var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data;
          this.submitdisable = false;
          this.txtsubmit = '保存';
          this.$vux.alert.show({content: result.message});
          // this.$router.go(
          //   {
          //     path: '/',
          //     params: null
          //   }
          // )
        }, function () {
        })
      }
    }
  }
</script>