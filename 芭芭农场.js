function init() {
  auto.waitFor()
  console.show()
  // start()
  // execTask()
  test()
  setTimeout(() => {
    console.hide()
  }, 5000)
}
init()
function test() {
  target = textStartsWith('浏览15秒').find()
  for (let i = 0; i < target.length; i++) {
    let parent = target[i].parent().parent() //.parent()
    let btn = parent.find(desc('浏览天天'))
    console.log('btn===', btn)
    btn.click()
    // console.log('child(1).text()===', parent.child(0).text())
  }
}
function execTask() {
  let target = className('android.widget.Image')
    .text(
      'O1CN01CJQym91y7ho3XF4R5_!!6000000006532-2-tps-120-120.png_1080x1800Q50s50.jpg_'
    )
    .findOne(1000)
  if (target) {
    target.click()
  }
  sleep(1000)
  while (true) {
    target =
      textStartsWith('逛精选商品').findOne(1000) ||
      textStartsWith('逛精选好物').findOne(1000)
    if (target) {
      console.log('逛精选好物===')
      target.click()
      sleep(2000)
      if (swipe(800, 1500, 800, 800, 1000)) {
        console.log('滑动===')
      }
      sleep(16000)
      back()
    } else if (textStartsWith('浏览15秒').exists()) {
      console.log('浏览15秒===')
      target = textStartsWith('浏览15秒').find()
      for (let i = 0; i < target.length; i++) {
        let parent = target[i].parent().parent().parent()
        if (
          parent.child(1).text() == '去完成' ||
          parent.child(1).text() == '去浏览'
        ) {
          if (parent.findOne(text('浏览天天领现金'))) {
            console.log('浏览天天领现金===')
            continue
            let gotobtn = className('android.view.View')
              .clickable(true)
              .depth(9)
              .findOne(2000)
            if (gotobtn) {
              console.log('天天领现金===')
              const bound = gotobtn.bounds()
              sleep(1000)
              console.log('bound===', bound)
              if (click(bound.centerX() + 100, bound.centerY())) {
                console.log('点击成功===')
              }
              sleep(2000)
            }
          }
          parent.child(1).click()
          sleep(1000)

          sleep(16000)
          back()
          break
        }
      }
    } else {
      console.log('做完了===')
      break
    }
  }
}
