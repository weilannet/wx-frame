<template>
  <div>
    <sticky>
      <tab :line-width=1>
        <tab-item :selected="demo4 === item" v-for="item in list2" @click="demo2 = item">{{item}}</tab-item>
      </tab>
    </sticky>
    <a v-link="{ path: '/myreportdetail' }">
    <group class="myreport-item">
      <cell title="高新&nbsp;&nbsp;女&nbsp;&nbsp;25" value="待处理"></cell>
      <cell title="诊断结果:" value="" ></cell>
      <div class="myreport-content">需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……</div>
    </group>
    </a>
    <a v-link="{ path: '/myreportdetail' }">
      <group>
        <cell title="高新&nbsp;&nbsp;女&nbsp;&nbsp;25" value="待处理"></cell>
        <cell title="诊断结果:" value="" ></cell>
        <div class="myreport-content">需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……</div>
      </group>
    </a>
    <a v-link="{ path: '/myreportdetail' }">
      <group>
        <cell title="高新&nbsp;&nbsp;女&nbsp;&nbsp;25" value="待处理"></cell>
        <cell title="诊断结果:" value="" ></cell>
        <div class="myreport-content">需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……</div>
      </group>
    </a>
    <a v-link="{ path: '/myreportdetail' }">
      <group>
        <cell title="高新&nbsp;&nbsp;女&nbsp;&nbsp;25" value="待处理"></cell>
        <cell title="诊断结果:" value="" ></cell>
        <div class="myreport-content">需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……</div>
      </group>
    </a>
    <a v-link="{ path: '/myreportdetail' }">
      <group>
        <cell title="高新&nbsp;&nbsp;女&nbsp;&nbsp;25" value="待处理"></cell>
        <cell title="诊断结果:" value="" ></cell>
        <div class="myreport-content">需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……</div>
      </group>
    </a>

    <!--<other-component/>-->
  </div>
</template>
<style>
  body{

  }
</style>
<script>
  import { Selector, PopupPicker, XInput, Group, XButton, Cell, Box, Icon, Sticky, Tab, TabItem, Swiper, SwiperItem, Card } from '../components'
  const list = () => ['待处理', '已处理']
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
      Sticky,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Card
    },
    data () {
      return {
        value: '',
        list2: list(),
        index: 0,
        demo2: '待处理'
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
  a {
    color: #000000;
  }
  .vux-sticky {
    position:fixed;
  }
  .myreport-content {
    padding: 0px 15px 15px 15px;
  }
  .weui_cells {
    margin-top: 0.8em;
  }
  .myreport-item{
    margin-top: 2.7em;
  }
  .vux-sticky,.vux-fixed {
    z-index:999;
  }
</style>
