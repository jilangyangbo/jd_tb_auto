/**
 *陶特发财鸭
 */

function init() {
  auto.waitFor()
  console.show()
  console.setSize(500, 500)
  // console.setPosition(200, 100)
  // test()
  start()
  getCountReward()
  execTask()
  setTimeout(() => {
    console.hide()
  }, 5000)
}
init()
// findTxt(['去完成', '领肥料'])
function test() {
 
}
// 启动淘特进入发财鸭页面
function start() {
  auto.waitFor()
  var appName = '淘特'
  if (launchApp(appName)) {
    console.info('启动淘特')
  } else {
    console.info('请手动启动淘特APP')
  }
  sleep(4000)

  var target = className('android.widget.TextView').text('发财鸭').findOne(1000)
  if (target) {
    const bound = target.bounds()
    click(bound.centerX(), bound.centerY() - 50)
  } else {
    log('未找到发财鸭')
  }
}

function getCountReward() {
  log('getCountReward')
  let flag = true
  while (flag) {
    sleep(1000)
    console.log('找随机蛋...')
    let btn = className('android.view.View').text('随机蛋').findOne(2000)
    if (btn) {
      console.log('找到了随机蛋===')
      sleep(6000)
      click(414, 1150)
      log('点击了随机蛋')
      sleep(2000)
      //点击普通领取
      let getBtn = className('android.view.View').text('普通领取').findOne(1000)
      log('getBtn', getBtn)
      if (getBtn) {
        log('普通领取')
        getBtn.click()
      } else {
        //点击立即领取
        log('立即领取')
        click(483, 1500)
      }
    }
    let end = className('android.view.View').text('明日再来').findOnce()
    if (end) {
      log('明日再来')
      return false
    }
    sleep(3000)
  }
}
function execTask() {
  click(1000,2000)
  let taskNum = 0
  while (true) {
    sleep(1000)
    let btn = text('立即领取').findOne(500)
    if (btn) {
      console.log('立即领取===')
      btn.click()
    }
    if (taskNum == 0) {
      btn = text('浏览得金币').findOne(500)
      if (btn && btn.parent().child(1).text() != '(3/3)') {
        gotoView(btn)
      } else {
        console.log('浏览得金币任务完成===')
        taskNum++
      }
    } else if (taskNum == 1) {
      btn = text('逛商品得金币').findOne(500)
      if (btn) {
        gotoView(btn)
      }
      taskNum++
    } else {
      console.log('所有任务完成===')
      break
    }
  }
}
function gotoView(btn) {
  let bound = btn.bounds()
  click(1000, bound.centerY() + 10)
  console.log('浏览===', btn.text())
  sleep(4000)
  if (textStartsWith('今日浏览任务已全部完成').exists()) {
    console.log('任务完成===')
  } else {
    for (let i = 0; i < 8; i++) {
      if (swipe(800, 1500, 800, 1000, 1000)) {
        console.log('滑动===', i)
        sleep(1000)
      }
    }
  }
  back()
}
function backtolist(txt) {
  let num = 0
  while (true) {
    num++
    var btn = text(txt).findOne(1000)
    if (btn || num > 8) {
      console.log('回到任务列表===')
      break
    } else {
      back()
      sleep(500)
    }
  }
}
