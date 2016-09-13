<template>
  <div>
    <!--<header-component/>-->

    <group title="">
      <x-input title="手机号码" name="mobile" :value.sync="txtmobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>
    <group title="">

      <x-input title="验证码" class="weui_vcode" >
        <x-button slot="right" type="primary" :disabled="codedisable" @click="codeClick" :text="codevalue"></x-button>
      </x-input>

    </group>

    <box gap="30px 10px">
      <x-button  :text="submittext"  :disabled="submitdisable" type="primary" @click="btnSubmit"></x-button>
    </box>

    <!--<other-component/>-->
  </div>
</template>
<style>
  .forgotpassword {
    text-align: center;
  }

</style>
<script>
  import { XInput, Group, XButton, Cell, Box, Icon } from '../components'
  export default {
    created () {
      document.title = '修改手机号'
    },
    ready () {
    },
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      Box,
      Icon
    },
    data () {
      return {
        submittext: '保存',
        submitdisable: false,
        codevalue: '获取验证码',
        origintime: 60,
        time: 60,
        codedisable: false,
        txtmobile: '',
        txtpwd: '',
        txtpwd2: '',
        showToast: false
      }
    },
    methods: {
      change (val) {
        this.codevalue = val + '秒后再获取'
      },
      btnSubmit () {
        this.submittext = '正在提交'
        this.submitdisable = true
        var data = {
          phone: this.txtmobile
        }
        this.$http.post('/updateInfo', data).then(function (response) {
          console.log(response.data)
          var result = response.data && JSON.parse(response.data)
          this.submitdisable = false
          this.submittext = '保存'
          this.$vux.alert.show({content: result.msg})
        }, function () {
        })
      },
      finish (index) {
        if (this.interval) {
          clearInterval(this.interval)
        }
        this.codevalue = '获取验证码'
        this.codedisable = false
        this.time = this.origintime
      },
      pwdChange (val) {
        console.log(val)
        this.txtpwd2 = ''
      },
      codeClick () {
        this.codedisable = true
        let _this = this
        this.interval = setInterval(function () {
          if (_this.time > 0) {
            _this.change(_this.time--)
          } else {
            _this.finish()
          }
        }, 1000)
      }
    }
  }
</script>
<style scoped>
  .weui_cell_ft .weui_btn {
    margin-left: 5px;
    vertical-align: middle;
    display: inline-block;
  }
  .weui_vcode .weui_btn {
    width: auto;
  }
</style>
