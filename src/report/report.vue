<template>
  <div>
    <group title="">
      <x-input title="姓名" :value.sync="model.realName" placeholder="请填写患者姓名" is-type="china-name" required v-ref:inputname></x-input>
      <popup-picker :title="titleSex" :data="lstSex" :value.sync="txtSex" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
      <x-input title="年龄" :value.sync="model.age" type="text" placeholder="请填写患者年龄" :min="1" :max="100" required v-ref:inputage></x-input>
      <x-input title="手机号码" :value.sync="model.phone" placeholder="请填写患者手机号" keyboard="number" is-type="china-mobile" required v-ref:inputmobile></x-input>
    </group>

    <group>
      <cell title="基本诊断" value=""></cell>
      <x-textarea :max="200" :value.sync="model.checkInfo" placeholder="请输入诊断信息..." :show-counter="false" :height="200" :rows="8"
        :cols="30" required v-ref:inputcontent></x-textarea>
    </group>

    <div class="weui_cells weui_cells_form">
      <div class="weui_cell">
        <div class="weui_cell_bd weui_cell_primary">
          <div class="weui_uploader">
            <div class="weui_uploader_hd weui_cell">
              <div class="weui_cell_bd weui_cell_primary">图片上传</div>
              <div class="weui_cell_ft">{{currentCount}}/{{totalCount}}</div>
            </div>
            <div class="weui_uploader_bd">
              <ul class="weui_uploader_files" v-for="item in images" track-by="$index">
                <li class="weui_uploader_file" :style="'background-image:url('+item+')'">
                  <icon type="clear" @click="closeClick($index)" class="icon_big"></icon>
                </li>
              </ul>
              <div class="weui_uploader_input_wrp">
                <input class="weui_uploader_input" ref="imgUp" type="file" accept="image/*" multiple @change="preImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <box gap="30px 10px">
      <x-button :text="titleSubmit" :disabled="disableSubmit" type="primary" @click="btnSubmit"></x-button>
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
  import validlib from '../libs/validate'
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
        model: {
          realName: '',
          age: '',
          sex: 0,
          phone: '',
          checkInfo: '',
          imagesPath: '',
          imagesName: null
        },
        images: [],
        imageNames: [],
        titleSex: '性别',
        txtSex: ['男'],
        lstSex: [['男', '女']],
        showToast: false,
        titleSubmit: '完成',
        disableSubmit: false,
        totalCount: 9,
        currentCount: 0
      }
    },
    methods: {
      created () {
        document.title = '病历上报'
      },
      onChange (val) {
        this.sex = val
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      },
      btnSubmit () {
        if (!validlib(this)) {
          return
        }
        if (!this.model.checkInfo) {
          this.$vux.toast.show({text: '请输入诊断信息！', type: 'text', time: 1000, width: '20em'})
          return
        }
        this.titleSubmit = '正在提交'
        this.disableSubmit = true
        var me = this
        var imagesAjax = this.images.map(function (value, index) {
          return new Promise(function (resolve, reject) {
            me.$http.post('/imgUpload', {pathName: me.model.realName, imgData: value, imgName: me.imageNames[index]}).then(function (request) {
              if (request.status === 200) {
                resolve(request.data)
              } else {
                reject(Error(request.statusText))
              }
            })
          })
        })
        Promise.all(imagesAjax).then(values => {
          me.model.sex = me.lstSex[0].indexOf(me.txtSex[0])
          me.model.imagesPath = values
          me.model.imagesName = me.imageNames
          me.$http.post('/report', me.model).then(function (response) {
            var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
            this.disableSubmit = false
            this.titleSubmit = '完成'
            this.$vux.alert.show({content: result.msg})
            if (result.msgcode) {
              setTimeout(function () {
                me.$router.go(
                  {
                    path: '/myreport',
                    params: null
                  }
                )
              }, 500)
            }
          })
        })
      },
      closeClick (index) {
        this.images.splice(index, 1)
        this.imageNames.splice(index, 1)
        this.currentCount = this.currentCount - 1
      },
      preImg (event) {
        if (!this.model.realName) {
          this.$vux.alert.show({content: '请先填写病人名称！'})
          return false
        }
        var me = this
        me.currentCount += event.target.files.length
        if (this.currentCount > 9) {
          this.$vux.alert.show({content: '最多可选择9张图片，请重新选择！'})
          me.currentCount = 0
          return false
        }
        var imgArr = Array.prototype.slice.call(event.target.files)
        if (!imgArr && imgArr.length > 0) {
          return
        }
        imgArr.forEach(function (img) {
          // 判断图片格式
          if (!(img.type.indexOf('image') === 0 && img.type && /\.(?:jpg|jpeg|png|gif)$/.test(img.name.toLowerCase()))) {
            me.$vux.alert.show({content: '图片只能是jpg,gif,png'})
            return false
          }
          if (img.size > 1024 * 1024 * 3) {
            me.$vux.alert.show({content: '图片大小不可超过3M'})
            return false
          }
          var reader = new FileReader()
          reader.readAsDataURL(img)
          reader.onload = function (e) {
            me.images.push(e.target.result)
            me.imageNames.push(img.name)
          }
        })
      }
    }
  }
</script>