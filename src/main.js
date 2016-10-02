import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'
import Home from './Home'

// plugins
// import Device from './plugins/device'
// import DeviceDemo from './demos/Device'
import ToastPlugin from './plugins/toast'
import AlertPlugin from './plugins/alert'

// function
import Login from './login/login'
import MyInfo from './my/myinfo'
import MyReport from './my/myreport'
import MyReportDetail from './my/myreportdetail'
import MyPhone from './my/myphone'
import Check from './check/check'
import CheckReceive from './check/receive'
import CheckReceiveTip from './check/receivetip'
import CheckRefuse from './check/refuse'
import Report from './report/report'
import Meeting from './meeting/meeting'
import MeetingConfirm from './meeting/confirm'
import Result from './meeting/result'
import Register from './login/register'
import UpdatePassword from './login/updatepassword'
import AgreeMent from './login/agreement'

const middleWare = require('./libs/middleware')
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(Router)
Vue.config.devtools = true

// $device
// Vue.use(Device)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(VueResource)
Vue.http.options.root = '/root'
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'

const router = new Router()

router.map({
    '/': {
        component: Home
    },
    '/myinfo': {
        component: MyInfo
    },
    '/myreport': {
        component: MyReport
    },
    '/myreportdetail': {
        component: MyReportDetail
    },
    '/myphone': {
        component: MyPhone
    },
    '/login': {
        component: Login
    },
    '/register': {
        component: Register
    },
    '/updatepassword': {
        component: UpdatePassword
    },
    '/agreement': {
        component: AgreeMent
    },
    '/check': {
        component: Check
    },
    '/checkreceive': {
        component: CheckReceive
    },
    '/checkreceivetip': {
        component: CheckReceiveTip
    },
    '/checkrefuse': {
        component: CheckRefuse
    },
    '/report': {
        component: Report
    },
    '/meeting': {
        component: Meeting
    },
    'meetingconfirm': {
        component: MeetingConfirm
    },
    '/result': {
        component: Result
    }
})
router.beforeEach(function(transition) {
    if (/\/http/.test(transition.to.path)) {
        let url = transition.to.path.split('http')[1]
        window.location.href = `http${url}`
    } else if (/\/myreportdetail/.test(transition.to.path)) {
        transition.next()
    } else if (/\/report|\/myinfo|\/myreport|\/meeting/.test(transition.to.path) && !middleWare.validateLoin()) {
        var formPath = transition.to.path.toString()
        router.go({
            path: '/login',
            params: { id: formPath },
            query: { id: formPath }
        })
    } else {
        transition.next()
    }
})

router.afterEach(function(transition) {
    window.scrollTo(0, 0)
})

router.start(App, '#app')