const express = require('express')
const app = express()
const request = require('request')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const Conf = require('./conf.js')
const later = require('later')

app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist/'))

const apiUrl = 'https://api.bmob.cn/1/classes/'
const apiUser = 'https://api.bmob.cn/1/'
const headerText = Conf.bmob
app.use(session({
  secret: 'guessmovie',
  cookie: {maxAge: 360000000},
  resave: false,
  saveUninitialized: true
}))

let dinnerStatus = true // 是否允许继续点餐
let whiteList = [] // 点餐白名单

// 处理返回信息
function callback(res, msg = '操作成功！', code = 1, data) {
  let result = {
  	code: code,
  	msg: msg,
  	result: data
  }
  res.end(JSON.stringify(result))
}

// 显示错误信息
function showError (res, error, body) {
	let errorStr
	if (error) {
		errorStr = `basic error：${error}`
	} else if (body && body.error) {
		errorStr = `bmob  error: ${body.error}`
	} else {
		return false
	}
	callback(res, errorStr, 10)
  return true
}

// 获取格式化后的日期
function getFormatDate () {
  let d = new Date()
  d = d.getTime() + 28800000
  d = new Date(d)
  return d.toISOString().slice(0, 10)
}

// 判断用户的登录状态
function loginStatus (req) {
  if (req.session) {
    return req.session.token === 'j39d04mc9ab37fhw'
  } else {
    return false
  }
}

// 用户输入校验
function validator (option, res, data) {
  
  // 点餐校验
  if (option === 'addDinner') {
    const { userName, menuType} = data
    if (!dinnerStatus) {
      callback(res, '点餐通道已关闭', 3)
    } else if (!userName) {
      callback(res, '点餐人缺失', 2)
    } else if (whiteList.indexOf(userName) === -1) { // 白名单验证
      callback(res, '点餐人不在白名单内，请联系行政处理', 2)
    } else if (!menuType || menuType.length !== 2) {
      callback(res, '主食类型选择有误', 2)
    } else {
      return true
    }
  }
}

//设置请求格式
app.all('*', function(req, res, next) {
  res.header('content-type', 'application/json;charset=utf-8')
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// 登录
app.post('/signin', function (req, res) {
  const password = req.body.password
  if (password === '3.1415926') {
    req.session.name = 'root'
    req.session.obid = '123456'
    req.session.token = 'j39d04mc9ab37fhw'
    console.log(req.session)
    callback(res, '登录成功！', 1, req.session)
  } else {
    showError(res, '密码错误！')
  }
})

// 点餐
app.post('/addDinner', function (req, res) {

  let body = req.body

  if (validator('addDinner', res, body)) {
    const options = {
      method: 'POST',
      url: apiUrl + 'List',
      headers: headerText,
      body: body,
      json: true
    }
    request(options, function (error, response, data) {
      if (showError(res, error, data)) return
      callback(res, '点餐成功！', 1, data)
    })
  }
})

// 撤销点餐
app.get('/cancelDinner/:objid', function (req, res) {

  // 点餐通道是否关闭
  if (!dinnerStatus) {
    callback(res, '点餐通道已关闭！', 3)
    return
  }

	const options = {
		method: 'DELETE',
	  url: apiUrl + `List/${req.params.objid}`,
	  headers: headerText,
	  json: true
	}
	request(options, function (error, response, data) {
	  if (showError(res, error, data)) return
	  callback(res, '撤销成功！')
	})
})

// 查询已点
app.get('/getDinner/:userName', function (req, res) {
  let date = getFormatDate()
  let userName = encodeURI(req.params.userName)
  const options = {
    method: 'GET',
    url: apiUrl + `List?where=%7B%22createdAt%22:%7B%22$gte%22:%7B%22__type%22:%22Date%22,%22iso%22:%22${date}%2000:00:00%22%7D%7D,%20%22userName%22:%22${userName}%22%7D`,
    headers: headerText,
    json: true
  }
  request(options, function (error, response, data) {
    if (showError(res, error, data)) return
    callback(res, '操作成功！', 1, data.results)
  })
})

// 查询所有点餐
app.get('/getAllDinner', function (req, res) {

  let date
  if (req.query.date) {
    date = req.query.date
  } else {
    date = getFormatDate()
  }

  // 办公室筛选
  let officeSql
  if (req.query.office) {
    officeSql = `,%7B%22office%22:${req.query.office}%7D`
  } else {
    officeSql = `,%7B%22office%22:%7B%22$exists%22:false%7D%7D`
  }
  const options = {
    method: 'GET',
    url: apiUrl + `List?where=%7B%22$and%22:%5B%7B%22createdAt%22:%7B%22$gte%22:%7B%22__type%22:%20%22Date%22,%20%22iso%22:%20%22${date}%2000:00:00%22%7D%7D%7D,%20%7B%22createdAt%22:%7B%22$lte%22:%7B%22__type%22:%20%22Date%22,%20%22iso%22:%20%22${date}%2023:59:59%22%7D%7D%7D${officeSql}%5D%7D`,
    headers: headerText,
    json: true
  }
  request(options, function (error, response, data) {
    if (showError(res, error, data)) return
    data.dinnerStatus = dinnerStatus
    data.loginStatus = loginStatus(req)
    callback(res, '操作成功！', 1, data)
  })
})

// 切换点餐状态
app.get('/toggleDinner', function (req, res) {
  dinnerStatus = !dinnerStatus
  let result = {
    code: 1,
    msg: dinnerStatus ? '开启点餐' : '关闭点餐',
    result: {
      dinnerStatus: dinnerStatus
    }
  }
  res.end(JSON.stringify(result))
})

// 设置白名单
app.post('/setWhiteList', function (req, res) {

  let body = req.body

  const options = {
    method: 'PUT',
    url: apiUrl + 'whiteList/WztQBBBC',
    headers: headerText,
    body: body,
    json: true
  }
  request(options, function (error, response, data) {
    if (showError(res, error, data)) return
    callback(res, '保存成功！', 1, data)
  })
})

// 查询白名单
app.get('/getWhiteList', function (req, res) {
  const options = {
    method: 'GET',
    url: apiUrl + `whiteList/WztQBBBC`,
    headers: headerText,
    json: true
  }
  request(options, function (error, response, data) {
    if (showError(res, error, data)) return
    whiteList = data.value
    callback(res, '操作成功！', 1, data.value)
  })
})

// 设置点餐菜单
app.post('/setMenuList', function (req, res) {

  let body = req.body

  const options = {
    method: 'PUT',
    url: apiUrl + 'menuList/GEyhUUU9',
    headers: headerText,
    body: body,
    json: true
  }
  request(options, function (error, response, data) {
    if (showError(res, error, data)) return
    callback(res, '保存成功！', 1, data)
  })
})

// 查询点餐菜单
app.get('/getMenuList', function (req, res) {
  const options = {
    method: 'GET',
    url: apiUrl + `menuList/GEyhUUU9`,
    headers: headerText,
    json: true
  }
  request(options, function (error, response, data) {
    if (showError(res, error, data)) return
    callback(res, '操作成功！', 1, data.value)
  })
})

// 每日0点自动开启点餐
const basic = {h: [00], m: [00]}
const sched = {
    schedules: [basic]
}

later.date.localTime()

const t = later.setInterval(function(){
  dinnerStatus = true
  console.log(`${new Date()}: 点餐自动开启`)
}, sched)

module.exports = app
