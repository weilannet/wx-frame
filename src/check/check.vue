<template>
  <div>

    <group>
      <cell title="高新&nbsp;&nbsp;女&nbsp;&nbsp;25" value="18611043925"></cell>

    </group>
    <div class="check-title">基本诊断：</div>
    <div class="check-content">
      1.需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……
      <br/>2.需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……
      <br/>3.需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……
      <br/>4.需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……

    </div>
    <div class="check-imglist">
      <img   src="http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg"  >
      <img   src="http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg" >
      <img   src="http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg" >
    </div>



    <div class="check-button">
    <flexbox>
      <flexbox-item>
        <a v-link="{ path: '/checkreceive' }"><x-button type="primary">接收</x-button></a>
      </flexbox-item>
      <flexbox-item>
        <a v-link="{ path: '/checkrefuse' }"><x-button type="warn">拒绝</x-button></a>
      </flexbox-item>
    </flexbox>
    </div>

    <!--<other-component/>-->
  </div>
</template>
<style>
  body {

  }
</style>
<script>
  import { Selector, PopupPicker, XInput, Group, XButton, Cell, Box, Icon, Flexbox, FlexboxItem } from '../components'
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
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        value: '',
        index: 0,
        list: [{
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
        },
        {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }],
        options: {
          getThumbBoundsFn (index) {
            // find thumbnail element
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
            // get window scroll Y
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            // optionally get horizontal scroll
            // get position of element relative to viewport
            let rect = thumbnail.getBoundingClientRect()
            // w = width
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
            // Good guide on how to get element coordinates:
            // http://javascript.info/tutorial/coordinates
          }
        }
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
  .check-title {
    background: #fff;
    width: 100%;
    padding: 1rem 1rem;
    box-sizing: border-box;
  }
  .check-content {

    background: #fff;
    width: 100%;
    padding: 0rem 1rem 1rem 1rem;
    box-sizing: border-box;
  }
  .check-imglist {
    width: 100%;
    img { width: 100%; }
  }
   .check-button {
     width: 100%;
     height:2.6rem;
     position: fixed;
     bottom:0
   }
</style>
