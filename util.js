function findTxt(list) {
  auto.waitFor()
  console.show()
  let flag = false
  for (let i = 0; i < list.length; i++) {
    var btn = text(list[i]).findOne(1000)
    if (btn) {
      console.log('找到了===', list[i])
      flag = true
    }
  }
  if (!flag) {
    console.log('没找到===')
  }
}
findTxt(['浏览', '随机获得'])
