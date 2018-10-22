/*
 * @Author: kai.yang
 * @Date: 2018-10-16 17:10:03
 * @LastEditors: kai.yang
 * @LastEditTime: 2018-10-21 10:10:30
 * @Description: 点餐统计列表
 */
<template>
  <el-table
    :data="statisticsList"
    style="width: 100%"
    v-loading="loading"
    element-loading-text="拼了老命在加载">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-table
          border
          stripe
          size="small"
          :data="props.row.childTable">
          <el-table-column
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="userName"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="count"
            label="明细"
            width="180">
          </el-table-column>
          <el-table-column
            prop="createdAt"
            label="点餐时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="others"
            label="备注">
          </el-table-column>
        </el-table>
        <div class="summary">
          <span class="cell title">合计</span>
          <span
            class="cell"
            v-for="(item, index) in getSummaries(props.row.childTable)"
            :key="index">
            {{item.name}}: <i class="count">{{item.count}}</i>
          </span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="type"
      label="主食"
      width="180">
    </el-table-column>
    <el-table-column
      prop="usersCount"
      label="人次">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'StatisticsList',

  props: {
    // 统计数据
    statisticsList: {
      type: Array,
      required: true
    },
    loading: Boolean
  },

  methods: {
    getSummaries (data) {
      // 用来存储统计信息
      const types = []
      data.forEach((item, index) => {
        const location = types.findIndex(type => type.name === item.count)
        if (location === -1) {
          types.push({
            name: item.count,
            count: 1
          })
        } else {
          types[location].count++
        }
      })
      return types
    }
  }
}
</script>

<style lang="less" scoped>
  .summary {
    box-sizing: border-box;
    margin-top: -1px;
    background-color: #f5f7fa;
    color: #606266;
    font-size: 12px;
    border: 1px solid #ebeef5;
    line-height: 23px;
    padding: 8px 0;
    .cell {
      display: inline-block;
      vertical-align: top;
      box-sizing: border-box;
      .count {
        font-size: 14px;
        font-weight: bold;
        font-style: normal;
        color: red;
      }
    }
    .title {
      width: 50px;
    }
  }
</style>
