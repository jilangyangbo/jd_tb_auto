/**
 *
 */

function init() {
  auto.waitFor()
  console.show()
  // start()
  getCountReward()
}
// init()
findTxt(['去完成', '领肥料'])
function findTxt(list) {
  auto.waitFor()
  console.show()
  let flag = false
  for (let i = 0; i < list.length; i++) {
    var btn =
      text(list[i]).findOne(1000) ||
      className('android.view.view').text('浏览段视频(0/1)').findOnce()
    if (btn) {
      console.log('找到了===', list[i])
      flag = true
    }
  }
  if (!flag) {
    console.log('没找到===')
  }
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
  className('android.support.v7.widget.RecyclerView')
    .scrollable(true)
    .depth(16)
    .findOne()
    .children()
    .forEach((child) => {
      var target = child.findOne(
        className('android.widget.TextView').text('发财鸭')
      )
      if (target) {
        const bound = target.bounds()
        click(bound.centerX(), bound.centerY())
      } else {
        log('未找到')
      }
    })
  console.show()
}

function getCountReward() {
  log('getCountReward')
  let flag = true
  while (flag) {
    console.log('找随机蛋...')
    const btn = className('android.view.View').text('随机蛋').findOne(2000)
    if (btn) {
      console.log('btn.bounds()===', btn.bounds())
      btn = null
      sleep(6000)
      console.log('找到了随机蛋===')

      click(414, 1150)
      log('点击了随机蛋')
      sleep(2000)
      //点击普通领取
      let getBtn = className('android.view.View').text('普通领取').findOnce()
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
    const end = className('android.view.View').text('明日再来').findOnce()
    if (end) {
      log('明日再来')
      return false
    }
    sleep(3000)
  }
}
