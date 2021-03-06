export default function (_object) {
  var me = _object
  for (var each in me.$refs) {
    if (!me.$refs[each].validate) {
      continue
    }
    me.$refs[each].validate()
    for (var item in me.$refs[each].errors) {
      if (item) {
        var errorText = me.$refs[each].title + me.$refs[each].errors[item]
        me.$vux.toast.show({ text: errorText, type: 'text', time: 1000, width: '20em' })
        return false
      }
    }
  }
  return true
}

