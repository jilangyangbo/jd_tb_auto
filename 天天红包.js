function init() {
  auto.waitFor()
  console.show()
  test()
  // execTask()
  // choujiang()
  setTimeout(() => {
    console.hide()
  }, 5000)
}
init()

function test() {

  var button = className('android.view.View').depth(10) //.find() //.depth(10)
  9  3  领京豆
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
function choujiang() {
  let i = 0
  while (i < 10) {
    i++
    let tartget = textStartsWith('还剩0').findOne(500)
    if (tartget) {
      console.log('抽奖完成===')
      break
    }
    tartget = textStartsWith('还剩').findOne(500)
    if (tartget) {
      console.log('开始抽奖===')
      let bound = tartget.bounds()
      click(bound.centerX(), bound.centerY() - 50)
      sleep(5000)
      tartget = text('继续抽奖').findOne(5000)
      if (tartget) {
        console.log('继续抽奖===')
        tartget.click()
      } else {
        console.log('没找到=继续抽奖==')
        break
      }
    } else {
      console.log('没找到==还剩=')
    }
  }
}
function execTask() {
  while (true) {
    let btn = text('立即领取').findOne(500)
    if (btn) {
      console.log('立即领取===')
      btn.click()
    }
    btn = text('去浏览').findOne(500)
    if (btn) {
      console.log('浏览===')
      btn.click()
      sleep(4000)
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
    var btn = text('天天红包').findOne(1000)
    if (btn || num > 8) {
      console.log('回到任务列表===')
      break
    } else {
      back()
      sleep(500)
    }
  }
}
