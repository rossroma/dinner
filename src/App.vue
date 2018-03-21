<template>
  <el-container>
    <el-header>
      <h1 class="title">逍邦网络点餐系统</h1>
      <p class="login login-text" v-if="loginStatus">欢迎登录!</p>
      <el-button v-else type="text" class="login" @click="dialogFormVisible=true">登录</el-button>
    </el-header>

    <el-main>

      <!-- 点餐开启状态 -->
      <template v-if="loginStatus">
        <div class="dinner-status" v-if="activeName === 'orderList'">
          <el-switch v-model="dinnerStatus" class="switch" @change="handleSwitch"></el-switch>
          <span class="text">点餐{{dinnerStatusText}}</span>        
        </div>
        <el-date-picker
          v-else
          v-model="pickDate"
          size="small"
          align="right"
          type="date"
          placeholder="历史数据筛选"
          class="date-picker"
          :picker-options="pickerOptions"
          @change="getOrderList"
          value-format="yyyy-MM-dd">
        </el-date-picker>
        
      </template>
      <el-tabs
        v-model="activeName"
        @tab-click="handleTabClick"
        class="tabs">
        <el-tab-pane label="已点餐列表" name="orderList">
          <el-table
            :data="tableData"
            style="width: 100%"
            :row-class-name="chooseMine"
            show-summary
            :summary-method="getSummaries"
            v-loading="loading"
            element-loading-text="拼了老命在加载">
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              prop="userName"
              label="姓名">
            </el-table-column>
            <el-table-column
              label="主食">
              <template scope="scope">
                {{scope.row.type | typeFilter}}
              </template>
            </el-table-column>
            <el-table-column
              prop="count"
              label="数量">
            </el-table-column>
            <el-table-column
              label="时间">
              <template scope="scope">
                {{scope.row.createdAt | timeFilter}}
              </template>
            </el-table-column>
            <el-table-column
              prop="others"
              label="备注">
            </el-table-column>
            <el-table-column
              label="操作">
              <template scope="scope">
                <el-button
                  v-if="scope.row.userName === myName || loginStatus"
                  @click.native.prevent="handleDelete(scope.row.objectId)"
                  type="text"
                  size="small">
                  撤销
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="历史记录" name="historyLog" v-if="loginStatus">
          <el-table
            :data="tableData"
            style="width: 100%"
            show-summary
            :summary-method="getSummaries"
            v-loading="loading"
            element-loading-text="拼了老命在加载">
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              prop="userName"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              label="主食"
              width="180">
              <template scope="scope">
                {{scope.row.type | typeFilter}}
              </template>
            </el-table-column>
            <el-table-column
              prop="count"
              label="数量"
              width="180">
            </el-table-column>
            <el-table-column
              prop="createdAt"
              label="时间"
              width="220">
            </el-table-column>
            <el-table-column
              prop="others"
              label="备注">
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>

      <el-form :inline="true" :model="formOrder" :rules="rulesOrder" class="form-order" ref="formOrder" v-if="activeName === 'orderList'">
        <div class="row">
          <el-form-item prop="userName">
            <el-input size="small" v-model="formOrder.userName" placeholder="点餐人"></el-input>
          </el-form-item>

          <el-form-item>
            <el-select size="small" v-model="formOrder.type" placeholder="主食">
              <el-option :value="1" label="米饭"></el-option>
              <el-option :value="2" label="馒头"></el-option>
              <el-option :value="12" label="饺子"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-select size="small" v-model="formOrder.count" placeholder="主食数量">
              <el-option :value="0.5"></el-option>
              <el-option :value="1"></el-option>
              <el-option :value="2"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="row pc">
          <el-form-item>
            <el-input type="textarea" v-model="formOrder.others" :rows="4" resize="none" class="textarea" placeholder="备注信息"></el-input>
          </el-form-item>

          <el-form-item>
            <a href="javascript:;" class="login-btn normal" :class="{ordered: myDinnerStatus}" @click="handleSubmit" v-if="dinnerStatus">我要点餐</a>
            <a href="javascript:;" class="login-btn closed" v-else>点餐关闭</a>
          </el-form-item>
        </div>
        <div class="mobile">
          <a href="javascript:;" class="login-btn-m normal" :class="{ordered: myDinnerStatus}" @click="handleSubmit" v-if="dinnerStatus">我要点餐</a>
          <a href="javascript:;" class="login-btn-m closed" v-else>点餐关闭</a>
        </div>

      </el-form>
    </el-main>
    
    <!-- 登录弹窗 -->
    <el-dialog title="管理员登录" :width="autoWidth" :fullscreen="smallScreen" :visible.sync="dialogFormVisible">
      <el-form :model="formLogin" :rules="rulesLogin" ref="formLogin">
        <el-form-item label="管理密码" prop="password">
          <el-input type="password" v-model="formLogin.password" auto-complete="off" placeholder="请输入管理密码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="login">登 录</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
import Bus from './bus'
import { Message, MessageBox } from 'element-ui'

// 通过hash来区分不同的办公室
let office
const hash = window.location.hash
if (hash.indexOf('910') > -1) {
  office = 910
}

export default {
  name: 'app',

  data () {
    return {
      loading: true,
      activeName: 'orderList', // 当前所显示的tab栏
      tableData: [], // 当日订单数据
      dialogFormVisible: false, // 登录框显示状态
      dinnerStatus: true, // 点餐开启状态
      myDinnerStatus: false, // 我的点餐状态
      myName: '', // 我的名字
      loginStatus: false, // 登录状态
      // 点餐表单数据
      formOrder: {
        userName: '',
        type: 1,
        count: 1,
        others: '',
        office: office
      },
      // 点餐必填验证
      rulesOrder: {
        userName: { required: true, message: '请输入点餐人姓名！', trigger: 'blur' }
      },
      // 登录表单数据
      formLogin: {
        password: ''
      },
      // 登录必填验证
      rulesLogin: {
        password: { required: true, message: '请输入管理密码！', trigger: 'blur' }
      },
      pickDate: '', // 筛选日期
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '前天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 48)
            picker.$emit('pick', date)
          }
        }]
      },
      autoWidth: window.innerWidth < 500 ? '100%' : '500px',
      smallScreen: window.innerWidth < 500
    }
  },

  computed: {
    dinnerStatusText () {
      if (this.dinnerStatus) {
        return '开启'
      } else {
        return '关闭'
      }
    }
  },

  created () {
    this.getOrderList()
    this.getLocalStorage()
  },

  methods: {
    // 获取已点餐列表
    getOrderList (date) {
      this.loading = true
      let url
      if (date) {
        url = `getAllDinner?date=${date}&office=${office}`
      } else {
        url = `getAllDinner?office=${office}`
      }
      Bus.get(url, (data) => {
        this.dinnerStatus = data.result.dinnerStatus
        this.tableData = data.result.results
        this.loginStatus = data.result.loginStatus
        this.loading = false
        // 判断是否已点
        if (this.myName && this.tableData.findIndex(item => item.userName === this.myName) > -1) {
          this.myDinnerStatus = true
        }
      })
    },

    // 获取localStorage
    getLocalStorage () {
      const storage = Bus.storage().get('DINNER-userinfos')
      if (!storage) return
      const LS = window.JSON.parse(storage)
      if (LS) {
        this.formOrder.userName = this.myName = LS.userName
        this.formOrder.type = Number(LS.type) || 1
        this.formOrder.count = Number(LS.count) || 1
      }
    },

    // 设置localStorage
    setLocalStorage (data) {
      let userinfos = {
        userName: data.userName,
        type: data.type,
        count: data.count
      }
      userinfos = window.JSON.stringify(userinfos)
      Bus.storage().set('DINNER-userinfos', userinfos)
    },

    // 点餐校验
    handleSubmit () {
      this.$refs.formOrder.validate((valid) => {
        if (valid) {
          // 检查是否已点
          if (this.tableData.findIndex(item => item.userName === this.myName) === -1 && !this.myDinnerStatus) {
            this.orderSubmit()
          } else {
            Message({
              type: 'error',
              message: '你已点餐，请勿重复提交！'
            })
          }
        } else {
          Message({
            type: 'error',
            message: '输入有误，请检查后重新提交！'
          })
          return false
        }
      })
    },

    // 提交点餐信息
    orderSubmit () {
      this.myDinnerStatus = true // 更改我的点餐状态
      const formData = this.formOrder
      Bus.post('addDinner', formData, (data) => {
        if (data.code === 1) {
          Message({
            type: 'success',
            message: data.msg
          })
          this.getOrderList() // 更新点餐列表
          this.setLocalStorage(formData) // 将点餐信息记录到localStorage
          this.myName = formData.userName // Who am i ?
        } else {
          this.myDinnerStatus = false // 更改我的点餐状态
          Message({
            type: 'error',
            message: data.msg
          })
        }
      })
    },

    // 开启/关闭点餐
    handleSwitch () {
      Bus.get('toggleDinner', (data) => {
        Message({
          type: 'success',
          message: data.msg
        })
      })
    },

    // tab点击事件
    handleTabClick (e) {
      this.getOrderList()
    },

    // 登录
    login () {
      this.$refs.formLogin.validate((valid) => {
        if (valid) {
          const body = this.formLogin
          Bus.post('signin', body, (data) => {
            if (data.code === 1) {
              Message({
                type: 'success',
                message: '登陆成功！'
              })
              this.loginStatus = true // 更改登录状态
              this.dialogFormVisible = false // 关闭登录弹窗
            } else {
              Message({
                type: 'error',
                message: '密码错误！'
              })
            }
          })
        } else {
          Message({
            type: 'error',
            message: '请输入管理密码！'
          })
          return false
        }
      })
    },

    // 撤销点餐监听
    handleDelete (id) {
      MessageBox('是否撤销此次点餐?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteRow(id)
      }).catch(() => {})
    },

    // 撤销点餐
    deleteRow (id) {
      const url = `cancelDinner/${id}`
      Bus.get(url, (data) => {
        if (data.code === 1) {
          Message({
            type: 'success',
            message: data.msg
          })
          this.myDinnerStatus = false // 更改我的点餐状态
          this.getOrderList() // 更新点餐列表
        } else {
          Message({
            type: 'error',
            message: data.msg
          })
        }
      })
    },

    // 对我的点餐进行背景高亮
    chooseMine ({row}) {
      if (row.userName === this.myName) {
        return 'positive-row'
      } else {
        return ''
      }
    },

    // 统计信息
    getSummaries () {
      let rice = 0
      let bread = 0
      let dumplings = 0
      this.tableData.forEach(row => {
        if (row.type === 1) {
          rice += row.count
        } else if (row.type === 12) {
          dumplings += row.count
        } else {
          bread += row.count
        }
      })
      let arr = ['统计']
      if (rice) {
        arr.push(`米饭：${rice}`)
      }
      if (bread) {
        arr.push(`馒头：${bread}`)
      }
      if (dumplings) {
        arr.push(`饺子：${dumplings}`)
      }
      return arr
    }
  },

  filters: {
    typeFilter (type) {
      if (type === 1) {
        return '米饭'
      } else if (type === 12) {
        return '饺子'
      } else {
        return '馒头'
      }
    },

    timeFilter (date) {
      return date.slice(-8)
    }
  }
}
</script>

<style lang="less" scoped>
  .title {
    text-align: center;
  }
  .login {
    position: absolute;
    right: 40px;
    top: 25px;
    &.login-text {
      color: #999;
      font-size: 14px;
      margin: 10px 0;
    }
  }
  .tabs {
    min-height: 400px;
    margin-top: 30px;
  }
  .dinner-status {
    position: absolute;
    right: 40px;
    top: 127px;
    z-index: 99;
    .switch {
      vertical-align: top;
    }
    .text {
      font-size: 14px;
      color: #666;
      display: inline-block;
      line-height: 1.6;
      vertical-align: top;
    }
  }
  .date-picker {
    position: absolute;
    right: 40px;
    top: 120px;
    z-index: 99;
  }
  .form-order {
    width: 606px;
    margin: 30px auto;
    .mobile {
      display: none;
    }
    .row:not(.pc) {
      .el-form-item {
        width: 31%;
      }
    }
    .textarea {
      width: 475px;
    }
    .login-btn {
      display: inline-block;
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      text-decoration: none;
      border-radius: 50%;
      color: #fff;
      margin-top: -3px;
      transition: all 0.3s;
      outline: none;
      &:hover {
        box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.2) inset, 0 0 2px 2px rgba(33, 55, 77, 0.2);
      }
    }
    .normal {
      background-color: #67c23a;
      border: 1px solid #67c23a;
    }
    .closed {
      background-color: #eb9e05;
      border: 1px solid #eb9e05;
    }
    .ordered,&.ordered:hover {
      background-color: #dedede;
      border: 1px solid #ddd;
      box-shadow: none;
      cursor: not-allowed;
    }
  }

  // 移动端适配
  @media screen and (max-width:450px) {
    .login {
      right: 10px;
      top: 10px;
    }
    .tabs {
      min-height: 100px;
      margin-top: 0;
      padding-bottom: 85px;
    }
    .form-order {
      width: 100%;
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      margin: 0;
      padding: 10px 0;
      background-color: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(2px);
      z-index: 2;
      .el-form-item {
        width: 46%!important;
        margin: 0 0 10px 2%;
        height: 32px;
      }
      .mobile {
        display: block;
        width: 45vw;
        margin-left: 52%;
        margin-top: -38px;
      }
      .login-btn-m {
        display: block;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        font-size: 14px;
        color: #fff;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
      }
    }
    .pc {
      display: none;
    }
  }
</style>
<style lang="less">
  .el-table .positive-row {
    background: #e2f0e4;
  }

  // 移动端适配
  @media screen and (max-width:450px) {
    body {
      padding: 0;
      margin: 0;
      font-size: 12px;
    }
    .el-form-item {
      .el-form-item__content {
        width: 100%;
      }
    }
    .el-main {
      padding: 0;
    }
  }
</style>
