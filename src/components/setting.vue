/*
 * @Author: kai.yang
 * @Date: 2018-10-16 19:20:09
 * @LastEditors: kai.yang
 * @LastEditTime: 2018-10-21 10:38:00
 * @Description: 设置面板
 */
<template>
  <div class="setting">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="点餐白名单" name="1">
        <el-form :model="whiteList" ref="whiteList" label-width="100px" class="menu-form">
          <el-form-item
            label="白名单"
            prop="value"
            :rules="{
              required: true, message: '白名单不能为空', trigger: 'blur'
            }"
          >
            <el-input v-model="whiteList.value" type="textarea" :rows="6" placeholder="输入员工白名单，并以空格隔开"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary" @click="submitForm('whiteList')">保 存</el-button>
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item title="菜单设置" name="2">
        <el-form :model="menuList" ref="menuList" label-width="100px" class="menu-form">
          <el-form-item
            v-for="(menu, index) in menuList.value"
            :label="'主食'+(index + 1)"
            :key="index"
            :prop="'value.' + index + '.name'"
            :rules="{
              required: true, message: '主食类型不能为空', trigger: 'blur'
            }"
          >
            <div class="form-item">
              <el-input v-model="menu.name" size="small" placeholder="输入新的主食类型"></el-input>
              <el-button size="small" type="danger" plain @click.prevent="removeMenu(index)">删除</el-button>
            </div>
            <div class="form-item">
              <el-input type="textarea" v-model="menu.values" placeholder="输入该类型的可选餐品，并以空格隔开"></el-input>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary" @click="submitForm('menuList')">保 存</el-button>
            <el-button size="small" @click="addMenu">新增主食类型</el-button>
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import Bus from '../bus'

export default {
  name: 'setting',

  props: {
  },

  data () {
    return {
      activeName: '1',
      whiteList: {
        // 点餐白名单
        value: ''
      },
      menuList: {
        // 菜单列表
        value: [
          {
            name: '米饭',
            values: ''
          }
        ]
      }
    }
  },

  mounted () {
    this.getWhiteList()
    this.getMenuList()
  },

  methods: {
    // 获取点餐白名单
    getWhiteList () {
      Bus.get('getWhiteList', (data) => {
        this.$set(this.whiteList, 'value', data.result)
      })
    },

    // 设置点餐白名单
    setWhiteList () {
      Bus.post('setWhiteList', this.whiteList, (data) => {
        Message({
          type: 'success',
          message: data.msg
        })
      })
    },

    // 获取点餐菜单
    getMenuList () {
      Bus.get('getMenuList', (data) => {
        this.$set(this.menuList, 'value', data.result)
      })
    },

    // 设置点餐菜单
    setMenuList () {
      Bus.post('setMenuList', this.menuList, (data) => {
        Message({
          type: 'success',
          message: data.msg
        })
      })
    },

    // 删除菜单
    removeMenu (index) {
      if (this.menuList.value.length <= 1) {
        Message({
          type: 'warning',
          message: '至少要保留一个主食类型'
        })
        return
      }
      this.menuList.value.splice(index, 1)
    },
    // 新增菜单
    addMenu () {
      this.menuList.value.push({
        name: '',
        values: ''
      })
    },
    // 监听提交表单
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName === 'whiteList') {
            this.setWhiteList()
          } else if (formName === 'menuList') {
            this.setMenuList()
          }
        } else {
          Message({
            type: 'error',
            message: '输入有误，请检查后重新提交'
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .setting {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    padding: 20px;
    max-width: 800px;
    margin: 10px auto 0;
    /deep/.el-collapse-item__arrow {
      line-height: 48px;
    }
    .tips {
      color: #666666;
      text-indent: 2em;
      line-height: 1;
      padding: 0 0 20px;
    }
    .btn-group {
      text-align: right;
      padding: 10px 0;
    }
    .menu-form {
      .form-item {
        padding-bottom: 5px;
        .el-input {
          width: 600px;
        }
        .el-textarea {
          width: 660px;
        }
      }
    }
  }
</style>
