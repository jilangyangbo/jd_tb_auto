/**
 * 滴滴浇水
 */

init()
function init() {
  auto.waitFor()
  console.show()
  start()
  sleep(5000)
  jiaoshui(5)
  lingqu(3)
  setTimeout(() => {
    console.hide()
  }, 3000)
}
function lingqu(num) {
  //启用按键监听
  // console.setSize(device.width / 2, device.height / 2)
  console.log('开始领取===', num)
  num = num || 5
  let i = 0
  while (i < num) {
    i++
    console.log('点击领取===', i)
    click(750, 1420)
    sleep(1500)
    click(1000, 420)
    sleep(1200)
  }
}
function start() {
  var appName = '滴滴出行'
  if (launchApp(appName)) {
    console.info('启动滴滴出行')
  } else {
    console.info('请手动启动滴滴出行')
  }
  let target = className('android.widget.TextView')
    .text('5天种水果')
    .findOne(10000)
  if (target) {
    const bound = target.bounds()
    click(bound.centerX(), bound.centerY() - 50)
    log('进入种水果')
  } else {
    log('没找到')
  }
}
function jiaoshui(num) {
  console.log('总浇水次数===', num)
  // console.setPosition(850, 1700)
  let i = 0
  while (i < num) {
    i++
    console.log('当前浇水次数===', i)
    click(850, 1700)
    sleep(1800)
  }
}
