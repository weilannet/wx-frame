<template>
  <div>
    <div class="center">
      <svg style="width:60px;height:60px;" version="1.1" id="图形" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve"><path class="svgpath" data-index="path_0" fill="#35495e" d="M512 816.64 51.2 985.6l460.8-947.2 460.8 947.2L512 816.64 512 816.64zM509.44 207.36 189.44 862.72l317.44-117.76L506.88 207.36 509.44 207.36zM509.44 207.36" /></svg>

      <h1 class="vux-title" style="display:none;">
        <span class="demo-icon" slot="icon" style="font-size:60px;color:#35495e;display: block;">&#xe637;</span>
      </h1>
      <p class="vux-notice">同仁微信端演示</p>
    </div>
    <group>
      <cell title="Demo" link="/demo" value="演示">
        <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
      </cell>
    </group>
    <group>
      <cell title="登录" link="/login" value="">
        <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
      </cell>
    </group>
    <group>
      <cell title="我的修改手机号" link="/myphone" value="">
        <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
      </cell>
      <cell title="我的-上报记录" link="/myreport" value="">
        <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
      </cell>
      <cell title="我的-个人信息信息" link="/myinfo" value="">
        <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
      </cell>
    </group>
    <group>
      <cell title="病历上报" link="/report" value="">
        <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
      </cell>
    </group>
    <group>
      <cell title="会议报名" link="/meeting?_id=57e0f4e989a4dd03940f1185" value="">
        <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
      </cell>
    </group>
    <group>
      <cell title="审核病历" link="/check?_id=57d91395ece91819f487a72c" value="">
        <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
      </cell>
    </group>
    <!--<group>-->
      <!--<cell title="Buy me a coffee" link="project/donate" value="捐赠">-->
        <!--<span class="demo-icon" slot="icon" style="color:red;">&#xe630;</span>-->
      <!--</cell>-->
      <!--<cell title="Github" link="http://github.com/airyland/vux" value="Star me">-->
        <!--<span class="demo-icon" slot="icon" style="color:#35495e;">&#xe62f;</span>-->
      <!--</cell>-->
    <!--</group>-->
  </div>
</template>

<script>
import { Cell, Group } from './components'
const version = require('../package.json').version
export default {
  components: {
    Cell,
    Group
  },
  data () {
    return {
      version: version
    }
  }
}
</script>

<style>
@import './demos/style.css';
.center {
  margin-top: 15px;
  text-align: center;
}
.vux-notice {
  color: #666;
  line-height: 40px;
}
.vux-title {
  vertical-align: middle;
  text-align: center;
  color: #04BE02;
  display: inline-block;
  width: 75px;
  height: 75px;
  line-height: 75px;
  border-radius: 50%;
}
body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
  padding-bottom: 50px;
}
</style>
