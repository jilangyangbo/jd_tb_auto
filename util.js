function findTxt(list) {
  let flag = false
  for (let i = 0; i < list.length; i++) {
    var btn =
      text(list[i]).findOne(1000) || textStartsWith(list[i]).findOne(1000)
    if (btn) {
      console.log('找到了===', list[i])
      console.log(
        'btn.parent.children.length===',
        btn.parent().parent().child(1)
      )
      flag = true
    }
  }
  if (!flag) {
    console.log('没找到===')
  }
}
function init() {
  auto.waitFor()
  console.show()
  // test()
  findTxt(['已完成'])

  setTimeout(() => {
    console.hide()
  }, 3000)
}
init()
function test() {
  console.log('device.width===', device.width)
  console.log('device.height===', device.height)
}
