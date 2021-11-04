function findTxt(list) {
  auto.waitFor()
  console.show()
  let flag = false
  for (let i = 0; i < list.length; i++) {
    var btn = text(list[i]).findOne(500)
    if (btn) {
      console.log('找到了===', list[i])
      flag = true
    }
  }
  if (!flag) {
    console.log('没找到===')
  }
  setTimeout(() => {
    console.hide()
  }, 3000)
}
findTxt(['太空种子'])
