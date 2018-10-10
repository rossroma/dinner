import Vue from 'vue'
import Resource from 'vue-resource'
Vue.use(Resource)

  // 根据环境自动切换path地址
const path = process.env.NODE_ENV === 'production' ? '/' : 'http://127.0.0.1/'

// get请求
const get = function (url, cb) {
  Vue.http.get(`${path}${url}`)
      .then((response) => {
        if (response.status === 200) {
          cb(response.body)
        } else {
          console.log(response.status)
        }
      })
}

// post请求
const post = function (url, body, cb) {
  Vue.http.post(`${path}${url}`, body)
      .then((response) => {
        if (response.status === 200) {
          cb(response.body)
        } else {
          console.log(response.status)
        }
      })
}

// 封装sessionStorage
const storage = function () {
  return {
    set: function (key, value) {
      window.localStorage.setItem(key, value)
    },
    get: function (key) {
      return window.localStorage.getItem(key)
    },
    remove: function (key) {
      window.localStorage.removeItem(key)
    }
  }
}

let bus = new Vue()
bus.get = get
bus.post = post
bus.storage = storage
export default bus
