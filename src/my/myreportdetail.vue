<template>
  <div>
    <!--<header-component/>-->
    <div class="myreport-info">
      <div class="success"><icon type="success" class="icon_big"></icon>患者确认就诊</div>

      <div class="arrange">
        <span>就诊安排：</span>
        <br/>
        <span>已安排高新患者于2015年02月12日201诊室就诊</span>

      </div>


    </div>

    <group>
        <cell title="高新&nbsp;&nbsp;女&nbsp;&nbsp;25" value="18611043925"></cell>
    </group>
        <div class="myreport-title">基本诊断：</div>
        <div class="myreport-content">
          1.需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……
          <br/>2.需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……
          <br/>3.需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……
          <br/>4.需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……
          <img   src="http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg"  >
          <img   src="http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg" >
          <img   src="http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg" >

        </div>


    <!--<other-component/>-->
  </div>
</template>
<style>
  body{

  }
</style>
<script>
  import { Selector, PopupPicker, XInput, Group, XButton, Cell, Box, Icon, Sticky, Tab, TabItem, Swiper, SwiperItem, Card } from '../components'
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
  .myreport-info {
    .success {
      font-size: 1.2rem;
      text-align: center;
      padding: 1rem 0;
      color:#15cc00;
      border-bottom: 1px solid #ebebeb;
    }
    .arrange {
      font-size: 1.0rem;
      padding: 1rem 1rem;
    }
    background: #fff;
  }
  .myreport-title {
    background: #fff;
    width: 100%;
    padding: 1rem 1rem;
    box-sizing: border-box;
  }
  .myreport-content {
    background: #fff;
    width: 100%;
    padding:0 1rem 1rem 1rem;
    box-sizing: border-box;
  }
  .myreport-content  img {
    width: 100%;
  }

</style>
