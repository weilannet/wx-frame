/**
 * Created by gaoxin on 2016/9/11.
 */
var Vue = require('vue')
var VueResource = require('vue-resource')
Vue.use(VueResource)

var middleware = {}


middleware.exitLogin = function () {
  var uid = localStorage['APP_SUCCESS']
  if (uid) {
    localStorage.removeItem("APP_SUCCESS");
  }
 
}

middleware.validateLoin = function () {
  var uid = localStorage['APP_SUCCESS']
  if (!uid) {
    return false
  }
  var me = new Vue()
   
  me.$http.post(('/applogin'), {_id: uid}).then(function (response) {
    var result = (typeof response.data === 'string') ? JSON.parse(response.data) : response.data
    if (!result.status) {
      me.$vux.alert.show({content: result.message})
    }
  })
  return true
}

module.exports = middleware
