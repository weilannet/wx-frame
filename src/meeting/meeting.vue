<template>

    <!--<header-component/>-->
   <div class="meeting">

     <div class="meeting-title">
       大忙人，你的早餐上黑名单了吗？
     </div>
     <div class="meeting-date">
       2016-08-13
     </div>

     <div class="meeting-content">1.需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……
       <br/>2.需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……
       <br/>3.需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……
       <br/>4.需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理，需要治疗，病情进一步处理……
       <img   src="http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg"  >
       <img   src="http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg" >
       <img   src="http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg" >

     </div>
     <box  class="meeting-sign">
       <a v-link="{ path: '/' }"><x-button  text="报名参加"  type="primary" @click="btnClick"></x-button></a>
     </box>
   </div>



</template>
<script>
  import { XButton, Box } from '../components'
  export default {
    ready () {
    },
    components: {
      XButton,
      Box
    },
    data () {
      return {
      }
    },
    methods: {
      btnClick () {
        console.log('click')
      }
    }
  }
</script>
<style lang="less">
  @import '../styles/1px.less';

  .meeting {
    .meeting-title {
       font-size: 1.2rem;
    }
    .meeting-date {
       color:#ccc;
    }
    .meeting-content {
      width: 100%;
      img { width: 100%; }
    }
    background: #fff;
    width: 100%;
    padding: 1rem 1rem;
    box-sizing: border-box;
  }
  .meeting-sign {
    width: 100%;
    height:2.6rem;
    position: fixed;
    bottom:0
  }

</style>
