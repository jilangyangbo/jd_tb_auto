function start() {
  auto.waitFor()
  var appName = '钉钉'
  if (launchApp(appName)) {
    console.info('启动钉钉')
  } else {
    console.info('请手动启动淘宝APP')
  }
  sleep(4000)
  id('session_list')
    .findOne()
    .children()
    .forEach((child) => {
      var target = child.findOne(
        id('item_title').className('android.widget.TextView').text('打卡')
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
// execTask()
// daka()
function daka() {
  sleep(4000)
  // gesture(2000, [300, 800], [300, 1400])
  // work_button = text('考勤打卡').findOnce()
  work_button = className('android.widget.TextView').text('打卡').clickable()
  if (work_button == null) {
    log('找不到工作')
    sleep(1000)
  } else {
    log('找到工作', work_button)
    console.log('work_button.exists()===', work_button.exists())
    const bound = work_button.findOne().bounds()
    log('centerX', bound.centerX())
    // click(bound.centerX(), bound.bottom - 20)
    sleep(1000)
  }
  sleep(3000)
  exit()
}
function execTask() {
  console.show()
  while (true) {
    console.info('寻找按钮')
    var target =
      textStartsWith('逛一逛').findOnce() || textStartsWith('去浏览').findOnce()
    if (target == null) {
      console.info('任务完成')
      toast('任务完成')
      break
    }
    target.click()
    console.info('去逛逛')
    sleep(3000)
    //浏览网页20s
    viewWeb(15)
    sleep(1000)
  }
  exit()
}
function viewWeb(time) {
  gesture(1000, [300, 1000], [300, 800])
  var cnt = 1
  while (true) {
    var finish = desc('任务完成').exists() || textStartsWith('已获得').exists()
    if (finish || cnt > time) {
      break
    }
    sleep(1000)
    cnt += 1
  }
  //模拟返回键，返回到任务栏页面
  back()
}

