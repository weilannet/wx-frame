<template>
  <div>
    <!--<header-component/>-->
    <div class="myreport-info">

      <div class="success">
        <div v-show="model.state==0">
          <icon type="info" class="icon_big"></icon>待处理</div>
        <div v-show="model.state==1">
          <icon type="info" class="icon_big"></icon>接收</div>
        <div v-show="model.state==2">
          <icon type="warn" class="icon_big"></icon>拒绝</div>
        <div v-show="model.state==3">
          <icon type="success" class="icon_big"></icon>患者确认就诊</div>
        <div v-show="model.state==4">
          <icon type="info" class="icon_big"></icon>患者爽约</div>
      </div>

      <div class="arrange">
        <span>{{ model.state === 2?'拒绝理由:':'就诊安排：'}}  </span>
        <br/>
        <span>{{template===''?'无':template}}</span>
      </div>

    </div>

    <group class="myreport-item">
      <cell :title="model.realName+'&nbsp;&nbsp;'+(model.sex==1?'男':'女')+'&nbsp;&nbsp;'+model.age">{{model.phone}}</cell>
    </group>
    <div class="myreport-title">基本诊断：</div>
    <div class="myreport-content">
      {{ model.checkInfo }}

      <div class="check-imglist" v-for="(index, item) in model.imagesPath" track-by="Math.random()*1000">
        <span class="imgloading" style="font-size:20px;">加载中</span>
        <x-img :src="item.src" width="100%" @click="$refs.previewer.show(index)" @on-success="success" @on-error="error" class="ximg-demo previewer-demo-img"
          error-class="ximg-error" :offset="-100"></x-img>
        <!--<img class="previewer-demo-img" v-for="(index, item) in images" :src="item.src" width="100%" @click="$refs.previewer.show(index)">-->
        <previewer :list="model.imagesPath" v-ref:previewer :options="options"></previewer>
      </div>

      <!--<img class="previewer-demo-img" v-for="(index, item) in model.imagesPath" :src="item.src" width="100%" @click="$refs.previewer.show(index)">
      <previewer :list="model.imagesPath" v-ref:previewer :options="options"></previewer>-->
      <!--<div v-for="item in model.imagesPath" track-by="$index">
        <img :src="item" alt="" />
      </div>-->
    </div>

    <!--<other-component/>-->
  </div>
</template>
<style>
  body {}
</style>
<script>
  import { XImg, Group, Cell, Icon, Previewer } from '../components'
  export default {
    created () {
      document.title = '病历详情'
      Object.assign(this.model, this.$route.query)
      this.$http.post('/getPatientInfo', {_id: this.model._id}).then(function (response) {
        var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
        if (result.status) {
          Object.assign(this.model, result.data)
          if (this.model.imagesPath && this.model.imagesPath.length > 0) {
            
            this.model.imagesPath = this.model.imagesPath.map(function(item) {
              return { w: 300, h: 300, src:item };
            });
          }
          this.model.state = parseInt(this.model.state)
          switch (this.model.state) {
            case 0:
              this.template = '该病人信息还未处理'
              break
            case 1:
            case 3:
            case 4:
              this.template = `已安排${this.model.realName}患者于${this.model.bookTime}在${this.model.categoryRoom}诊室就诊！`
              break
            case 2:
              this.template = this.model.refuseInfo && this.model.refuseInfo || ''
              break
          }
        } else {
          this.$vux.alert.show({content: result.message})
        }
      })
    },
    ready () {
    },
    components: {
      XImg,
      Group,
      Cell,
      Icon,
      Previewer
    },
    data () {
      return {
        template: '',
        model: {
          id: '',
          realName: '',
          sex: 0,
          age: 0,
          state: 0,
          checkInfo: '',
          imagesPath: [],
          phone: '',
          bookTime: '',
          catetoryRoom: '',
          refuseInfo: ''
        },
        options: {
          getThumbBoundsFn (index) {
            // find thumbnail element
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index];
            // get window scroll Y
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
            // optionally get horizontal scroll
            // get position of element relative to viewport
            let rect = thumbnail.getBoundingClientRect();
            // w = width
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
            // Good guide on how to get element coordinates:
            // http://javascript.info/tutorial/coordinates
          }
        }
      }
    },
    methods: {
      error (src, ele, msg) {
        console.log('error load', msg, src)
        const span = ele.parentNode.querySelector('.imgloading')
        span.innerText = 'load error'
      },
      success (src, ele) {
        console.log('success load', src)
          
        const span = ele.parentNode.querySelector('.imgloading')
        ele.parentNode.removeChild(span)
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
      color: #15cc00;
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
    padding: 0 1rem 1rem 1rem;
    box-sizing: border-box;
  }
  
  .myreport-content img {
    width: 100%;
  }
  
  .pswp__img {
    position: absolute;
    width: 100% !important;
    height: auto !important;
    top: 0;
    left: 0;
  }

  .ximg-demo {
    width: 100%;
    height: auto;
  }
  
  .ximg-error {
    background-color: yellow;
  }
  
  .ximg-error:after {
    content: '加载失败';
    color: red;
  }
  
  .imgloading {
    display: block;
    width: 100%;
    text-align: center;
  }
</style>