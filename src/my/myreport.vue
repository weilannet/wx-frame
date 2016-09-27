<template>
  <div>
   <sticky>
      <tab :line-width=2>
        <tab-item :selected="tabselect === $index" v-for="item in tablist" @click="tabClick($index)">{{item}}</tab-item>
      </tab>
    </sticky>
    <scroller lock-x scrollbar-y use-pullup use-pulldown :pullup-config="pullupConfig2" :pulldown-config={content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'} @pullup:loading="loadMore" @pulldown:loading="refresh" :pullup-status.sync="pullupStatus" v-ref:scroller>
      <div class="box2">
        <group class="myreport-item" v-for="item in reportlist" track-by="Math.random()*1000+_id" @click="itemClick(item)">
          <cell :title="item.realName+'&nbsp;&nbsp;'+(item.sex==0?'女':'男')+'&nbsp;&nbsp;'+item.age">{{stateBind(item.state)}}</cell>
          <cell title="诊断结果:"></cell>
          <div class="myreport-content">{{item.checkInfo}}</div>
        </group>
      </div>
     
    </scroller>
   
  </div>
  
</template>

<script>
import { Scroller, Divider, Switch, Group, Spinner, Cell, Sticky, Tab, TabItem } from '../components'
const tabList = () => ['待处理', '已处理']
export default {
  created () {
  },
  ready () {
    this.loadMore(this.$refs.scroller.uuid)
  },
  components: {
    Scroller,
    Divider,
    Switch,
    Group,
    Spinner,
    Cell,
    Sticky,
    Tab,
    TabItem
  },
  methods: {
    tabClick (item) {
      this.tabselect = item
      this.refresh(this.$refs.scroller.uuid)
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
    bindData (callback) {
      var data = {
        pageIndex: this.pageindex,
        pageSize: this.pageSize,
        state: this.tabselect
      }
      this.$http.post('/getPatientList', data).then(function (response) {
        var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
        if (result.data.total < result.data.pageSize * this.pageindex) {
          this.changePullupStatus(false)
        } else {
          this.changePullupStatus(true)
        }
        if (result.msgcode) {
          if (this.pageindex === 1) {
            this.$set('reportlist', result.data.data)
          } else {
            this.$set('reportlist', this.reportlist.concat(result.data.data))
          }
          if (callback) {
            callback()
          }
          return
        }
        this.$vux.alert.show({content: result.msg})
      })
    },
    loadMore (uuid) {
      var me = this
      this.pageindex++
      me.bindData(function () {
        me.$broadcast('pullup:reset', uuid)
      })
    },
    refresh (uuid) {
      var me = this
      this.pageindex = 1
      me.bindData(function () {
        me.$broadcast('pullup:reset', uuid)
        me.$broadcast('pulldown:reset', uuid)
      })
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
  },
  data () {
    return {
      scrollerId: 0,
      tablist: tabList(),
      tabselect: 0,
      reportlist: [],
      pullupStatus: 'default',
      pageindex: 0,
      pageSize: 10,
      pullupConfig2: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      }
    }
  }
}
</script>
<style lang="less" scoped>
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
 .myreport-content {
    padding: 0px 15px 15px 15px;
  }

.myreport-item:last-child:after {
  content: '';
  display: block;
  height: 4.0rem;
  width: 100%;
}
  
</style>
