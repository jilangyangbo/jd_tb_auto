function init() {
  auto.waitFor()
  console.show()
  // execTask()
  // choujiang()
  jingdoushengji()
  // zannengliang()
  setTimeout(() => {
    console.hide()
  }, 5000)
}
init()
function test() {
  let target = text('逛一逛抽2个能量').find()
  console.log('target.length===', target.length)
  for (let i = 0; i < target.length; i++) {
    let parent = target[i].parent()
    console.log('parent.child(2).text()===', parent.child(2).text())
    if (parent.child(3).text() == '去看看') {
      console.log('去看看===')
      parent.child(1).click()
      flag = true
      sleep(1000)
      back()
    } else {
      console.log('没有==去看看=')
    }
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
      sleep(6000)
      tartget = text('继续抽奖').findOne(6000)
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
  console.info('==天天红包==')
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
      let target = text('发现新宝藏').findOne(500)
      if (target) {
        console.log('进行攒能量任务===')
        zannengliang()
      }
      sleep(3500)
      backtolist('天天红包')
    } else {
      console.log('任务完成===')
      break
    }
  }
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
function zannengliang() {
  while (true) {
    let btn = text('观看领豆').findOne(500)
    if (btn) {
      console.log('浏览===')
      btn.click()
      sleep(800)
      backtolist('发现新宝藏')
    } else {
      console.log('观看领豆任务完成===')
      break
    }
  }
  let list = text('逛一逛抽2个能量').find()
  if (list && list.length) {
    console.log('list.length===', list.length)
    for (let i = 0; i < list.length; i++) {
      let element = list[i]
      console.log('i===', i)
      console.log('element===', element.bounds())
      // console.log('element===', element)
      element.click()
      sleep(5000)
      back()
      sleep(1000)
    }
  }
  while (true) {
    let btn = textStartsWith('点击抽奖').findOne(500)
    if (btn) {
      console.log('点击抽奖===')
      sleep(6000)
      btn.click()
    } else {
      console.log('任务完成===')
      break
    }
  }
}
function jingdoushengji() {
  console.info('==升级京豆==')
  while (true) {
    sleep(1000)
    let btn = textStartsWith('去完成').findOne(500)
    if (btn) {
      sleep(500)
      console.log('去完成===')
      let bound = btn.bounds()
      // console.log('bound===', bound)
      click(bound.centerX(), bound.centerY())
      sleep(5000)
      backtolist('做任务再升一级')
    } else {
      console.log('任务完成===')
      break
    }
  }
}
