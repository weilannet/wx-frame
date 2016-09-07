<template>
  <div>
    <!--<header-component/>-->

    <!--<cell title="接收新消息通知" value="已启用"></cell>-->

    <group title="">
    <x-input title="姓名" name="username" placeholder="请填写患者姓名" is-type="china-name"></x-input>
    <popup-picker :title="title1" :data="list1" :value.sync="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
    <x-input title="年龄" type="text" placeholder="请填写患者年龄"  :min="1" :max="3"></x-input>
    <x-input title="手机号码" name="mobile" placeholder="请填写患者手机号" keyboard="number" is-type="china-mobile"></x-input>
  </group>

    <group>
      <cell title="基本诊断" value=""></cell>
      <x-textarea :max="200" placeholder="请输入诊断信息..." :show-counter="false" :height="200" :rows="8" :cols="30"></x-textarea>
    </group>

    <div class="weui_cells weui_cells_form">
      <div class="weui_cell">
        <div class="weui_cell_bd weui_cell_primary">
          <div class="weui_uploader">
            <div class="weui_uploader_hd weui_cell">
              <div class="weui_cell_bd weui_cell_primary">图片上传</div>
              <div class="weui_cell_ft">0/2</div>
            </div>
            <div class="weui_uploader_bd">
              <ul class="weui_uploader_files">
                <li class="weui_uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
                <li class="weui_uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
                <li class="weui_uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
                <li class="weui_uploader_file weui_uploader_status" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
                  <div class="weui_uploader_status_content">
                    <i class="weui_icon_warn"></i>
                  </div>
                </li>
                <li class="weui_uploader_file weui_uploader_status" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)">
                  <div class="weui_uploader_status_content">50%</div>
                </li>
              </ul>
              <div class="weui_uploader_input_wrp">
                <input class="weui_uploader_input" type="file" accept="image/*" multiple />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <box gap="30px 10px">
        <x-button  :text="submit001"  type="primary" @click="processButton001">完成</x-button>
    </box>
    <toast :show.sync="showToast" :time="1000">上报成功</toast>
    <!--<other-component/>-->
  </div>
</template>
<style lang="less">
  @import '../styles/1px.less';
  @import '../styles/weui/weui.min.css';

</style>
<script>
  import { Toast, Selector, PopupPicker, XInput, Group, XButton, Cell, Box, Icon, XTextarea } from '../components'
  export default {
    ready () {
    },
    components: {
      Toast,
      Selector,
      PopupPicker,
      XInput,
      XButton,
      Group,
      Cell,
      Box,
      Icon,
      XTextarea
    },
    data () {
      return {
        value: '',
        title1: '性别',
        value1: ['女'],
        list1: [['男', '女']],
        showToast: false
      }
    },
    methods: {
      created () {
        document.title = '病历上报'
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
      processButton001 () {
        this.submit001 = '正在提交'
        this.disable001 = true
        this.showToast = true
        var that = this
        setTimeout(function () {
          that.$router.go(
            {
              path: '/',
              params: null
            }
          )
        }, 3000)
      }
    }
  }
</script>
