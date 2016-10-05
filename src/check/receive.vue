<template>
  <div>
    <group title="">
      <popup-picker :title="titledepart" :data="lstdepart" :value.sync="txtdepart" @on-show="onShow" @on-hide="onHide"></popup-picker>
      <popup-picker :title="titleroom" :data="lstrooms" :value.sync="txtroom" @on-show="onShow" @on-hide="onHide"></popup-picker>
      <datetime :value.sync="txtboodTime" placeholder="请选择日期" :min-year=2000 :max-year=2016 format="YYYY-MM-DD HH:mm" @on-change="change" title="预约时间" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
    </group>

    <box gap="30px 10px">
      <x-button :disabled="submitdisable" :text="txtSubmit"  type="primary" @click="btnSubmit"></x-button>
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
  var ajaxHelper = require('../libs/ajax')
  export default {
    created () {
      document.title = '接收病历'
      var me = this
      Object.assign(this.model, this.$route.query)
      // ajax获取类别
      ajaxHelper.sendAjax(
        [ajaxHelper.createAjax('/getCateList', {category: 'depart'}),
        ajaxHelper.createAjax('/getCateList'), {category: 'rooms'}],
        function (departData, roomData) {
          departData = (typeof departData === 'string') ? JSON.parse(departData) : departData
          roomData = (typeof roomData === 'string') ? JSON.parse(roomData) : roomData
          me.lstdepart = [['眼底组1', '青光眼组1', '眼外伤组1']]
          me.lstdepart[0].unshift('请选择组别')
          me.lstrooms = [['2201', '2202', '2203', '2204', '2205', '2206']]
          me.lstrooms[0].unshift('请选择诊室')
        }
      )
    },
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
        model: {
          _id: '',
          categoryEyes: 0,
          categoryRoom: 0,
          bookTime: '',
          state: 0
        },
        titledepart: '选择组别',
        titleroom: '安排诊室',
        txtdepart: ['眼底组'],
        txtroom: ['201'],
        lstdepart: [['眼底组', '青光眼组', '眼外伤组']],
        lstrooms: [['201', '202', '203', '204', '205', '206']],
        txtboodTime: '',
        txtSubmit: '确定',
        submitdisable: false
      }
    },
    methods: {
      change (value) {
        console.log('change', value)
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      },
      btnSubmit () {
        if (!this.model._id) {
          this.$vux.toast.show({text: '此病人不存在或已被审核！', type: 'text', time: 1000, width: '20em'})
          return
        }
        if (!this.lstdepart[0].indexOf(this.txtdepart[0])) {
          this.$vux.toast.show({text: '请选择组别！', type: 'text', time: 1000, width: '20em'})
          return
        }
        if (!this.lstrooms[0].indexOf(this.txtroom[0])) {
          this.$vux.toast.show({text: '请选择诊室！', type: 'text', time: 1000, width: '20em'})
          return
        }
        if (!this.txtboodTime) {
          this.$vux.toast.show({text: '请选择日期！', type: 'text', time: 1000, width: '20em'})
          return
        }
        this.txtSubmit = '正在提交'
        this.submitdisable = true
        var me = this
        this.model.categoryEyes = this.lstdepart[0].indexOf(this.txtdepart[0])
        this.model.categoryRoom = this.lstrooms[0].indexOf(this.txtroom[0])
        this.model.categoryRoomText = this.txtroom[0]
        this.model.bookTime = this.txtboodTime
        this.model.state = 1
        this.$http.post('/updatePatientInfo', this.model).then(function (response) {
          var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
          this.submitdisable = false
          this.txtsubmit = '确定'
          this.$vux.toast.show({text: result.message, type: 'text', time: 1000, width: '20em'})
          if (result.status) {
            setTimeout(function () {
              me.$router.go(
                {
                  path: '/checkreceivetip',
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
