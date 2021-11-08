/**
 * 京东农场任务
 */

const BTN_NAME_LIST = ['去领取', '领取']

function init() {
  auto.waitFor()
  console.show()
  exectask()
  // jiaoshui()
  setTimeout(() => {
    console.hide()
  }, 5000)
}
init()

function test() {
  var button = className('android.view.View').depth(10) //.find() //.depth(10)
  // 9  3  领京豆
  if (button) {
    console.log('button===', button.length)
    var rect = button.findOne().bounds()
    console.log('rect===', rect)
    // button[1].click()// 小鸭子
    // button[4].click() // 签到
    // button[5].click() // 领水滴
    // button[7].click() // 助理领奖
    // button[8].click() // 好友
    // button[10].click() // 天天红包    // id('A2').findOne(1000)
  } else {
    console.log('不存在===')
  }
}
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
function exectask() {
  auto.waitFor()
  console.show()
  console.log('开始任务===')
  while (true) {
    let btn = null
    for (let i = 0; i < BTN_NAME_LIST.length; i++) {
      btn = text(BTN_NAME_LIST[i]).findOne(500)
      if (btn) {
        console.log('领取奖励===')
        btn.click()
        break
      }
    }
    var frame = text('去逛逛').findOne(500)
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
    if (btn || num > 8) {
      console.log('回到任务列表===')
      break
    } else {
      back()
      sleep(800)
    }
  }
}
