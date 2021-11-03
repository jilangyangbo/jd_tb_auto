/**
 * 京东农场任务
 */

function init() {
  auto.waitFor()
  console.show()
  // start()
  // jiaoshui(12)
  jiaoshui()
  setTimeout(() => {
    console.hide()
  }, 5000)
}
init()

function jiaoshui(num) {
  var btn = text('g').findOne(1000)
  num = num || 5
  let i = 0
  if (btn) {
    while (i < num) {
      i++
      console.log('浇水===', i)
      btn.click()
      sleep(4000)
    }
  }
}
function start() {
  auto.waitFor()
  console.show()
  console.log('开始任务===')
  while (true) {
    var btn = text('去领取').findOne(1000)
    if (btn) {
      console.log('领取奖励===')
      btn.click()
    }
    var frame = text('去逛逛').findOne(1000)
    if (frame) {
      frame.click()
      console.log('进入浏览任务===')
      sleep(6000)
      backtolist()
    } else {
      console.log('任务完成===')
      break
    }
  }
}
function backtolist() {
  let num = 0
  while (true) {
    num++
    var btn = text('领水滴').findOne(1000)
    if (btn || num > 5) {
      console.log('回到任务列表===')
      break
    } else {
      back()
      sleep(1000)
    }
  }
}
