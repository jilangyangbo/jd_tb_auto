/**
 * 京东农场任务
 */

const BTN_NAME_LIST = ['去领取', '领取']

function init() {
  auto.waitFor()
  console.show()
  console.info('==开始京东农场任务==')
  start('京东', '免费水果')
  console.log('device.width===', device.width)
  exectask()
  jiaoshui()
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
    button[5].click() // 领水滴
    // button[7].click() // 助理领奖
    // button[8].click() // 好友
    // button[10].click() // 天天红包    // id('A2').findOne(1000)
  } else {
    console.log('不存在===')
  }
}
function start(appName, activityName) {
  auto.waitFor()
  if (launchApp(appName)) {
    console.info('启动', appName)
  } else {
    console.info('请手动启动', appName)
  }
  if (id('fd').findOne(1000)) {
    console.log('已经在京东农场===')
  } else {
    sleep(2000)
    var target = className('android.widget.TextView')
      .text(activityName)
      .findOne(1000)
    if (target) {
      let bound = target.bounds()
      click(bound.centerX(), bound.centerY() - 50)
    } else {
      log('未找到', activityName)
    }
  }

  sleep(3000)
}
function jiaoshui(num) {
  let btn = text('g').findOne(1000)
  num = num || 2
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
  var button = className('android.view.View').depth(10).find() //.depth(10)
  // 9  3  领京豆
  if (button && button.length) {
    console.log('button===', button.length)
    // var rect = button.findOne().bounds()
    // console.log('rect===', rect)
    // button[1].click()// 小鸭子
    // button[4].click() // 签到
    button[5].click() // 领水滴
    // button[7].click() // 助理领奖
    // button[8].click() // 好友
    // button[10].click() // 天天红包    // id('A2').findOne(1000)
  } else {
    console.log('不存在===')
  }
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
  let title = text('领水滴').findOne(1000)
  if (title) {
    let bound = title.bounds()
    console.log('bound===', bound)
    //744 876
    //关闭任务列表
    click(1070, bound.centerY())
    console.log('关闭任务列表===')
  }
}
function backtolist() {
  let num = 0
  while (true) {
    num++
    let btn = text('领水滴').findOne(1000)
    if (btn || num > 8) {
      console.log('回到任务列表===')
      break
    } else {
      back()
      sleep(500)
    }
  }
}
