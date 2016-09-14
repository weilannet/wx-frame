<template>
  <div>
    <sticky>
      <tab :line-width=1>
        <tab-item :selected="tabselect === $index" v-for="item in tablist" @click="tabClick($index)">{{item}}</tab-item>
      </tab>
    </sticky>

    <!--<a v-link="{ path: '/myreportdetail' }">-->
    <div  style="height:30px;width:100%"></div>
    <scroller lock-x scrollbar-y use-pullup use-pulldown height="500px" :pullup-config="pullupConfig2" @pullup:loading="loadMore" @pulldown:loading="refresh" :pullup-status.sync="pullupStatus" >
      <!--<div class="box2">-->
        <!--<p v-for="i in n">placeholder {{i}}</p>-->
      <!--</div>-->
      <div class="box2">
      <group class="myreport-item" v-for="item in reportlist" track-by="Math.random()*1000+_id" @click="itemClick(item)">
        <cell :title="item.realName+'&nbsp;&nbsp;'+(item.sex==0?'女':'男')+'&nbsp;&nbsp;'+item.age" >{{stateBind(item.state)}}</cell>
        <cell title="诊断结果:"></cell>
        <div class="myreport-content">{{item.checkInfo}}</div>
      </group>
      </div>
    </scroller>
    <!--<other-component/>-->
  </div>
</template>
<style>
  body{

  }
</style>
<script>
  import { Scroller, Spinner, Group, Cell, Icon, Sticky, Tab, TabItem } from '../components'
  const tabList = () => ['待处理', '已处理']
  export default {
    created () {
      document.title = '我的上报记录'
      this.pageindex = 1
    },
    ready () {
    },
    components: {
      Scroller,
      Spinner,
      Group,
      Cell,
      Icon,
      Sticky,
      Tab,
      TabItem
    },
    watch: {
      pageindex (newValue, oldValue) {
        this.bindData()
      },
      tabselect () {
        if (this.pageindex > 1) {
          this.pageindex = 1
          return
        }
        this.bindData()
      }
    },
    data () {
      return {
        scrollerId: 0,
        value: '',
        tablist: tabList(),
        tabselect: 0,
        reportlist: [],
        pullupStatus: 'default',
        pageindex: 0,
        pullupConfig2: {
          content: '上拉加载更多',
          downContent: '松开进行加载',
          upContent: '上拉加载更多',
          loadingContent: '加载中...'
        }
      }
    },
    methods: {
      bindData () {
        // let result = null
        // if (this.tabselect === 0) {
        //   result = [
        //     {
        //       id: '1',
        //       realName: '高新',
        //       sex: 0,
        //       age: 18,
        //       state: 0,
        //       checkInfo: '需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好……',
        //       images: ['http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg', 'http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg'],
        //       phone: '18611043925'
        //     },
        //     {
        //       id: '2',
        //       realName: '王小南',
        //       sex: 0,
        //       age: 18,
        //       state: 0,
        //       checkInfo: '需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好……',
        //       images: ['http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg', 'http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg'],
        //       phone: '18611043925'
        //     },
        //     {
        //       id: '3',
        //       realName: '张三',
        //       sex: 1,
        //       age: 18,
        //       state: 0,
        //       checkInfo: '需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好……',
        //       images: ['http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg', 'http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg'],
        //       phone: '18611043925'
        //     },
        //     {
        //       id: '4',
        //       realName: '李四',
        //       sex: 0,
        //       age: 18,
        //       state: 0,
        //       checkInfo: '需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好……',
        //       images: ['http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg', 'http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg'],
        //       phone: '18611043925'
        //     },
        //     {
        //       id: '5',
        //       realName: '王五',
        //       sex: 0,
        //       age: 18,
        //       state: 0,
        //       checkInfo: '需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好……',
        //       images: ['http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg', 'http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg'],
        //       phone: '18611043925'
        //     }
        //   ]
        // } else {
        //   result = [
        //     {
        //       id: '1',
        //       realName: '梁山伯',
        //       sex: 1,
        //       age: 18,
        //       state: 1,
        //       bookTime: '2016年9月4日 9：00',
        //       catetoryRoom: '201',
        //       checkInfo: '需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好……',
        //       images: ['http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg', 'http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg'],
        //       phone: '18611043925'
        //     },
        //     {
        //       id: '2',
        //       realName: '祝英台',
        //       sex: 0,
        //       age: 18,
        //       state: 2,
        //       checkInfo: '需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好……',
        //       images: ['http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg', 'http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg'],
        //       phone: '18611043925',
        //       refuseContent: '病人病状不符合'
        //     },
        //     {
        //       id: '3',
        //       realName: '武松',
        //       sex: 1,
        //       age: 18,
        //       state: 3,
        //       checkInfo: '需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好……',
        //       images: ['http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg', 'http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg'],
        //       phone: '18611043925'
        //     },
        //     {
        //       id: '4',
        //       realName: '二良',
        //       sex: 0,
        //       age: 18,
        //       state: 1,
        //       bookTime: '2016年10月4日 9：00',
        //       catetoryRoom: '205',
        //       checkInfo: '需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好……',
        //       images: ['http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg', 'http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg'],
        //       phone: '18611043925'
        //     },
        //     {
        //       id: '5',
        //       realName: '二狗',
        //       sex: 1,
        //       age: 18,
        //       state: 2,
        //       checkInfo: '需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好。需要进一步治疗与诊断，此姑娘身体很好……',
        //       images: ['http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg', 'http://udongman.oss.aliyuncs.com/image/2014/1022/20141022104422934.jpg'],
        //       phone: '18611043925',
        //       refuseContent: '用户信息不全，请重新上交'
        //     }
        //   ]
        // }
        // pageIndex state
        var data = {
          pageIndex: this.pageindex,
          state: this.tabselect
        }
        this.$http.post('/getPatientList', data).then(function (response) {
          console.log(response.data.data)
          debugger
          var result = response.data && JSON.parse(response.data)
          if (result.msgcode) {
            if (this.pageindex === 1) {
              this.$set('reportlist', result.data.data)
              return
            }
            this.$set('reportlist', this.reportlist.concat(result.data.data))
          } else {
            this.$vux.alert.show({content: result.msg})
          }
        }, function () {
        })
      },
      tabClick (item) {
        this.tabselect = item
      },
      itemClick (item) {
        this.$router.go(
          {
            path: '/myreportdetail',
            params: item,
            query: item
          }
        )
      },
      stateBind (state) {
        switch (state) {
          case 0:
            return '待处理'
          case 1:
            return '已接收'
          case 2:
            return '已拒绝'
          case 3:
            return '用户确认就诊'
          case 4:
            return '用户爽约'

        }
      },
      loadMore (uuid) {
        setTimeout(() => {
          this.pageindex++
          this.$nextTick(() => {
            this.$broadcast('pullup:reset', uuid)
          })
        }, 2000)
      },
      refresh (uuid) {
        setTimeout(() => {
          this.pageindex = 1
          this.$nextTick(() => {
            this.$broadcast('pulldown:reset', uuid)
          })
        }, 2000)
      },
      changePullupStatus (enabled) {
        if (enabled) {
          this.$broadcast('pullup:enable', this.$refs.scroller.uuid)
          this.pullupEnabled = true
        } else {
          this.$broadcast('pullup:disable', this.$refs.scroller.uuid)
          this.pullupEnabled = false
        }
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

  .myreport-item {
  }

  .vux-sticky,.vux-fixed {
    z-index:999;
  }
  .box2-wrap {
    height: 300px;
    overflow: hidden;
  }
  .rotate {
    display: inline-block;
    transform: rotate(-180deg);
  }
  .pullup-arrow {
    transition: all linear 0.2s;
    color: #666;
    font-size: 25px;
  }

</style>
