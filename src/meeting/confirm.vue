<template>
  <div>


    <group>
      <cell title="手机号" value="186****3925"></cell>
      <cell title="姓名" value="高新"></cell>
      <cell title="城市" value="北京市 朝阳区"></cell>
      <cell title="医院" value="北京市人民医院"></cell>
      <cell title="科室" value="眼科"></cell>
      <cell title="职称" value="主治医师"></cell>

    </group>

    <div class="confirmfont">
      <div><icon type="info"></icon>请确保以上信息真实有效，该信息将作为报名此会议的唯一凭证</div>
      <a v-link="{ path: '/personinfo' }">修改个人信息</a>
    </div>
    <box gap="30px 10px">
      <a v-link="{ path: '/result' }"><x-button  :text="submit001"  type="primary" @click="processButton001">确认报名</x-button></a>
    </box>

    <!--<other-component/>-->
  </div>
</template>
<style>
  body{

  }
</style>
<script>
  import { Selector, PopupPicker, XInput, Group, XButton, Cell, Box, Icon, XTextarea } from '../components'
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
      XTextarea
    },
    data () {
      return {
        value: '',
        title1: '性别',
        value1: ['女'],
        list1: [['男', '女']]
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
      processButton001 () {
        this.submit001 = '正在提交'
        this.disable001 = true
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
