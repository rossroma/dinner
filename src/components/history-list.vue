/*
 * @Author: kai.yang
 * @Date: 2018-10-16 17:28:17
 * @LastEditors: kai.yang
 * @LastEditTime: 2018-10-21 10:26:40
 * @Description: 历史点餐记录
 */
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
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
      label="主食类型">
      <template slot-scope="scope">
        {{scope.row.menuType && scope.row.menuType[0]}}
      </template>
    </el-table-column>
    <el-table-column
      label="主食明细">
      <template slot-scope="scope">
        {{scope.row.menuType && scope.row.menuType[1]}}
      </template>
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
</template>

<script>
export default {
  name: 'HistoryList',

  props: {
    // 历史数据
    tableData: {
      type: Array,
      required: true
    },
    loading: Boolean
  }
}
</script>

