<template>
  <div>
    <group>
      <cell :title="model.realName+'&nbsp;&nbsp;'+(model.sex==1?'男':'女')+'&nbsp;&nbsp;'+model.age" :value="model.phone"></cell>
    </group>
    <div class="check-title">基本诊断：</div>
    <div class="check-content">
      {{ model.checkInfo }}
    </div>
    
    <div class="check-imglist" v-for="(index, item) in images" track-by="Math.random()*1000">
      <span class="imgloading" style="font-size:20px;">加载中</span>
      <x-img :src="item.src" width="100%" @click="$refs.previewer.show(index)" @on-success="success" @on-error="error" class="ximg-demo previewer-demo-img"
        error-class="ximg-error" :offset="-100"></x-img>
      <!--<img class="previewer-demo-img" v-for="(index, item) in images" :src="item.src" width="100%" @click="$refs.previewer.show(index)">-->
      <previewer :list="images" v-ref:previewer :options="options"></previewer>
    </div>

    <div class="check-button" v-show="!disablerefuse">
      <flexbox>
        <flexbox-item>
          <x-button :disabled="disablepass" type="primary" @click="btnPass">接收</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button :disabled="disablerefuse" type="warn" @click="btnRefuse">拒绝</x-button>
        </flexbox-item>
      </flexbox>
    </div>

    <!--<other-component/>-->
  </div>
</template>
<style>
  body {}
</style>
<script>
  import { XImg, Selector, PopupPicker, XInput, Group, XButton, Cell, Box, Icon, Flexbox, FlexboxItem, Previewer } from '../components'
  export default {
    created () {
      document.title = '病历审核';
      Object.assign(this.model, this.$route.query);
      this.$http.post('/getPatientInfo', {_id: this.model._id, check: true}).then(function (response) {
        var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data;
        if (result.status) {
          Object.assign(this.model, result.data);
          if (this.model.imagesPath && this.model.imagesPath.length > 0) {
            this.images = this.model.imagesPath.map(function(item) {
              return { w: 300, h: 300, src:item };
            });
            this.disablepass = false;
            this.disablerefuse = false;
          }
          if (this.model.state > 0) {
            this.$vux.toast.show({text: '该患者已被其他医生审核！', type: 'text', time: 1000, width: '20em'});
            this.disablepass = true;
            this.disablerefuse = true;
          }
        } else {
          this.$vux.alert.show({content: result.message});
          this.disablepass = true;
          this.disablerefuse = true;
        }
      }, function () {
      })
    },
    ready () {
    },
    components: {
      XImg,
      Selector,
      PopupPicker,
      XInput,
      XButton,
      Group,
      Cell,
      Box,
      Icon,
      Flexbox,
      FlexboxItem,
      Previewer
    },
    data () {
      return {
        model: {
          _id: '',
          realName: '',
          sex: 0,
          age: 0,
          state: 0,
          checkInfo: '',
          imagesPath: [],
          phone: '',
          categoryEyes: ''
        },
        images: [],
        disablepass: false,
        disablerefuse: false,
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
      btnPass () {
        if (!this.model._id) {
          this.$vux.alert.show({content: '此病人不存在或已被审核！'})
          return
        }
        this.$router.go(
          {
            path: '/checkreceive',
            query: {_id: this.model._id, categoryEyes: this.model.categoryEyes}
          }
        )
      },
      btnRefuse () {
        if (!this.model._id) {
          this.$vux.alert.show({content: '此病人不存在或已被审核！'})
          return
        }
        this.$router.go(
          {
            path: '/checkrefuse',
            query: {_id: this.model._id}
          }
        )
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
    img {
      width: 100%;
    }
  }
  
  .check-button {
    width: 100%;
    height: 2.6rem;
    position: fixed;
    bottom: 0
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