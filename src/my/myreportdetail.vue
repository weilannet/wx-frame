<template>
  <div>
    <!--<header-component/>-->
    <div class="myreport-info">

      <div class="success">
        <div  v-show="model.state==0"><icon type="info" class="icon_big"></icon>待处理</div>
        <div  v-show="model.state==1"><icon type="info" class="icon_big"></icon>接收</div>
        <div  v-show="model.state==2"><icon type="warn" class="icon_big"></icon>拒绝</div>
        <div  v-show="model.state==3"><icon type="success" class="icon_big"></icon>患者确认就诊</div>
        <div  v-show="model.state==4"><icon type="info" class="icon_big"></icon>患者爽约</div>
      </div>

      <div class="arrange">
        <span>{{ model.state === 2?'拒绝理由:':'就诊安排：'}}  </span>
        <br/>
        <span>{{template===''?'无':template}}</span>
      </div>

    </div>

    <group class="myreport-item">
      <cell :title="model.realName+'&nbsp;&nbsp;'+(model.sex==0?'男':'女')+'&nbsp;&nbsp;'+model.age" >{{model.phone}}</cell>
    </group>
        <div class="myreport-title">基本诊断：</div>
        <div class="myreport-content">
          {{ model.checkInfo }}
          <div  v-for="item in model.imagesPath" track-by="$index">
              <img :src="item" alt="" />
          </div>
        </div>

    <!--<other-component/>-->
  </div>
</template>
<style>
  body{

  }
</style>
<script>
  import { Group, Cell, Icon } from '../components'
  export default {
    created () {
      document.title = '病历详情'
      Object.assign(this.model, this.$route.query)
      this.$http.post('/getPatientInfo', {_id: this.model._id}).then(function (response) {
        var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
        if (result.msgcode) {
          Object.assign(this.model, result.data)
          this.model.state = parseInt(this.model.state)
          switch (this.model.state) {
            case 0:
              this.template = '该病人信息还未处理'
              break
            case 1:
            case 3:
            case 4:
              this.template = `已安排${this.model.realName}患者于${this.model.bookTime}在${this.model.catetoryRoom}诊室就诊！`
              break
            case 2:
              this.template = this.model.refuseInfo && this.model.refuseInfo || ''
              break
          }
        } else {
          this.$vux.alert.show({content: result.msg})
        }
      })
    },
    ready () {
    },
    components: {
      Group,
      Cell,
      Icon
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
