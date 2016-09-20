/**
 * Created by gaoxin on 2016/9/10.
 */
var Vue = require('vue')
var VueResource = require('vue-resource')
Vue.use(VueResource)
var ajaxHelper = {}

ajaxHelper.createAjax = function (path, params) {
  return new Promise(function (resolve, reject) {
    var me = new Vue()
    me.$http.post(path, params).then(function (request) {
      if (request.status === 200) {
        resolve(request.data)
      } else {
        reject(Error(request.statusText))
      }
    })
  })
}

ajaxHelper.sendAjax = function (arrAjax, callback) {
  Promise.all(arrAjax).then(values => {
    callback.apply(this, values)
  })
}
module.exports = ajaxHelper
