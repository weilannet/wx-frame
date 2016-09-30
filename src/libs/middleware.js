/**
 * Created by gaoxin on 2016/9/11.
 */
var Vue = require('vue')
var VueResource = require('vue-resource')
Vue.use(VueResource)

var middleware = {}

middleware.validateLoin = function (sign) {
  var uid = localStorage['APP_SUCCESS']
  if (!uid) {
    return false
  }
  var me = new Vue()
   
  me.$http.post((!sign ? '/applogin' : '/login'), {_id: uid}).then(function (response) {
    var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
    if (!result.msgcode) {
      me.$vux.alert.show({content: result.msg})
    }
  })
  return true
}

module.exports = middleware
