/**
 * Created by gaoxin on 2016/9/11.
 */
var middleware = {}
middleware.appLogin = function (me) {
  var uid = localStorage['APP_SUCCESS']
  me.$http.post('/applogin', {uid}).then(function (response) {
    console.log(response.data)
    var result = response.data
    return result
  })
}

middleware.validateLoin = function (me) {
  var uid = localStorage['APP_SUCCESS']
  if (!uid) {
    return false
  }
  return true
}

module.exports = middleware
